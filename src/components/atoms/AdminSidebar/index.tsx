import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./AdminSidebar.style";

import { HiMiniChevronUp } from "react-icons/hi2";

interface AdminSidebarProps {
  activeMenu?: string;
  hasSubTabs?: boolean;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ hasSubTabs = false }) => {
  const menuGroups: any[] = [];

  // // 첫 번째 그룹을 제외한 모든 그룹을 초기 상태에서 접힌 상태로 설정
  // const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
  //   new Set(
  //     menuGroups
  //       .filter((g) => g.isCollapsible)
  //       .slice(2) // 첫 번째 그룹 제외
  //       .map((g) => g.id)
  //   )
  // );
  const location = useLocation();

  // 현재 경로가 속한 그룹을 찾는 함수
  const findActiveGroup = () => {
    for (const group of menuGroups) {
      if (
        group.isCollapsible &&
        group.items.some((item: any) => item.path === location.pathname)
      ) {
        return group.id;
      }
    }
    return null;
  };

  // 초기 상태: 현재 경로가 속한 그룹은 열어두고, 나머지는 접음
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(() => {
    const activeGroupId = findActiveGroup();
    const collapsed = new Set(
      menuGroups.filter((g) => g.isCollapsible).map((g) => g.id)
    );

    // 활성화된 그룹은 열어둠
    if (activeGroupId) {
      collapsed.delete(activeGroupId);
    }

    return collapsed;
  });

  // 경로 변경 시 해당 그룹 자동으로 열기
  useEffect(() => {
    const activeGroupId = findActiveGroup();
    if (activeGroupId) {
      setCollapsedGroups((prev) => {
        const newSet = new Set(prev);
        newSet.delete(activeGroupId);
        return newSet;
      });
    }
  }, [location.pathname]);

  const toggleCollapse = (groupId: string) => {
    setCollapsedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <S.Sidebar $hasSubTabs={hasSubTabs}>
      {menuGroups.map((group: any) => (
        <S.MenuGroup key={group.id}>
          {group.isCollapsible ? (
            <>
              <S.GroupHeader
                onClick={() => toggleCollapse(group.id)}
                $isOpen={!collapsedGroups.has(group.id)}
              >
                <S.GroupTitle>{group.title}</S.GroupTitle>
                <S.CollapseIcon $isCollapsed={collapsedGroups.has(group.id)}>
                  <HiMiniChevronUp />
                </S.CollapseIcon>
              </S.GroupHeader>
              {!collapsedGroups.has(group.id) && (
                <S.MenuList>
                  {group.items.map((item: any) => (
                    <S.MenuItem key={item.id}>
                      <S.MenuLink
                        as={Link}
                        to={item.path}
                        $isActive={isActive(item.path)}
                      >
                        {item.label}
                      </S.MenuLink>
                    </S.MenuItem>
                  ))}
                </S.MenuList>
              )}
            </>
          ) : (
            <>
              <S.GroupHeaderStatic>
                <S.GroupTitle>{group.title}</S.GroupTitle>
              </S.GroupHeaderStatic>
              <S.MenuList>
                {group.items.map((item: any) => (
                  <S.MenuItem key={item.id}>
                    <S.MenuLink
                      as={Link}
                      to={item.path}
                      $isActive={isActive(item.path)}
                    >
                      {item.label}
                    </S.MenuLink>
                  </S.MenuItem>
                ))}
              </S.MenuList>
            </>
          )}
        </S.MenuGroup>
      ))}
    </S.Sidebar>
  );
};

export default AdminSidebar;
