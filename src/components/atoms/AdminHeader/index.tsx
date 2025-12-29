import React from "react";
import * as S from "./AdminHeader.style";
import { Link, useLocation } from "react-router-dom";
import logo from "@/styles/assets/images/church_logo.png";

const AdminHeader: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <S.AdminHeader>
      <S.AdminHeaderContainer>
        {/* 로고 섹션 */}
        <S.LogoSection>
          <Link to="/admin">
            <img src={logo} alt="교회 로고" />
          </Link>
        </S.LogoSection>

        {/* 메인 네비게이션 바 */}
        <S.MainNavBar>
          <S.MainNavInner>
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/church"
                    $isActive={isActive("/admin/church") && !isActive("/admin/church/organization") && !isActive("/admin/church/location")}
                  >
                    교회 정보 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/church/organization"
                    $isActive={isActive("/admin/church/organization")}
                  >
                    교회 조직 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/church/location"
                    $isActive={isActive("/admin/church/location")}
                  >
                    오시는 길 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/notice"
                    $isActive={isActive("/admin/notice")}
                  >
                    공지사항 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/news"
                    $isActive={isActive("/admin/news")}
                  >
                    교회 소식 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/bulletins"
                    $isActive={isActive("/admin/bulletins")}
                  >
                    주보 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/worship"
                    $isActive={isActive("/admin/worship")}
                  >
                    예배 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/nextgen"
                    $isActive={isActive("/admin/nextgen")}
                  >
                    다음세대 관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/church-albums"
                    $isActive={isActive("/admin/church-albums")}
                  >
                    교회 앨범 관리
                  </S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
          </S.MainNavInner>
        </S.MainNavBar>
      </S.AdminHeaderContainer>
    </S.AdminHeader>
  );
};

export default AdminHeader;
