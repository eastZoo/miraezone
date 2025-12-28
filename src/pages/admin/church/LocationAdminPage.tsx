import React, { useState, useEffect, useRef } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import DaumPostcode from "react-daum-postcode";
import {
  useChurchLocation,
  useTransportInfoList,
  useUpsertChurchLocation,
  useCreateTransportInfo,
  useUpdateTransportInfo,
  useDeleteTransportInfo,
  type ChurchLocation,
  type TransportInfo,
} from "@/lib/hooks/useLocation";
import * as S from "./LocationAdminPage.style";

// 다음 지도 API 타입 선언
declare global {
  interface Window {
    daum: any;
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
  const [editingTransportData, setEditingTransportData] = useState<Partial<TransportInfo> | null>(null);
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

  // 다음 지도 API 스크립트 로드
  useEffect(() => {
    // 다음 지도 API 스크립트
    const mapScript = document.createElement("script");
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY || ""}&autoload=false&libraries=services`;
    mapScript.async = true;

    // 지도 API 로드
    if (!document.querySelector(`script[src*="dapi.kakao.com/v2/maps/sdk.js"]`)) {
      document.head.appendChild(mapScript);
    }

    mapScript.onload = () => {
      if (window.daum && window.daum.maps) {
        window.daum.maps.load(() => {
          // 지도 초기화는 location 데이터가 로드된 후에 수행
          if (location && location.latitude && location.longitude) {
            initMap(location.latitude, location.longitude);
          }
        });
      }
    };

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거하지 않음 (다른 페이지에서도 사용 가능)
    };
  }, []);

  // location 데이터가 로드되면 폼에 설정
  useEffect(() => {
    if (location) {
      setLocationData({
        address: location.address || "",
        addressDetail: location.addressDetail || "",
        latitude: location.latitude || undefined,
        longitude: location.longitude || undefined,
        phone: location.phone || "",
        email: location.email || "",
      });

      // 지도가 이미 초기화되어 있고 좌표가 있으면 지도 업데이트
      if (location.latitude && location.longitude && mapInstanceRef.current) {
        updateMap(location.latitude, location.longitude);
      } else if (location.latitude && location.longitude && window.daum?.maps) {
        initMap(location.latitude, location.longitude);
      }
    }
  }, [location]);

  /**
   * 지도 초기화
   */
  const initMap = (lat: number, lng: number) => {
    if (!mapRef.current || !window.daum?.maps) return;

    const mapOption = {
      center: new window.daum.maps.LatLng(lat, lng),
      level: 3,
    };

    const map = new window.daum.maps.Map(mapRef.current, mapOption);
    mapInstanceRef.current = map;

    // 마커 생성
    const markerPosition = new window.daum.maps.LatLng(lat, lng);
    const marker = new window.daum.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    markerRef.current = marker;
  };

  /**
   * 지도 업데이트 (좌표 변경 시)
   */
  const updateMap = (lat: number, lng: number) => {
    if (!mapInstanceRef.current || !window.daum?.maps) return;

    const moveLatLon = new window.daum.maps.LatLng(lat, lng);
    mapInstanceRef.current.setCenter(moveLatLon);

    // 마커 위치 업데이트
    if (markerRef.current) {
      markerRef.current.setPosition(moveLatLon);
    } else {
      const marker = new window.daum.maps.Marker({
        position: moveLatLon,
      });
      marker.setMap(mapInstanceRef.current);
      markerRef.current = marker;
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
  const handlePostcodeComplete = (data: any) => {
    // 주소 정보 설정
    let addr = data.address; // 도로명 주소
    let extraAddr = ""; // 참고항목 변수

    // 법정동명이 있을 경우 추가
    if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
      extraAddr += data.bname;
    }
    // 건물명이 있고, 공동주택일 경우 추가
    if (data.buildingName !== "" && data.apartment === "Y") {
      extraAddr += extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
    }
    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다
    if (extraAddr !== "") {
      extraAddr = " (" + extraAddr + ")";
    }

    setLocationData((prev) => ({
      ...prev,
      address: addr + extraAddr,
    }));

    // 주소로 좌표 검색
    if (window.daum?.maps?.services) {
      const geocoder = new window.daum.maps.services.Geocoder();
      geocoder.addressSearch(addr, function (result: any, status: any) {
        if (status === window.daum.maps.services.Status.OK) {
          setLocationData((prev) => ({
            ...prev,
            latitude: parseFloat(result[0].y),
            longitude: parseFloat(result[0].x),
          }));

          // 지도 업데이트
          if (mapInstanceRef.current) {
            updateMap(parseFloat(result[0].y), parseFloat(result[0].x));
          } else if (mapRef.current) {
            initMap(parseFloat(result[0].y), parseFloat(result[0].x));
          }
        }
      });
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
    try {
      await upsertLocation.mutateAsync(locationData);
      alert("교회 위치 정보가 저장되었습니다.");
    } catch (error) {
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
        breadcrumb={["관리자", "교회 정보 관리", "오시는 길 관리"]}
      >
        <S.Container>로딩 중...</S.Container>
      </AdminMainTemplate>
    );
  }

  return (
    <AdminMainTemplate
      containerType="standard"
      pageTitle="오시는 길 관리"
      breadcrumb={["관리자", "교회 정보 관리", "오시는 길 관리"]}
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
                <S.PostcodeModalOverlay onClick={() => setIsPostcodeOpen(false)} />
                <S.PostcodeModalContent>
                  <S.PostcodeModalHeader>
                    <S.PostcodeModalTitle>주소 검색</S.PostcodeModalTitle>
                    <S.Button onClick={() => setIsPostcodeOpen(false)}>닫기</S.Button>
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
                setLocationData({ ...locationData, addressDetail: e.target.value })
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
                  setNewTransport({ ...newTransport, description: e.target.value })
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
              <S.TransportCount>{transportList.length}개</S.TransportCount>
            </S.TransportListHeader>
            <S.TransportListScrollable>
              {transportList.length > 0 ? (
                transportList.map((transport) => (
                  <S.TransportItem key={transport.id}>
                    {editingTransport === transport.id && editingTransportData ? (
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
                          <S.Button onClick={() => handleUpdateTransport(transport.id)}>저장</S.Button>
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
                            {transport.type === "other" && "📍"}
                            {" "}
                            {transport.title}
                          </S.TransportTitle>
                          <S.TransportDesc
                            dangerouslySetInnerHTML={{ __html: transport.description }}
                          />
                        </S.TransportContent>
                        <S.ButtonGroup>
                          <S.Button onClick={() => handleStartEditTransport(transport)}>수정</S.Button>
                          <S.Button onClick={() => handleDeleteTransport(transport.id)} $danger>
                            삭제
                          </S.Button>
                        </S.ButtonGroup>
                      </>
                    )}
                  </S.TransportItem>
                ))
              ) : (
                <S.EmptyMessage>등록된 대중교통 안내가 없습니다.</S.EmptyMessage>
              )}
            </S.TransportListScrollable>
          </S.TransportListContainer>
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default LocationAdminPage;

