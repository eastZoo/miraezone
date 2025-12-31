import React, { useState, useEffect, useMemo } from "react";
import * as S from "./AdminHeader.style";
import { Link, useLocation } from "react-router-dom";
import { useCurrentMember, useLogout } from "@/lib/hooks/useAuth";
import logo from "@/styles/assets/images/church_logo.png";

interface SubMenuItem {
  label: string;
  path: string;
}

interface MenuGroup {
  label: string;
  path?: string;
  subItems: SubMenuItem[];
}

const AdminHeader: React.FC = () => {
  const location = useLocation();

  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const { member } = useCurrentMember();
  const logout = useLogout();

  const handleLogout = async () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      logout.mutate();
    }
  };

  // 메뉴 그룹 정의
  const menuGroups: MenuGroup[] = [
    {
      label: "교회소개 관리",
      path: "/admin/church",
      subItems: [
        { label: "교회 정보 관리", path: "/admin/church" },
        { label: "교회 조직 관리", path: "/admin/church/organization" },
        { label: "오시는 길 관리", path: "/admin/church/location" },
      ],
    },
    {
      label: "안내/소식 관리",
      path: "/admin/notice",
      subItems: [
        { label: "공지사항 관리", path: "/admin/notice" },
        { label: "교회 소식 관리", path: "/admin/news" },
        { label: "주보 관리", path: "/admin/bulletins" },
      ],
    },
    {
      label: "예배/찬양 관리",
      path: "/admin/worship",
      subItems: [
        { label: "예배 일정 관리", path: "/admin/worship/schedules" },
        { label: "설교 영상 관리", path: "/admin/worship/videos" },
      ],
    },
    {
      label: "다음세대 관리",
      path: "/admin/nextgen",
      subItems: [
        { label: "부서 정보 관리", path: "/admin/nextgen/department" },
        { label: "유초등부 앨범", path: "/admin/nextgen/elementary" },
        { label: "중고등부 앨범", path: "/admin/nextgen/youth" },
        { label: "청년부 앨범", path: "/admin/nextgen/youngadult" },
        { label: "다음세대 소식 관리", path: "/admin/nextgen/news" },
      ],
    },
    {
      label: "자료실 관리",
      path: "/admin/church-albums",
      subItems: [{ label: "교회 앨범 관리", path: "/admin/church-albums" }],
    },
    {
      label: "회원 관리",
      path: "/admin/members",
      subItems: [{ label: "회원 관리", path: "/admin/members" }],
    },
  ];

  // 정확한 경로 매칭 함수
  const isActive = (path: string) => {
    // 정확히 일치하는 경우
    if (location.pathname === path) {
      return true;
    }
    // 하위 경로인 경우 (예: /admin/church/organization는 /admin/church의 하위)
    // 단, 정확히 일치하는 다른 경로가 있으면 그것이 우선
    const allSubItems = menuGroups.flatMap((g) => g.subItems);
    const exactMatch = allSubItems.some(
      (item) => item.path === location.pathname && item.path !== path
    );

    if (exactMatch) {
      return false;
    }

    // 경로가 해당 경로로 시작하고, 다음 문자가 /이거나 끝인 경우만 활성화
    return (
      location.pathname.startsWith(path) &&
      (location.pathname.length === path.length ||
        location.pathname[path.length] === "/")
    );
  };

  const isGroupActive = (group: MenuGroup) => {
    return group.subItems.some((item) => {
      // 정확한 경로 매칭
      if (location.pathname === item.path) {
        return true;
      }
      // 하위 경로인 경우
      return location.pathname.startsWith(item.path + "/");
    });
  };

  // 현재 경로에 해당하는 그룹을 메모이제이션
  const currentGroup = useMemo(() => {
    return menuGroups.find((group) => isGroupActive(group));
  }, [location.pathname]);

  // 현재 경로에 따라 활성 그룹 설정 (깜빡거림 방지)
  useEffect(() => {
    // 현재 활성 그룹이 있고, 새로운 경로가 같은 그룹의 하위 항목이면 activeGroup 유지
    if (activeGroup) {
      const currentActiveGroup = menuGroups.find(
        (g) => g.label === activeGroup
      );
      if (currentActiveGroup) {
        const isStillInSameGroup = currentActiveGroup.subItems.some((item) => {
          if (location.pathname === item.path) return true;
          return location.pathname.startsWith(item.path + "/");
        });

        // 같은 그룹 내에서 이동하는 경우 activeGroup 유지 (깜빡거림 방지)
        if (isStillInSameGroup) {
          return;
        }
      }
    }

    // 하위 탭이 하나 이상 있으면 항상 드롭다운 표시
    if (currentGroup && currentGroup.subItems.length >= 1) {
      setActiveGroup(currentGroup.label);
    } else {
      setActiveGroup(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleGroupClick = (group: MenuGroup) => {
    if (activeGroup === group.label) {
      setActiveGroup(null);
    } else {
      setActiveGroup(group.label);
    }
    // 하위 메뉴가 하나만 있으면 바로 이동
    if (group.subItems.length === 1) {
      // 링크는 자동으로 처리됨
    }
  };

  return (
    <S.AdminHeader>
      <S.AdminHeaderContainer>
        {/* 로고 섹션 */}
        <S.LogoSection>
          <Link to="/admin/church">
            <img src={logo} alt="교회 로고" />
          </Link>
        </S.LogoSection>

        {/* 메인 네비게이션 바 */}
        <S.MainNavBar>
          <S.MainNavInner>
            <S.NavMenu>
              <S.MenuList>
                {menuGroups.map((group, index) => {
                  const groupActive = isGroupActive(group);
                  const isOpen = activeGroup === group.label;

                  return (
                    <S.MenuItem key={index}>
                      <S.MenuLink
                        as="div"
                        $isActive={groupActive}
                        onClick={() => handleGroupClick(group)}
                        $clickable={true}
                      >
                        {group.label}
                        <S.ChevronIcon $isOpen={isOpen}>▼</S.ChevronIcon>
                      </S.MenuLink>
                    </S.MenuItem>
                  );
                })}
              </S.MenuList>
            </S.NavMenu>
          </S.MainNavInner>

          {/* 사용자 정보 및 로그아웃 */}
          <S.UserSection>
            {member && (
              <>
                <S.UserName>{member.name}님</S.UserName>
                <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
              </>
            )}
          </S.UserSection>
        </S.MainNavBar>
      </S.AdminHeaderContainer>

      {/* 하위 탭 영역 */}
      {activeGroup && (
        <S.SubTabBar data-subtab-bar="true">
          <S.SubTabContainer>
            {menuGroups
              .find((g) => g.label === activeGroup)
              ?.subItems.map((subItem, subIndex) => (
                <S.SubTabButton
                  key={subIndex}
                  as={Link}
                  to={subItem.path}
                  $isActive={isActive(subItem.path)}
                >
                  {subItem.label}
                </S.SubTabButton>
              ))}
          </S.SubTabContainer>
        </S.SubTabBar>
      )}
    </S.AdminHeader>
  );
};

export default AdminHeader;
