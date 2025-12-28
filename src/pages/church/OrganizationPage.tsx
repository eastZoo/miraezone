import React, { useMemo } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import {
  useOrganizationMembers,
  useDepartments,
} from "@/lib/hooks/useOrganization";
import * as S from "./ChurchPage.style";

const OrganizationPage: React.FC = () => {
  const subMenuItems = [
    { title: "교회 소개", path: "/church/introduce" },
    { title: "교회 조직", path: "/church/organization" },
    { title: "오시는 길", path: "/church/location" },
  ];

  // 데이터 조회
  const { data: members = [], isLoading: membersLoading } =
    useOrganizationMembers();
  const { data: departments = [], isLoading: deptLoading } = useDepartments();

  // 조직도 계층 구조 생성
  const orgLevels = useMemo(() => {
    if (!members.length) return [];

    type MemberType = (typeof members)[0];
    const levels: MemberType[][] = [];
    const rootMembers = members.filter((m) => !m.parentId);

    const addLevel = (levelMembers: MemberType[], level: number) => {
      if (levelMembers.length === 0) return;
      if (!levels[level]) levels[level] = [];
      levels[level].push(...levelMembers);

      const nextLevelMembers: MemberType[] = [];
      levelMembers.forEach((member) => {
        const children = members.filter((m) => m.parentId === member.id);
        nextLevelMembers.push(...children);
      });

      if (nextLevelMembers.length > 0) {
        addLevel(nextLevelMembers, level + 1);
      }
    };

    addLevel(rootMembers, 0);
    return levels;
  }, [members]);

  if (membersLoading || deptLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="교회소개"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/church/organization"
        pageTitle="교회 조직"
        breadcrumb={["Home", "교회소개", "교회 조직"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

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
            {orgLevels.length > 0 ? (
              <S.OrgChart>
                {orgLevels.map((level, levelIndex) => (
                  <React.Fragment key={levelIndex}>
                    <S.OrgLevel>
                      {level.map((member) => (
                        <S.OrgItem key={member.id}>
                          <S.OrgPosition>{member.position}</S.OrgPosition>
                          <S.OrgName>{member.name}</S.OrgName>
                        </S.OrgItem>
                      ))}
                    </S.OrgLevel>
                    {levelIndex < orgLevels.length - 1 && (
                      <S.OrgConnector>│</S.OrgConnector>
                    )}
                  </React.Fragment>
                ))}
              </S.OrgChart>
            ) : (
              <p>조직 구성원이 없습니다.</p>
            )}
          </S.SectionContent>
        </S.Section>

        <S.Section>
          <S.SectionTitle>부서별 역할</S.SectionTitle>
          <S.SectionContent>
            {departments.length > 0 ? (
              <S.DepartmentList>
                {departments.map((department) => (
                  <S.DepartmentItem key={department.id}>
                    <S.DepartmentTitle>{department.name}</S.DepartmentTitle>
                    <S.DepartmentDesc>
                      {department.description}
                    </S.DepartmentDesc>
                  </S.DepartmentItem>
                ))}
              </S.DepartmentList>
            ) : (
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
            )}
          </S.SectionContent>
        </S.Section>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default OrganizationPage;
