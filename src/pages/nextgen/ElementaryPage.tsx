import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./NextGenPage.style";

const ElementaryPage: React.FC = () => {
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
      currentSubMenuPath="/nextgen/elementary"
      pageTitle="유초등부"
      breadcrumb={["Home", "다음세대", "유초등부"]}
    >
      <S.ContentWrapper>
        <S.HeroSection>
          <S.HeroImage />
          <S.HeroContent>
            <S.HeroTitle>유초등부</S.HeroTitle>
            <S.HeroSubtitle>Elementary Ministry</S.HeroSubtitle>
          </S.HeroContent>
        </S.HeroSection>

        <S.Section>
          <S.SectionTitle>유초등부 소개</S.SectionTitle>
          <S.SectionContent>
            <p>
              유초등부는 유치부와 초등부 아이들을 위한 부서입니다. 아이들이 하나님을
              사랑하고, 친구들과 함께 기쁨과 사랑을 나누며 성장할 수 있도록 돕습니다.
            </p>
            <p>
              매주 주일 오전 11시에 예배가 있으며, 체험 중심의 교육과 다양한 활동을 통해
              아이들이 하나님과 친해지고, 예수님을 만나도록 이끌고 있습니다.
            </p>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>활동 안내</S.SectionTitle>
          <S.ActivityGrid>
            <S.ActivityCard>
              <S.ActivityIcon>📖</S.ActivityIcon>
              <S.ActivityTitle>성경공부</S.ActivityTitle>
              <S.ActivityDescription>
                쉽고 재미있게 배우는 성경 이야기와 교훈
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🎨</S.ActivityIcon>
              <S.ActivityTitle>체험활동</S.ActivityTitle>
              <S.ActivityDescription>
                만들기, 게임, 역할극 등을 통한 체험 학습
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>🎵</S.ActivityIcon>
              <S.ActivityTitle>찬양예배</S.ActivityTitle>
              <S.ActivityDescription>
                아이들이 함께 부르는 즐거운 찬양 시간
              </S.ActivityDescription>
            </S.ActivityCard>
            <S.ActivityCard>
              <S.ActivityIcon>👫</S.ActivityIcon>
              <S.ActivityTitle>친구만나기</S.ActivityTitle>
              <S.ActivityDescription>
                함께 놀고 배우며 사랑을 나누는 시간
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
              <S.ScheduleValue>유초등부실</S.ScheduleValue>
            </S.ScheduleRow>
            <S.ScheduleRow>
              <S.ScheduleLabel>대상</S.ScheduleLabel>
              <S.ScheduleValue>만 5세 ~ 초등학생</S.ScheduleValue>
            </S.ScheduleRow>
          </S.ScheduleTable>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default ElementaryPage;

