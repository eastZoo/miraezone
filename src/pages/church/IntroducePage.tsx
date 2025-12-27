import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./ChurchPage.style";

const IntroducePage: React.FC = () => {
  const subMenuItems = [
    { title: "교회 소개", path: "/church/introduce" },
    { title: "교회 조직", path: "/church/organization" },
    { title: "오시는 길", path: "/church/location" },
  ];

  return (
    <SubMenuTemplate
      mainMenuTitle="교회소개"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/church/introduce"
      pageTitle="교회 소개"
      breadcrumb={["Home", "교회소개", "교회 소개"]}
    >
      <S.ContentWrapper>
        <S.Section>
          <S.SectionTitle>교회 비전</S.SectionTitle>
          <S.SectionContent>
            <p>
              미래존교회는 하나님의 사랑과 예수 그리스도의 복음을 전하며, 서로 사랑하고
              섬기는 공동체를 지향합니다. 오늘보다 내일이 더 좋은 교회로 성장하여 지역사회와
              세상에 빛과 소금의 역할을 감당하고자 합니다.
            </p>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>교회 소개</S.SectionTitle>
          <S.SectionContent>
            <p>
              미래존교회는 성경을 기초로 한 믿음의 공동체로서, 하나님을 사랑하고 이웃을
              사랑하는 그리스도인으로 양육하는 것을 목표로 합니다. 우리는 하나님의 형상으로
              사람을 이해하고 사랑하며 도우며, 그리스도를 전하는 일에 힘쓰고 있습니다.
            </p>
            <p>
              매주 예배와 함께 다양한 모임과 활동을 통해 성도들이 함께 성장하고 교제할 수
              있는 공간을 제공하고 있습니다.
            </p>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>교회 연혁</S.SectionTitle>
          <S.SectionContent>
            <S.HistoryList>
              <S.HistoryItem>
                <S.HistoryYear>2020</S.HistoryYear>
                <S.HistoryContent>교회 설립</S.HistoryContent>
              </S.HistoryItem>
              <S.HistoryItem>
                <S.HistoryYear>2021</S.HistoryYear>
                <S.HistoryContent>새 예배당 건축</S.HistoryContent>
              </S.HistoryItem>
              <S.HistoryItem>
                <S.HistoryYear>2023</S.HistoryYear>
                <S.HistoryContent>다음세대 사역 확대</S.HistoryContent>
              </S.HistoryItem>
            </S.HistoryList>
          </S.SectionContent>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default IntroducePage;

