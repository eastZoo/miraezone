import React from "react";
import * as S from "./AdminHeader.style";
import { Link, useLocation } from "react-router-dom";
import logo from "@/styles/assets/images/logo-white.png";

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
            <img src={logo} alt="부민축산 로고" width={160} />
          </Link>
        </S.LogoSection>

        {/* 상단 정보 바 */}
        <S.AdminMainHeader>
          <S.RightInfo>
            <S.VersionInfo>옴니솔루션v2.0.0</S.VersionInfo>
            <S.Separator>|</S.Separator>
            <S.VisitorStats>
              오늘 : 777, 어제 : 777, 최대 7777, 전체: 777777
            </S.VisitorStats>
            <S.Separator>|</S.Separator>
            <S.AdminLink href="#">관리자정보</S.AdminLink>
            <S.Separator>|</S.Separator>
            <S.AdminLink href="#">관리자홈</S.AdminLink>
            <S.Separator>|</S.Separator>
            <S.AdminLink href="#">쇼핑몰</S.AdminLink>
            <S.Separator>|</S.Separator>
            <S.LogoutLink href="#">로그아웃</S.LogoutLink>
          </S.RightInfo>
        </S.AdminMainHeader>

        {/* 메인 네비게이션 바 */}
        <S.MainNavBar>
          <S.MainNavInner>
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/members"
                    $isActive={isActive("/admin/members")}
                  >
                    회원관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/discounts"
                    $isActive={isActive("/admin/discounts")}
                  >
                    할인관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/categories"
                    $isActive={isActive("/admin/categories")}
                  >
                    카테고리관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/products"
                    $isActive={isActive("/admin/products")}
                  >
                    상품관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/orders"
                    $isActive={isActive("/admin/orders")}
                  >
                    주문/배송관리
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/statistics"
                    $isActive={isActive("/admin/statistics")}
                  >
                    정산/통계
                  </S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink
                    as={Link}
                    to="/admin/settings"
                    $isActive={isActive("/admin/settings")}
                  >
                    환경설정
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
