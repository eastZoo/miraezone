import React, { useEffect, useRef } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import {
  useChurchLocation,
  useTransportInfoList,
  type ChurchLocation,
} from "@/lib/hooks/useLocation";
import * as S from "./ChurchPage.style";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";

// 네이버 지도 API 타입 선언
declare global {
  interface Window {
    naver: any;
  }
}

const LocationPage: React.FC = () => {
  const subMenuItems = [
    { title: "교회 소개", path: "/church/introduce" },
    { title: "교회 조직", path: "/church/organization" },
    { title: "오시는 길", path: "/church/location" },
  ];

  // 데이터 조회
  const { data: location, isLoading: locationLoading } = useChurchLocation();
  const { data: transportList = [], isLoading: transportLoading } =
    useTransportInfoList();

  // 지도 관련 ref
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const infoWindowRef = useRef<any>(null);

  // location 데이터가 로드되면 지도 초기화
  useEffect(() => {
    // 로딩 중이면 실행하지 않음
    if (locationLoading) {
      return;
    }

    console.log("location", location);
    console.log(
      "location.latitude",
      location ? (location as ChurchLocation).latitude : undefined
    );
    console.log(
      "location.longitude",
      location ? (location as ChurchLocation).longitude : undefined
    );

    // location이 없으면 실행하지 않음
    if (!location) {
      return;
    }

    // location을 로컬 변수에 저장하여 타입 추론 개선
    const currentLocation = location as ChurchLocation;

    // 지도 초기화 함수
    const initializeMap = () => {
      // DB에서 가져온 좌표가 없으면 지도를 표시하지 않음
      if (!currentLocation.latitude || !currentLocation.longitude) {
        console.log(
          "No coordinates in location data, skipping map initialization"
        );
        return;
      }

      if (!mapRef.current || !window.naver?.maps) return;

      const lat =
        typeof currentLocation.latitude === "string"
          ? parseFloat(currentLocation.latitude)
          : currentLocation.latitude;
      const lng =
        typeof currentLocation.longitude === "string"
          ? parseFloat(currentLocation.longitude)
          : currentLocation.longitude;

      console.log("Initializing map with coordinates:", { lat, lng });

      // 지도가 이미 초기화되어 있으면 업데이트
      if (mapInstanceRef.current) {
        updateMap(lat, lng, currentLocation.address);
      } else {
        // 지도가 초기화되지 않았으면 새로 초기화
        initMap(lat, lng, currentLocation.address);
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
  }, [location, locationLoading]);

  /**
   * 지도 초기화
   */
  const initMap = (lat: number, lng: number, address?: string) => {
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
          ">${address || ""}</div>
        </div>
      `,
      borderWidth: 0,
      backgroundColor: "transparent",
      pixelOffset: new window.naver.maps.Point(0, -10),
    });
    infoWindowRef.current = infoWindow;

    // 마커 클릭 시 정보창 토글
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
  const updateMap = (lat: number, lng: number, address?: string) => {
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
          ">${address || ""}</div>
        </div>
      `);
      infoWindowRef.current.open(mapInstanceRef.current, markerRef.current);
    }
  };

  // 교통수단별 아이콘 매핑
  const getTransportIcon = (type: string) => {
    switch (type) {
      case "bus":
        return "🚌";
      case "subway":
        return "🚇";
      case "car":
        return "🚗";
      default:
        return "📍";
    }
  };

  if (locationLoading || transportLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="교회소개"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/church/location"
        pageTitle="오시는 길"
        breadcrumb={["Home", "교회소개", "오시는 길"]}
      >
        <S.ContentWrapper>
          <LoadingSpinner size="medium" />
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="교회소개"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/church/location"
      pageTitle="오시는 길"
      breadcrumb={["Home", "교회소개", "오시는 길"]}
    >
      <S.ContentWrapper>
        <S.Section>
          <S.SectionTitle>교회 위치</S.SectionTitle>
          <S.SectionContent>
            {location ? (
              <S.LocationInfo>
                <S.LocationItem>
                  <S.LocationLabel>주소</S.LocationLabel>
                  <S.LocationValue>
                    {(location as ChurchLocation).address}
                    {(location as ChurchLocation).addressDetail &&
                      ` ${(location as ChurchLocation).addressDetail}`}
                  </S.LocationValue>
                </S.LocationItem>
                {(location as ChurchLocation).phone && (
                  <S.LocationItem>
                    <S.LocationLabel>전화</S.LocationLabel>
                    <S.LocationValue>
                      {(location as ChurchLocation).phone}
                    </S.LocationValue>
                  </S.LocationItem>
                )}
                {(location as ChurchLocation).email && (
                  <S.LocationItem>
                    <S.LocationLabel>이메일</S.LocationLabel>
                    <S.LocationValue>
                      {(location as ChurchLocation).email}
                    </S.LocationValue>
                  </S.LocationItem>
                )}
              </S.LocationInfo>
            ) : (
              <p>등록된 교회 위치 정보가 없습니다.</p>
            )}
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>지도</S.SectionTitle>
          {location &&
          (location as ChurchLocation).latitude &&
          (location as ChurchLocation).longitude ? (
            <S.MapContainer>
              <S.Map ref={mapRef} />
            </S.MapContainer>
          ) : (
            <S.MapContainer>
              <S.MapPlaceholder>
                <p>지도가 여기에 표시됩니다</p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    color: "#999",
                    marginTop: "12px",
                  }}
                >
                  교회 위치 정보를 등록하면 지도가 표시됩니다
                </p>
              </S.MapPlaceholder>
            </S.MapContainer>
          )}
        </S.Section>

        <S.Section>
          <S.SectionTitle>대중교통 안내</S.SectionTitle>
          <S.SectionContent>
            {Array.isArray(transportList) && transportList.length > 0 ? (
              <S.TransportList>
                {transportList.map((transport) => (
                  <S.TransportItem key={transport.id}>
                    <S.TransportIcon>
                      {getTransportIcon(transport.type)}
                    </S.TransportIcon>
                    <S.TransportContent>
                      <S.TransportTitle>{transport.title}</S.TransportTitle>
                      <S.TransportDesc
                        dangerouslySetInnerHTML={{
                          __html: transport.description,
                        }}
                      />
                    </S.TransportContent>
                  </S.TransportItem>
                ))}
              </S.TransportList>
            ) : (
              <S.TransportList>
                <S.TransportItem>
                  <S.TransportIcon>🚌</S.TransportIcon>
                  <S.TransportContent>
                    <S.TransportTitle>버스</S.TransportTitle>
                    <S.TransportDesc>
                      지선 123, 간선 456번 버스 이용
                      <br />
                      미래존교회 정류장 하차 (도보 2분)
                    </S.TransportDesc>
                  </S.TransportContent>
                </S.TransportItem>
                <S.TransportItem>
                  <S.TransportIcon>🚇</S.TransportIcon>
                  <S.TransportContent>
                    <S.TransportTitle>지하철</S.TransportTitle>
                    <S.TransportDesc>
                      지하철 2호선 동부역 3번 출구
                      <br />
                      도보 10분 또는 버스 5분
                    </S.TransportDesc>
                  </S.TransportContent>
                </S.TransportItem>
                <S.TransportItem>
                  <S.TransportIcon>🚗</S.TransportIcon>
                  <S.TransportContent>
                    <S.TransportTitle>자가용</S.TransportTitle>
                    <S.TransportDesc>
                      교회 주차장 이용 가능 (약 50대 수용)
                      <br />
                      주일 오전 예배 시 주차 직원 배치
                    </S.TransportDesc>
                  </S.TransportContent>
                </S.TransportItem>
              </S.TransportList>
            )}
          </S.SectionContent>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default LocationPage;
