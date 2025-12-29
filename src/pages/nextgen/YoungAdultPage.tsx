import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNextGenDepartment } from "@/lib/hooks/useNextGenDepartment";
import * as S from "./NextGenPage.style";

const YoungAdultPage: React.FC = () => {
  const subMenuItems = [
    { title: "유초등부", path: "/nextgen/elementary" },
    { title: "중고등부", path: "/nextgen/youth" },
    { title: "청년부", path: "/nextgen/youngadult" },
    { title: "앨범", path: "/nextgen/youngadult/albums", isSubItem: true },
    { title: "다음세대 소식", path: "/nextgen/news" },
  ];

  // 부서 정보 조회
  const { data: department, isLoading } = useNextGenDepartment("청년부");

  return (
    <SubMenuTemplate
      mainMenuTitle="다음세대"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/nextgen/youngadult"
      pageTitle="청년부"
      breadcrumb={["Home", "다음세대", "청년부"]}
    >
      <S.ContentWrapper>
        {isLoading ? (
          <div>로딩 중...</div>
        ) : (
          <>
            <S.HeroSection>
              {department?.heroImageUrl ? (
                <S.HeroImage
                  style={{
                    backgroundImage: `url(${department.heroImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <S.HeroImage />
              )}
              <S.HeroContent>
                <S.HeroTitle>청년부</S.HeroTitle>
                <S.HeroSubtitle>Young Adult Ministry</S.HeroSubtitle>
              </S.HeroContent>
            </S.HeroSection>

            <S.Section>
              <S.SectionTitle>청년부 소개</S.SectionTitle>
              <S.SectionContent>
                {department?.introduction ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: department.introduction.replace(/\n/g, "<br />"),
                    }}
                  />
                ) : (
                  <>
                    <p>
                      청년부는 대학생과 취업 준비생, 직장 청년들을 위한
                      부서입니다. 현대 사회의 다양한 도전과 선택의 순간에
                      하나님의 말씀과 지혜로 앞서나갈 수 있도록 돕습니다.
                    </p>
                    <p>
                      매주 주일 오후 4시에 예배가 있으며, 성경공부와 소그룹
                      모임을 통해 서로를 격려하고 함께 성장하며, 하나님의
                      부르심을 찾아가는 청년 공동체입니다.
                    </p>
                  </>
                )}
              </S.SectionContent>
            </S.Section>

            <S.Section>
              <S.SectionTitle>예배 시간</S.SectionTitle>
              <S.ScheduleTable>
                <S.ScheduleRow>
                  <S.ScheduleLabel>주일 예배</S.ScheduleLabel>
                  <S.ScheduleValue>
                    {department?.worshipTime || "주일 오후 4:00"}
                  </S.ScheduleValue>
                </S.ScheduleRow>
                <S.ScheduleRow>
                  <S.ScheduleLabel>장소</S.ScheduleLabel>
                  <S.ScheduleValue>
                    {department?.place || "청년실"}
                  </S.ScheduleValue>
                </S.ScheduleRow>
                <S.ScheduleRow>
                  <S.ScheduleLabel>대상</S.ScheduleLabel>
                  <S.ScheduleValue>
                    {department?.target ||
                      "대학생, 취업준비생, 직장 청년 (만 19-30세)"}
                  </S.ScheduleValue>
                </S.ScheduleRow>
                <S.ScheduleRow>
                  <S.ScheduleLabel>담당자 연락처</S.ScheduleLabel>
                  <S.ScheduleValue>
                    {department?.contact || "010-1234-5678"}
                  </S.ScheduleValue>
                </S.ScheduleRow>
              </S.ScheduleTable>
            </S.Section>
          </>
        )}
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default YoungAdultPage;
