import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNextGenDepartment } from "@/lib/hooks/useNextGenDepartment";
import * as S from "./NextGenPage.style";

const ElementaryPage: React.FC = () => {
  const subMenuItems = [
    { title: "유초등부", path: "/nextgen/elementary" },
    { title: "앨범", path: "/nextgen/elementary/albums", isSubItem: true },
    { title: "중고등부", path: "/nextgen/youth" },
    { title: "청년부", path: "/nextgen/youngadult" },
    { title: "다음세대 소식", path: "/nextgen/news" },
  ];

  // 부서 정보 조회
  const { data: department, isLoading } = useNextGenDepartment("유초등부");

  return (
    <SubMenuTemplate
      mainMenuTitle="다음세대"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/nextgen/elementary"
      pageTitle="유초등부"
      breadcrumb={["Home", "다음세대", "유초등부"]}
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
                <S.HeroTitle>유초등부</S.HeroTitle>
                <S.HeroSubtitle>Elementary Ministry</S.HeroSubtitle>
              </S.HeroContent>
            </S.HeroSection>

            <S.Section>
              <S.SectionTitle>유초등부 소개</S.SectionTitle>
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
                      유초등부는 유치부와 초등부 아이들을 위한 부서입니다.
                      아이들이 하나님을 사랑하고, 친구들과 함께 기쁨과 사랑을
                      나누며 성장할 수 있도록 돕습니다.
                    </p>
                    <p>
                      매주 주일 오전 11시에 예배가 있으며, 체험 중심의 교육과
                      다양한 활동을 통해 아이들이 하나님과 친해지고, 예수님을
                      만나도록 이끌고 있습니다.
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
                    {department?.worshipTime || "주일 오전 11:00"}
                  </S.ScheduleValue>
                </S.ScheduleRow>
                <S.ScheduleRow>
                  <S.ScheduleLabel>장소</S.ScheduleLabel>
                  <S.ScheduleValue>
                    {department?.place || "유초등부실"}
                  </S.ScheduleValue>
                </S.ScheduleRow>
                <S.ScheduleRow>
                  <S.ScheduleLabel>대상</S.ScheduleLabel>
                  <S.ScheduleValue>
                    {department?.target || "만 5세 ~ 초등학생"}
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

export default ElementaryPage;
