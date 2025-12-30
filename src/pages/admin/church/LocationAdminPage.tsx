import React, { useState, useEffect, useRef } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import DaumPostcode from "react-daum-postcode";
import {
  useChurchLocation,
  useTransportInfoList,
  useUpsertChurchLocation,
  useCreateTransportInfo,
  useUpdateTransportInfo,
  useDeleteTransportInfo,
  type TransportInfo,
  type ChurchLocation,
} from "@/lib/hooks/useLocation";
import * as S from "./LocationAdminPage.style";

// 네이버 지도 API 타입 선언
declare global {
  interface Window {
    naver: any;
  }
}

const LocationAdminPage: React.FC = () => {
  // 데이터 조회
  const { data: location, isLoading: locationLoading } = useChurchLocation();
  const { data: transportList = [] } = useTransportInfoList();

  // Mutations
  const upsertLocation = useUpsertChurchLocation();
  const createTransport = useCreateTransportInfo();
  const updateTransport = useUpdateTransportInfo();
  const deleteTransport = useDeleteTransportInfo();

  // 기본 주소 (정보창 표시용)
  const DEFAULT_ADDRESS = "부산 동래구 시실로211번길 6";

  // 교회 위치 관리 상태
  const [locationData, setLocationData] = useState({
    address: "",
    addressDetail: "",
    latitude: undefined as number | undefined,
    longitude: undefined as number | undefined,
    phone: "",
    email: "",
  });

  // 주소 검색 모달 상태
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  // 대중교통 안내 관리 상태
  const [editingTransport, setEditingTransport] = useState<number | null>(null);
  const [editingTransportData, setEditingTransportData] =
    useState<Partial<TransportInfo> | null>(null);
  const [newTransport, setNewTransport] = useState({
    type: "bus",
    description: "",
    order: 0,
  });

  /**
   * 교통수단 타입에 따른 제목 반환
   */
  const getTransportTitle = (type: string): string => {
    switch (type) {
      case "bus":
        return "버스";
      case "subway":
        return "지하철";
      case "car":
        return "자가용";
      case "other":
        return "기타";
      default:
        return "기타";
    }
  };

  // 지도 관련 ref
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const infoWindowRef = useRef<any>(null);

  // location 데이터가 로드되면 폼에 설정하고 지도 초기화
  useEffect(() => {
    // 로딩 중이면 실행하지 않음
    if (locationLoading) {
      return;
    }

    // location이 있으면 폼에 설정
    if (location) {
      console.log("Location data loaded:", location);

      // location을 로컬 변수에 저장하여 타입 추론 개선
      const currentLocation = location as ChurchLocation;

      setLocationData({
        address: currentLocation.address || "",
        addressDetail: currentLocation.addressDetail || "",
        latitude: currentLocation.latitude || undefined,
        longitude: currentLocation.longitude || undefined,
        phone: currentLocation.phone || "",
        email: currentLocation.email || "",
      });

      // 지도 초기화 함수
      const initializeMap = () => {
        // DB에서 가져온 좌표가 없으면 지도를 표시하지 않음
        if (!currentLocation.latitude || !currentLocation.longitude) {
          console.log(
            "No coordinates in location data, skipping map initialization"
          );
          return;
        }

        const lat = currentLocation.latitude;
        const lng = currentLocation.longitude;

        console.log("Initializing map with coordinates:", { lat, lng });

        // 지도가 이미 초기화되어 있으면 업데이트
        if (mapInstanceRef.current) {
          updateMap(lat, lng);
        } else if (mapRef.current && window.naver?.maps) {
          // 지도가 초기화되지 않았으면 새로 초기화
          initMap(lat, lng);
        }
      };

      // 네이버 지도 API가 로드되었는지 확인
      if (window.naver?.maps) {
        // API가 이미 로드되어 있으면 바로 초기화
        initializeMap();
      } else {
        // API가 아직 로드되지 않았으면 로드 대기
        const checkNaverMaps = setInterval(() => {
          if (window.naver?.maps) {
            clearInterval(checkNaverMaps);
            initializeMap();
          }
        }, 100);

        // 10초 후 타임아웃
        setTimeout(() => {
          clearInterval(checkNaverMaps);
        }, 10000);
      }
    }
  }, [location, locationLoading]);

  /**
   * 지도 초기화
   */
  const initMap = (lat: number, lng: number) => {
    if (!mapRef.current || !window.naver?.maps) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(lat, lng),
      zoom: 15,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
    mapInstanceRef.current = map;

    // 마커 생성
    const markerPosition = new window.naver.maps.LatLng(lat, lng);
    const marker = new window.naver.maps.Marker({
      position: markerPosition,
      map: map,
      icon: {
        content: `
          <div style="
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-size: 20px;
              font-weight: bold;
            ">📍</div>
          </div>
        `,
        anchor: new window.naver.maps.Point(20, 40),
      },
    });
    markerRef.current = marker;

    // 정보창 생성
    const infoWindow = new window.naver.maps.InfoWindow({
      content: `
        <div style="
          padding: 12px 16px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          min-width: 120px;
          text-align: center;
        ">
          <div style="
            font-size: 16px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">미래존교회</div>
          <div style="
            font-size: 12px;
            color: #6b7280;
            margin-top: 4px;
          ">${locationData.address || DEFAULT_ADDRESS}</div>
        </div>
      `,
      borderWidth: 0,
      backgroundColor: "transparent",
      pixelOffset: new window.naver.maps.Point(0, -10),
    });
    infoWindowRef.current = infoWindow;

    // 마커 클릭 시 정보창 표시
    window.naver.maps.Event.addListener(marker, "click", () => {
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    });

    // 지도 로드 시 정보창 자동 표시
    infoWindow.open(map, marker);
  };

  /**
   * 지도 업데이트 (좌표 변경 시)
   */
  const updateMap = (lat: number, lng: number) => {
    if (!mapInstanceRef.current || !window.naver?.maps) return;

    const moveLatLon = new window.naver.maps.LatLng(lat, lng);
    mapInstanceRef.current.setCenter(moveLatLon);

    // 마커 위치 업데이트
    if (markerRef.current) {
      markerRef.current.setPosition(moveLatLon);
    } else {
      const marker = new window.naver.maps.Marker({
        position: moveLatLon,
        map: mapInstanceRef.current,
        icon: {
          content: `
            <div style="
              background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
              width: 40px;
              height: 40px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                transform: rotate(45deg);
                color: white;
                font-size: 20px;
                font-weight: bold;
              ">📍</div>
            </div>
          `,
          anchor: new window.naver.maps.Point(20, 40),
        },
      });
      markerRef.current = marker;
    }

    // 정보창 업데이트
    if (infoWindowRef.current) {
      infoWindowRef.current.setContent(`
        <div style="
          padding: 12px 16px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          min-width: 120px;
          text-align: center;
        ">
          <div style="
            font-size: 16px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 4px;
            background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          ">미래존교회</div>
          <div style="
            font-size: 12px;
            color: #6b7280;
            margin-top: 4px;
          ">${locationData.address || DEFAULT_ADDRESS}</div>
        </div>
      `);
      infoWindowRef.current.open(mapInstanceRef.current, markerRef.current);
    }
  };

  /**
   * 주소 검색 모달 열기
   */
  const handleSearchAddress = () => {
    setIsPostcodeOpen(true);
  };

  /**
   * 다음 주소 검색 완료 핸들러
   */
  const handlePostcodeComplete = async (data: any) => {
    // 주소 정보 설정
    let addr = data.address; // 도로명 주소
    let extraAddr = ""; // 참고항목 변수

    // 법정동명이 있을 경우 추가
    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
      extraAddr += data.bname;
    }
    // 건물명이 있고, 공동주택일 경우 추가
    if (data.buildingName !== "" && data.apartment === "Y") {
      extraAddr +=
        extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
    }
    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다
    if (extraAddr !== "") {
      extraAddr = " (" + extraAddr + ")";
    }

    const fullAddress = addr + extraAddr;

    // 주소를 먼저 설정
    setLocationData((prev) => ({
      ...prev,
      address: fullAddress,
    }));

    // 네이버 지도 API가 로드될 때까지 대기
    const waitForNaverMaps = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (window.naver?.maps?.Service) {
          resolve();
          return;
        }

        let attempts = 0;
        const maxAttempts = 50; // 5초 대기 (100ms * 50)

        const checkInterval = setInterval(() => {
          attempts++;
          if (window.naver?.maps?.Service) {
            clearInterval(checkInterval);
            resolve();
          } else if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            reject(new Error("네이버 지도 API 로드를 기다리는 중 타임아웃"));
          }
        }, 100);
      });
    };

    try {
      // 네이버 지도 API 로드 대기
      await waitForNaverMaps();

      // 주소로 좌표 검색 (네이버 지도 Geocoder 사용)
      window.naver.maps.Service.geocode(
        {
          query: addr, // 도로명 주소만 사용 (참고항목 제외)
        },
        function (status: any, response: any) {
          if (status === window.naver.maps.Service.Status.ERROR) {
            console.error("Geocoding error:", status);
            alert("주소 검색에 실패했습니다. 주소를 확인해주세요.");
            setIsPostcodeOpen(false);
            return;
          }

          if (
            !response.v2 ||
            !response.v2.meta ||
            response.v2.meta.totalCount === 0
          ) {
            alert("검색 결과가 없습니다. 주소를 확인해주세요.");
            setIsPostcodeOpen(false);
            return;
          }

          const item = response.v2.addresses[0];
          console.log("item", item);
          if (!item || !item.y || !item.x) {
            alert("좌표 정보를 가져올 수 없습니다.");
            setIsPostcodeOpen(false);
            return;
          }

          const lat = parseFloat(item.y);
          const lng = parseFloat(item.x);

          // 위경도가 유효한지 확인
          if (isNaN(lat) || isNaN(lng)) {
            alert("유효하지 않은 좌표입니다.");
            setIsPostcodeOpen(false);
            return;
          }

          console.log("Geocoding result:", { address: fullAddress, lat, lng });

          // 주소와 좌표를 함께 업데이트
          setLocationData((prev) => ({
            ...prev,
            address: fullAddress,
            latitude: lat,
            longitude: lng,
          }));

          // 지도 업데이트
          if (mapInstanceRef.current) {
            updateMap(lat, lng);
          } else if (mapRef.current && window.naver?.maps) {
            initMap(lat, lng);
          }
        }
      );
    } catch (error) {
      console.error("Failed to load Naver Maps API:", error);
      alert(
        "지도 API를 불러오는 중 오류가 발생했습니다. 페이지를 새로고침해주세요."
      );
    }

    setIsPostcodeOpen(false);
  };

  /**
   * 교회 위치 정보 저장
   */
  const handleSaveLocation = async () => {
    if (!locationData.address) {
      alert("주소를 입력해주세요.");
      return;
    }

    // 위경도가 없으면 경고
    if (!locationData.latitude || !locationData.longitude) {
      const confirmSave = confirm(
        "위경도 정보가 없습니다. 저장하시겠습니까?\n(지도에 표시되지 않을 수 있습니다.)"
      );
      if (!confirmSave) {
        return;
      }
    }

    try {
      // 위경도를 포함하여 저장
      const saveData = {
        address: locationData.address,
        addressDetail: locationData.addressDetail || undefined,
        latitude: locationData.latitude || undefined,
        longitude: locationData.longitude || undefined,
        phone: locationData.phone || undefined,
        email: locationData.email || undefined,
      };

      console.log("Saving location data:", saveData);

      await upsertLocation.mutateAsync(saveData);
      alert("교회 위치 정보가 저장되었습니다.");
    } catch (error) {
      console.error("Save error:", error);
      alert("저장 중 오류가 발생했습니다.");
    }
  };

  /**
   * 대중교통 안내 추가
   */
  const handleAddTransport = async () => {
    if (!newTransport.description) {
      alert("안내 내용을 입력해주세요.");
      return;
    }
    try {
      // 셀렉트박스에서 선택한 타입에 따라 제목 자동 설정
      const transportData = {
        ...newTransport,
        title: getTransportTitle(newTransport.type),
      };
      await createTransport.mutateAsync(transportData);
      setNewTransport({ type: "bus", description: "", order: 0 });
      alert("대중교통 안내가 추가되었습니다.");
    } catch (error) {
      alert("추가 중 오류가 발생했습니다.");
    }
  };

  /**
   * 대중교통 안내 수정 시작
   */
  const handleStartEditTransport = (item: TransportInfo) => {
    setEditingTransport(item.id);
    setEditingTransportData({
      type: item.type,
      description: item.description,
      order: item.order,
    });
  };

  /**
   * 대중교통 안내 수정 저장
   */
  const handleUpdateTransport = async (id: number) => {
    if (!editingTransportData) return;
    try {
      // 셀렉트박스에서 선택한 타입에 따라 제목 자동 설정
      const updateData = {
        ...editingTransportData,
        title: getTransportTitle(editingTransportData.type || "other"),
      };
      await updateTransport.mutateAsync({ id, data: updateData });
      setEditingTransport(null);
      setEditingTransportData(null);
      alert("대중교통 안내가 수정되었습니다.");
    } catch (error) {
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  /**
   * 대중교통 안내 삭제
   */
  const handleDeleteTransport = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteTransport.mutateAsync(id);
      alert("대중교통 안내가 삭제되었습니다.");
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  if (locationLoading) {
    return (
      <AdminMainTemplate
        containerType="standard"
        pageTitle="오시는 길 관리"
        breadcrumb={["교회 정보 관리", "오시는 길 관리"]}
      >
        <S.Container>
          <LoadingSpinner size="medium" />
        </S.Container>
      </AdminMainTemplate>
    );
  }

  return (
    <AdminMainTemplate
      containerType="standard"
      pageTitle="오시는 길 관리"
      breadcrumb={["관리자", "교회소개 관리", "오시는 길 관리"]}
    >
      <S.Container>
        {/* 교회 위치 정보 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 위치 정보</S.SectionTitle>
          </S.SectionHeader>

          {/* 주소 검색 및 입력 */}
          <S.FormGroup>
            <S.FormLabel>주소 *</S.FormLabel>
            <S.AddressSearchRow>
              <S.Input
                type="text"
                value={locationData.address}
                onChange={(e) =>
                  setLocationData({ ...locationData, address: e.target.value })
                }
                placeholder="주소를 검색하거나 직접 입력하세요"
                readOnly
                style={{ flex: 1 }}
              />
              <S.Button onClick={handleSearchAddress}>주소 검색</S.Button>
            </S.AddressSearchRow>
            {/* 다음 주소 검색 모달 */}
            {isPostcodeOpen && (
              <S.PostcodeModal>
                <S.PostcodeModalOverlay
                  onClick={() => setIsPostcodeOpen(false)}
                />
                <S.PostcodeModalContent>
                  <S.PostcodeModalHeader>
                    <S.PostcodeModalTitle>주소 검색</S.PostcodeModalTitle>
                    <S.Button onClick={() => setIsPostcodeOpen(false)}>
                      닫기
                    </S.Button>
                  </S.PostcodeModalHeader>
                  <DaumPostcode
                    onComplete={handlePostcodeComplete}
                    autoClose={false}
                  />
                </S.PostcodeModalContent>
              </S.PostcodeModal>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.FormLabel>상세 주소</S.FormLabel>
            <S.Input
              type="text"
              value={locationData.addressDetail}
              onChange={(e) =>
                setLocationData({
                  ...locationData,
                  addressDetail: e.target.value,
                })
              }
              placeholder="건물명, 호수 등 상세 주소를 입력하세요"
            />
          </S.FormGroup>

          <S.FormRow>
            <S.FormGroup style={{ flex: 1 }}>
              <S.FormLabel>전화번호</S.FormLabel>
              <S.Input
                type="tel"
                value={locationData.phone}
                onChange={(e) =>
                  setLocationData({ ...locationData, phone: e.target.value })
                }
                placeholder="055-123-4567"
              />
            </S.FormGroup>
            <S.FormGroup style={{ flex: 1 }}>
              <S.FormLabel>이메일</S.FormLabel>
              <S.Input
                type="email"
                value={locationData.email}
                onChange={(e) =>
                  setLocationData({ ...locationData, email: e.target.value })
                }
                placeholder="info@miraezone.church"
              />
            </S.FormGroup>
          </S.FormRow>

          {/* 지도 표시 */}
          <S.FormGroup>
            <S.FormLabel>지도</S.FormLabel>
            <S.MapContainer>
              <S.Map ref={mapRef} />
              {(!locationData.latitude || !locationData.longitude) && (
                <S.MapPlaceholder>
                  주소를 검색하면 지도가 표시됩니다
                </S.MapPlaceholder>
              )}
            </S.MapContainer>
          </S.FormGroup>

          <S.ButtonGroup>
            <S.Button onClick={handleSaveLocation} $primary>
              위치 정보 저장
            </S.Button>
          </S.ButtonGroup>
        </S.Section>

        {/* 대중교통 안내 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>대중교통 안내</S.SectionTitle>
          </S.SectionHeader>

          {/* 대중교통 안내 추가 폼 */}
          <S.AddForm>
            <S.FormTitle>대중교통 안내 추가</S.FormTitle>
            <S.FormRow>
              <S.Select
                value={newTransport.type}
                onChange={(e) =>
                  setNewTransport({ ...newTransport, type: e.target.value })
                }
                style={{ width: "150px" }}
              >
                <option value="bus">버스</option>
                <option value="subway">지하철</option>
                <option value="car">자가용</option>
                <option value="other">기타</option>
              </S.Select>
              <S.TextArea
                value={newTransport.description}
                onChange={(e) =>
                  setNewTransport({
                    ...newTransport,
                    description: e.target.value,
                  })
                }
                placeholder="안내 내용 (줄바꿈은 <br /> 태그 사용)"
                rows={2}
                style={{ flex: 2, minWidth: "300px" }}
              />
              <S.Input
                type="number"
                value={newTransport.order}
                onChange={(e) =>
                  setNewTransport({
                    ...newTransport,
                    order: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="순서"
                style={{ width: "100px" }}
              />
              <S.Button onClick={handleAddTransport}>추가</S.Button>
            </S.FormRow>
          </S.AddForm>

          {/* 대중교통 안내 목록 */}
          <S.TransportListContainer>
            <S.TransportListHeader>
              <S.TransportListTitle>대중교통 안내 목록</S.TransportListTitle>
              <S.TransportCount>
                {Array.isArray(transportList) ? transportList.length : 0}개
              </S.TransportCount>
            </S.TransportListHeader>
            <S.TransportListScrollable>
              {Array.isArray(transportList) && transportList.length > 0 ? (
                transportList.map((transport) => (
                  <S.TransportItem key={transport.id}>
                    {editingTransport === transport.id &&
                    editingTransportData ? (
                      <S.EditForm>
                        <S.Select
                          value={editingTransportData.type || ""}
                          onChange={(e) =>
                            setEditingTransportData({
                              ...editingTransportData,
                              type: e.target.value,
                            })
                          }
                          style={{ width: "150px" }}
                        >
                          <option value="bus">버스</option>
                          <option value="subway">지하철</option>
                          <option value="car">자가용</option>
                          <option value="other">기타</option>
                        </S.Select>
                        <S.TextArea
                          value={editingTransportData.description || ""}
                          onChange={(e) =>
                            setEditingTransportData({
                              ...editingTransportData,
                              description: e.target.value,
                            })
                          }
                          placeholder="안내 내용"
                          rows={2}
                          style={{ flex: 2, minWidth: "300px" }}
                        />
                        <S.Input
                          type="number"
                          value={editingTransportData.order || 0}
                          onChange={(e) =>
                            setEditingTransportData({
                              ...editingTransportData,
                              order: parseInt(e.target.value) || 0,
                            })
                          }
                          placeholder="순서"
                          style={{ width: "100px" }}
                        />
                        <S.ButtonGroup>
                          <S.Button
                            onClick={() => handleUpdateTransport(transport.id)}
                          >
                            저장
                          </S.Button>
                          <S.Button
                            onClick={() => {
                              setEditingTransport(null);
                              setEditingTransportData(null);
                            }}
                          >
                            취소
                          </S.Button>
                        </S.ButtonGroup>
                      </S.EditForm>
                    ) : (
                      <>
                        <S.TransportContent>
                          <S.TransportTitle>
                            {transport.type === "bus" && "🚌"}
                            {transport.type === "subway" && "🚇"}
                            {transport.type === "car" && "🚗"}
                            {transport.type === "other" && "📍"}{" "}
                            {transport.title}
                          </S.TransportTitle>
                          <S.TransportDesc
                            dangerouslySetInnerHTML={{
                              __html: transport.description,
                            }}
                          />
                        </S.TransportContent>
                        <S.ButtonGroup>
                          <S.Button
                            onClick={() => handleStartEditTransport(transport)}
                          >
                            수정
                          </S.Button>
                          <S.Button
                            onClick={() => handleDeleteTransport(transport.id)}
                            $danger
                          >
                            삭제
                          </S.Button>
                        </S.ButtonGroup>
                      </>
                    )}
                  </S.TransportItem>
                ))
              ) : (
                <S.EmptyMessage>
                  등록된 대중교통 안내가 없습니다.
                </S.EmptyMessage>
              )}
            </S.TransportListScrollable>
          </S.TransportListContainer>
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default LocationAdminPage;
