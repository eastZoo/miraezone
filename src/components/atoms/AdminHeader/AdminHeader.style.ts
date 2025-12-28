import { AdminContainer } from "@/styles/GlobalStyle";
import styled from "styled-components";

/* ========== 공통 타이포그래피 컴포넌트 ========== */
// RightInfo 전용 타이포그래피
const RightInfoText = styled.span`
  font-size: 1.3rem;
  color: inherit;
`;

const RightInfoDiv = styled.div`
  font-size: 1.3rem;
  color: inherit;
`;

const RightInfoLink = styled.a`
  font-size: 1.3rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
`;

// MainNavBar 전용 타이포그래피
const NavBarDiv = styled.div`
  font-size: 1.5rem;
  color: inherit;
`;

const NavBarLink = styled.a`
  font-size: 1.5rem;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
`;

/* ========== 관리자 헤더 전체 래퍼 ========== */
export const AdminHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.adminBgColor};
`;

export const AdminHeaderContainer = styled(AdminContainer)`
  background: ${({ theme }) => theme.colors.adminBgColor};
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 50px;
`;

/* ========== 상단 정보 바 ========== */
export const AdminMainHeader = styled.div`
  background: ${({ theme }) => theme.colors.adminBgColor};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  grid-column: 2;
  grid-row: 1;
`;

export const VersionInfo = styled(RightInfoText)`
  color: ${({ theme }) => theme.colors.whiteGreyText};
`;

export const Separator = styled(RightInfoText)`
  color: ${({ theme }) => theme.colors.whiteGreyText};
  margin: 0 4px;
`;

export const VisitorStats = styled(RightInfoDiv)`
  color: ${({ theme }) => theme.colors.whiteGreyText};
`;

export const RightInfo = styled(RightInfoDiv)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.adminTextColor};
`;

export const AdminLink = styled(RightInfoLink)`
  color: ${({ theme }) => theme.colors.whiteGreyText};

  &:hover {
    color: ${({ theme }) => theme.colors.whiteGreyText};
  }
`;

export const LogoutLink = styled(RightInfoLink)`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ========== 메인 네비게이션 바 ========== */
export const MainNavBar = styled.div`
  background: ${({ theme }) => theme.colors.adminBgColor};
  height: 50px;
  display: flex;
  align-items: center;
  grid-column: 2;
  grid-row: 2;
`;

export const MainNavInner = styled(AdminContainer)`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1;
  grid-row: 1;
  background: ${({ theme }) => theme.colors.adminBgColor};
  padding: 0 20px;
  height: 50px;

  img {
    height: 40px;
    width: auto;
    object-fit: contain;
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoSubtitle = styled(NavBarDiv)`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.adminTextColor};
  line-height: 1;
  margin-bottom: 3px;
`;

export const LogoTitle = styled(NavBarDiv)`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.adminTextColor};
  line-height: 1.2;
`;

export const NavMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
`;

export const MenuItem = styled.li`
  /* &:not(:last-child) {
    margin-right: 100px;
  } */
`;

export const MenuLink = styled(NavBarLink)<{ $isActive?: boolean }>`
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  padding: 6px 20px;
  border-radius: ${({ $isActive }) => ($isActive ? "8px 8px 0 0" : "0")};
  white-space: nowrap;
  transition: all 0.2s ease;
  position: relative;
  display: inline-block;
  height: 50px;
  box-sizing: border-box;
  line-height: 40px;
  min-width: auto;
  text-align: center;
  ${({ $isActive, theme }) =>
    $isActive
      ? `
    color: #000;
    background: ${theme.colors.adminPageBgColor};
  `
      : `
    color: ${theme.colors.adminTextColor};
    background: transparent;
    
    &:hover {
      color: ${theme.colors.adminTextColor};
      background: rgba(255, 255, 255, 0.1);
    }
  `}
`;
