import React, { useEffect, useRef } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import {
  useChurchLocation,
  useTransportInfoList,
} from "@/lib/hooks/useLocation";
import * as S from "./ChurchPage.style";

// 다음 지도 API 타입 선언
declare global {
  interface Window {
    daum: any;
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

  // 다음 지도 API 스크립트 로드 및 지도 초기화
  useEffect(() => {
    if (!location || !location.latitude || !location.longitude) return;

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_API_KEY || ""
    }&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.daum && window.daum.maps) {
        window.daum.maps.load(() => {
          if (!mapRef.current) return;

          const mapOption = {
            center: new window.daum.maps.LatLng(
              location.latitude!,
              location.longitude!
            ),
            level: 3,
          };

          const map = new window.daum.maps.Map(mapRef.current, mapOption);
          mapInstanceRef.current = map;

          // 마커 생성
          const markerPosition = new window.daum.maps.LatLng(
            location.latitude!,
            location.longitude!
          );
          const marker = new window.daum.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
          markerRef.current = marker;

          // 인포윈도우 생성
          const infowindow = new window.daum.maps.InfoWindow({
            content: `<div style="padding:10px;font-size:14px;">${location.address}</div>`,
          });
          infowindow.open(map, marker);
        });
      }
    };

    return () => {
      // 스크립트가 이미 추가되어 있으면 제거하지 않음 (다른 페이지에서도 사용 가능)
      const existingScript = document.querySelector(
        `script[src*="dapi.kakao.com/v2/maps/sdk.js"]`
      );
      if (existingScript && existingScript === script) {
        document.head.removeChild(script);
      }
    };
  }, [location]);

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
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
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
                    {location.address}
                    {location.addressDetail && ` ${location.addressDetail}`}
                  </S.LocationValue>
                </S.LocationItem>
                {location.phone && (
                  <S.LocationItem>
                    <S.LocationLabel>전화</S.LocationLabel>
                    <S.LocationValue>{location.phone}</S.LocationValue>
                  </S.LocationItem>
                )}
                {location.email && (
                  <S.LocationItem>
                    <S.LocationLabel>이메일</S.LocationLabel>
                    <S.LocationValue>{location.email}</S.LocationValue>
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
          {location && location.latitude && location.longitude ? (
            <S.MapContainer>
              <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
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
            {transportList.length > 0 ? (
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
