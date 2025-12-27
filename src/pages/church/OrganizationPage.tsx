import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./ChurchPage.style";

const OrganizationPage: React.FC = () => {
  const subMenuItems = [
    { title: "교회 소개", path: "/church/introduce" },
    { title: "교회 조직", path: "/church/organization" },
    { title: "오시는 길", path: "/church/location" },
  ];

  return (
    <SubMenuTemplate
      mainMenuTitle="교회소개"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/church/organization"
      pageTitle="교회 조직"
      breadcrumb={["Home", "교회소개", "교회 조직"]}
    >
      <S.ContentWrapper>
        <S.Section>
          <S.SectionTitle>교회 조직도</S.SectionTitle>
          <S.SectionContent>
            <S.OrgChart>
              <S.OrgLevel>
                <S.OrgItem>
                  <S.OrgPosition>담임목사</S.OrgPosition>
                  <S.OrgName>나영호 목사</S.OrgName>
                </S.OrgItem>
              </S.OrgLevel>
              
              <S.OrgConnector>│</S.OrgConnector>
              
              <S.OrgLevel>
                <S.OrgItem>
                  <S.OrgPosition>부목사</S.OrgPosition>
                  <S.OrgName>김철수 목사</S.OrgName>
                </S.OrgItem>
                <S.OrgItem>
                  <S.OrgPosition>전도사</S.OrgPosition>
                  <S.OrgName>이영희 전도사</S.OrgName>
                </S.OrgItem>
              </S.OrgLevel>

              <S.OrgConnector>│</S.OrgConnector>

              <S.OrgLevel>
                <S.OrgItem>
                  <S.OrgPosition>교육부</S.OrgPosition>
                  <S.OrgName>교육부장</S.OrgName>
                </S.OrgItem>
                <S.OrgItem>
                  <S.OrgPosition>선교부</S.OrgPosition>
                  <S.OrgName>선교부장</S.OrgName>
                </S.OrgItem>
                <S.OrgItem>
                  <S.OrgPosition>예배부</S.OrgPosition>
                  <S.OrgName>예배부장</S.OrgName>
                </S.OrgItem>
                <S.OrgItem>
                  <S.OrgPosition>전도부</S.OrgPosition>
                  <S.OrgName>전도부장</S.OrgName>
                </S.OrgItem>
              </S.OrgLevel>
            </S.OrgChart>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>교회 직분</S.SectionTitle>
          <S.SectionContent>
            <p>
              미래존교회는 성경의 가르침에 따라 목사, 장로, 집사, 권사 등 다양한 직분을
              통해 사역을 수행하고 있습니다. 각 직분은 하나님의 부르심에 따라 섬김의
              자세로 교회를 돌보고 있습니다.
            </p>
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>부서별 역할</S.SectionTitle>
          <S.SectionContent>
            <S.DepartmentList>
              <S.DepartmentItem>
                <S.DepartmentTitle>교육부</S.DepartmentTitle>
                <S.DepartmentDesc>
                  성경교육, 주일학교, 청년부 등 교육 사역을 담당합니다.
                </S.DepartmentDesc>
              </S.DepartmentItem>
              <S.DepartmentItem>
                <S.DepartmentTitle>선교부</S.DepartmentTitle>
                <S.DepartmentDesc>
                  국내외 선교 사역과 구제 활동을 담당합니다.
                </S.DepartmentDesc>
              </S.DepartmentItem>
              <S.DepartmentItem>
                <S.DepartmentTitle>예배부</S.DepartmentTitle>
                <S.DepartmentDesc>
                  예배 준비, 찬양팀, 음향 등 예배 사역을 담당합니다.
                </S.DepartmentDesc>
              </S.DepartmentItem>
              <S.DepartmentItem>
                <S.DepartmentTitle>전도부</S.DepartmentTitle>
                <S.DepartmentDesc>
                  전도 사역과 새 신자 양육을 담당합니다.
                </S.DepartmentDesc>
              </S.DepartmentItem>
            </S.DepartmentList>
          </S.SectionContent>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default OrganizationPage;

