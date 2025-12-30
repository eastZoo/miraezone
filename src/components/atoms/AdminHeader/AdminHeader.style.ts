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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

/* ========== 관리자 헤더 전체 래퍼 ========== */
export const AdminHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.adminBgColor};
  box-shadow: ${({ theme }) => theme.shadows.field};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const AdminHeaderContainer = styled(AdminContainer)`
  background: transparent;
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0;
`;

/* ========== 상단 정보 바 ========== */
export const AdminMainHeader = styled.div`
  background: ${({ theme }) => theme.colors.adminBgColor};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
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
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  background: ${({ theme }) => theme.colors.adminBgColor};
`;

export const MainNavInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 32px;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.adminBgColor};
  padding: 0 40px;
  height: 100%;
  min-width: 240px;

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.white12} 0%,
      transparent 100%
    );
    pointer-events: none;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  img {
    height: 48px;
    width: auto;
    object-fit: contain;
  }

  &:hover img {
    transform: scale(1.08);
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
  justify-content: flex-start;
  height: 100%;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuLink = styled(NavBarLink)<{
  $isActive?: boolean;
  $clickable?: boolean;
}>`
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  font-size: 1.5rem;
  padding: 0 28px;
  border-radius: ${({ theme }) => theme.radius.sm};
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  box-sizing: border-box;
  min-width: auto;
  text-align: center;
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};
  margin: 0 4px;
  ${({ $isActive, theme }) =>
    $isActive
      ? `
    color: ${theme.colors.white100};
    background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
    font-weight: 600;
    box-shadow: 0 2px 8px ${theme.colors.primary}40;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 3px;
      background: ${theme.colors.white100};
      border-radius: 2px 2px 0 0;
      opacity: 0.8;
    }
  `
      : `
    color: ${theme.colors.adminTextColor};
    background: transparent;
    
    &:hover {
      color: ${theme.colors.white100};
      background: ${theme.colors.white12};
      transform: translateY(-1px);
    }
  `}
`;

export const ChevronIcon = styled.span<{ $isOpen?: boolean }>`
  font-size: 11px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $isOpen, theme }) =>
    $isOpen ? `${theme.colors.white12}` : "transparent"};
  color: ${({ $isOpen, theme }) =>
    $isOpen ? theme.colors.white100 : theme.colors.adminTextColor};
`;

/* ========== 하위 탭 영역 ========== */
export const SubTabBar = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.adminBgColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white12};
  z-index: 999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  height: 56px;
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SubTabContainer = styled.div`
  display: flex;
  gap: 8px;
  max-width: 1780px;
  margin: 0 auto;
  padding: 0 32px 0 240px;
  height: 100%;
  align-items: center;
`;

export const SubTabButton = styled(NavBarLink)<{ $isActive?: boolean }>`
  padding: 10px 24px;
  background: ${({ $isActive, theme }) =>
    $isActive
      ? `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
      : "transparent"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white100 : theme.colors.adminTextColor};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "500")};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  box-shadow: ${({ $isActive, theme }) =>
    $isActive ? `0 2px 8px ${theme.colors.primary}40` : "none"};

  &:hover {
    background: ${({ $isActive, theme }) =>
      $isActive
        ? `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`
        : theme.colors.white12};
    color: ${({ $isActive, theme }) =>
      $isActive ? theme.colors.white100 : theme.colors.white100};
    font-weight: 600;
    transform: translateY(-1px);
    box-shadow: ${({ $isActive, theme }) =>
      $isActive ? `0 4px 12px ${theme.colors.primary}40` : "none"};
  }

  &:active {
    transform: translateY(0);
  }
`;
