import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./ChurchPage.style";

const LocationPage: React.FC = () => {
  const subMenuItems = [
    { title: "교회 소개", path: "/church/introduce" },
    { title: "교회 조직", path: "/church/organization" },
    { title: "오시는 길", path: "/church/location" },
  ];

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
            <S.LocationInfo>
              <S.LocationItem>
                <S.LocationLabel>주소</S.LocationLabel>
                <S.LocationValue>
                  경상남도 김해시 동부로 123-45 (구) 미래존교회
                </S.LocationValue>
              </S.LocationItem>
              <S.LocationItem>
                <S.LocationLabel>전화</S.LocationLabel>
                <S.LocationValue>055-123-4567</S.LocationValue>
              </S.LocationItem>
              <S.LocationItem>
                <S.LocationLabel>이메일</S.LocationLabel>
                <S.LocationValue>info@miraezone.church</S.LocationValue>
              </S.LocationItem>
            </S.LocationInfo>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>지도</S.SectionTitle>
          <S.MapContainer>
            <S.MapPlaceholder>
              <p>지도가 여기에 표시됩니다</p>
              <p style={{ fontSize: "1.4rem", color: "#999", marginTop: "12px" }}>
                (카카오맵 또는 구글맵 API 연동 필요)
              </p>
            </S.MapPlaceholder>
          </S.MapContainer>
        </S.Section>

        <S.Section>
          <S.SectionTitle>대중교통 안내</S.SectionTitle>
          <S.SectionContent>
            <S.TransportList>
              <S.TransportItem>
                <S.TransportIcon>🚌</S.TransportIcon>
                <S.TransportContent>
                  <S.TransportTitle>버스</S.TransportTitle>
                  <S.TransportDesc>
                    지선 123, 간선 456번 버스 이용<br />
                    미래존교회 정류장 하차 (도보 2분)
                  </S.TransportDesc>
                </S.TransportContent>
              </S.TransportItem>
              <S.TransportItem>
                <S.TransportIcon>🚇</S.TransportIcon>
                <S.TransportContent>
                  <S.TransportTitle>지하철</S.TransportTitle>
                  <S.TransportDesc>
                    지하철 2호선 동부역 3번 출구<br />
                    도보 10분 또는 버스 5분
                  </S.TransportDesc>
                </S.TransportContent>
              </S.TransportItem>
              <S.TransportItem>
                <S.TransportIcon>🚗</S.TransportIcon>
                <S.TransportContent>
                  <S.TransportTitle>자가용</S.TransportTitle>
                  <S.TransportDesc>
                    교회 주차장 이용 가능 (약 50대 수용)<br />
                    주일 오전 예배 시 주차 직원 배치
                  </S.TransportDesc>
                </S.TransportContent>
              </S.TransportItem>
            </S.TransportList>
          </S.SectionContent>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default LocationPage;

