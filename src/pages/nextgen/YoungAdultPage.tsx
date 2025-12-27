import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./NextGenPage.style";

const YoungAdultPage: React.FC = () => {
  const subMenuItems = [
    { title: "유초등부", path: "/nextgen/elementary" },
    { title: "중고등부", path: "/nextgen/youth" },
    { title: "청년부", path: "/nextgen/youngadult" },
    { title: "다음세대 소식", path: "/nextgen/news" },
  ];

  return (
    <SubMenuTemplate
      mainMenuTitle="다음세대"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/nextgen/youngadult"
      pageTitle="청년부"
      breadcrumb={["Home", "다음세대", "청년부"]}
    >
      <S.ContentWrapper>
        <S.HeroSection>
          <S.HeroImage />
          <S.HeroContent>
            <S.HeroTitle>청년부</S.HeroTitle>
            <S.HeroSubtitle>Young Adult Ministry</S.HeroSubtitle>
          </S.HeroContent>
        </S.HeroSection>

        <S.Section>
          <S.SectionTitle>청년부 소개</S.SectionTitle>
          <S.SectionContent>
            <p>
              청년부는 대학생과 취업 준비생, 직장 청년들을 위한 부서입니다. 현대 사회의
              다양한 도전과 선택의 순간에 하나님의 말씀과 지혜로 앞서나갈 수 있도록
              돕습니다.
            </p>
            <p>
              매주 주일 오후 4시에 예배가 있으며, 성경공부와 소그룹 모임을 통해 서로를
              격려하고 함께 성장하며, 하나님의 부르심을 찾아가는 청년 공동체입니다.
            </p>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>활동 안내</S.SectionTitle>
          <S.ActivityGrid>
            <S.ActivityCard>
              <S.ActivityIcon>📖</S.ActivityIcon>
              <S.ActivityTitle>말씀 나눔</S.ActivityTitle>
              <S.ActivityDescription>
                깊이 있는 성경 말씀 나눔과 삶에 적용하기
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>💬</S.ActivityIcon>
              <S.ActivityTitle>소그룹</S.ActivityTitle>
              <S.ActivityDescription>
                작은 그룹에서 나누는 신앙과 삶의 이야기
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🤝</S.ActivityIcon>
              <S.ActivityTitle>선교 활동</S.ActivityTitle>
              <S.ActivityDescription>
                봉사활동과 선교를 통한 실천적 사랑
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🎉</S.ActivityIcon>
              <S.ActivityTitle>친교 모임</S.ActivityTitle>
              <S.ActivityDescription>
                함께하는 즐거운 시간과 추억 만들기
              </S.ActivityDescription>
            </S.ActivityCard>
          </S.ActivityGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>예배 시간</S.SectionTitle>
          <S.ScheduleTable>
            <S.ScheduleRow>
              <S.ScheduleLabel>주일 예배</S.ScheduleLabel>
              <S.ScheduleValue>주일 오후 4:00</S.ScheduleValue>
            </S.ScheduleRow>
            <S.ScheduleRow>
              <S.ScheduleLabel>장소</S.ScheduleLabel>
              <S.ScheduleValue>청년실</S.ScheduleValue>
            </S.ScheduleRow>
            <S.ScheduleRow>
              <S.ScheduleLabel>대상</S.ScheduleLabel>
              <S.ScheduleValue>대학생, 취업준비생, 직장 청년 (만 19-30세)</S.ScheduleValue>
            </S.ScheduleRow>
          </S.ScheduleTable>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default YoungAdultPage;

