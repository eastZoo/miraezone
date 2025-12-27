import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./NextGenPage.style";

const YouthPage: React.FC = () => {
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
      currentSubMenuPath="/nextgen/youth"
      pageTitle="중고등부"
      breadcrumb={["Home", "다음세대", "중고등부"]}
    >
      <S.ContentWrapper>
        <S.HeroSection>
          <S.HeroImage />
          <S.HeroContent>
            <S.HeroTitle>중고등부</S.HeroTitle>
            <S.HeroSubtitle>Youth Ministry</S.HeroSubtitle>
          </S.HeroContent>
        </S.HeroSection>

        <S.Section>
          <S.SectionTitle>중고등부 소개</S.SectionTitle>
          <S.SectionContent>
            <p>
              중고등부는 중학생과 고등학생 청소년들을 위한 부서입니다. 복잡한 학교 생활과
              사회 속에서 하나님의 말씀으로 올바른 정체성을 세워나가도록 돕습니다.
            </p>
            <p>
              매주 주일 오전 11시에 예배가 있으며, 성경공부와 토론, 그리고 다양한 활동을
              통해 청소년들이 함께 성장하고 하나님과 더 가까워지도록 이끌고 있습니다.
            </p>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>활동 안내</S.SectionTitle>
          <S.ActivityGrid>
            <S.ActivityCard>
              <S.ActivityIcon>📚</S.ActivityIcon>
              <S.ActivityTitle>성경공부</S.ActivityTitle>
              <S.ActivityDescription>
                깊이 있는 성경공부와 토론을 통한 신앙 성장
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🎯</S.ActivityIcon>
              <S.ActivityTitle>소그룹 모임</S.ActivityTitle>
              <S.ActivityDescription>
                친구들과 함께 나누는 신앙 이야기와 기도
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🎪</S.ActivityIcon>
              <S.ActivityTitle>특별 활동</S.ActivityTitle>
              <S.ActivityDescription>
                수양회, 봉사활동, 체육대회 등 다양한 활동
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🎵</S.ActivityIcon>
              <S.ActivityTitle>찬양팀</S.ActivityTitle>
              <S.ActivityDescription>
                함께 찬양하며 예배에 참여하는 청소년 찬양팀
              </S.ActivityDescription>
            </S.ActivityCard>
          </S.ActivityGrid>
        </S.Section>

        <S.Section>
          <S.SectionTitle>예배 시간</S.SectionTitle>
          <S.ScheduleTable>
            <S.ScheduleRow>
              <S.ScheduleLabel>주일 예배</S.ScheduleLabel>
              <S.ScheduleValue>주일 오전 11:00</S.ScheduleValue>
            </S.ScheduleRow>
            <S.ScheduleRow>
              <S.ScheduleLabel>장소</S.ScheduleLabel>
              <S.ScheduleValue>중고등부실</S.ScheduleValue>
            </S.ScheduleRow>
            <S.ScheduleRow>
              <S.ScheduleLabel>대상</S.ScheduleLabel>
              <S.ScheduleValue>중학생, 고등학생</S.ScheduleValue>
            </S.ScheduleRow>
          </S.ScheduleTable>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default YouthPage;

