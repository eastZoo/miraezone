import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "@/styles/GlobalStyle";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BannerWrapper = styled.div`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: -100px; /* 헤더 높이만큼 위로 올려서 헤더 아래에 배치 */
  background: linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);
  z-index: 0; /* 헤더(z-index: 1001) 아래에 배치 */

  @media ${device.mobile} {
    margin-top: -60px;
  }
`;

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 430px;
  overflow: hidden;
  padding-top: 100px; /* 헤더 높이만큼 패딩 추가하여 배너 내용이 헤더 아래에 표시되도록 */

  @media ${device.mobile} {
    height: 250px;
    padding-top: 60px;
  }
`;

export const BackgroundSlide = styled.div`
  position: absolute;
  top: -100px; /* 헤더 높이만큼 위로 확장 */
  left: 0;
  width: 100%;
  height: calc(100% + 100px); /* 헤더 높이만큼 높이 증가 */
  z-index: 0;

  @media ${device.mobile} {
    top: -60px;
    height: calc(100% + 60px);
  }
`;

export const BackgroundImage = styled.img<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  animation: ${(props) => props.$isActive && fadeIn} 2s ease-in-out;
  filter: brightness(0.7) contrast(1.1);
`;

export const BannerOverlay = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 110px 0 0 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  text-align: center;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const BannerMottoYear = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 12px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.05em;

  @media ${device.mobile} {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const BannerText = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px 0;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 0, 0, 0.2);
  line-height: 1.3;
  letter-spacing: 0.02em;

  @media ${device.mobile} {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }
`;

export const BannerVerse = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.4;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 100px);
  background: #f8f8f8;
  padding: 40px;
  padding-bottom: 80px;
  margin-top: 0;
  position: relative;
  z-index: 1;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 20px 16px;
    padding-bottom: 40px;
  }
`;

export const Sidebar = styled.aside`
  width: 280px;
  min-width: 280px;
  background: #ffffff;
  border-right: 1px solid #e5e5e5;
  margin-right: 40px;
  padding: 0;

  @media ${device.mobile} {
    width: 100%;
    min-width: 100%;
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const SidebarHeader = styled.div`
  padding: 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const MainMenuButton = styled.div`
  width: 100%;
  padding: 20px 24px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  border: none;
  cursor: default;
  user-select: none;

  @media ${device.mobile} {
    padding: 16px 20px;
    font-size: 1.6rem;
  }
`;

export const SubMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SubMenuItem = styled.li<{ $isSubItem?: boolean }>`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const SubItemIndicator = styled.span`
  display: inline-block;
  margin-right: 8px;
  color: #999;
  font-size: 1.4rem;
`;

export const SubMenuLink = styled(Link)<{ $isActive: boolean; $isSubItem?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${({ $isSubItem }) => ($isSubItem ? "14px 24px 14px 48px" : "18px 24px")};
  color: ${({ $isActive }) => ($isActive ? "#1a1a2e" : "#666")};
  font-size: ${({ $isSubItem }) => ($isSubItem ? "1.4rem" : "1.6rem")};
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 400)};
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${({ $isActive }) => ($isActive ? "#f0f4ff" : "transparent")};
  border-left: ${({ $isActive, $isSubItem }) =>
    $isActive
      ? $isSubItem
        ? "3px solid #667eea"
        : "4px solid #1a1a2e"
      : "4px solid transparent"};
  position: relative;

  &:hover {
    background: #f8f9ff;
    color: #1a1a2e;
    padding-left: ${({ $isActive, $isSubItem }) =>
      $isActive
        ? $isSubItem
          ? "48px"
          : "24px"
        : $isSubItem
        ? "52px"
        : "28px"};
  }

  @media ${device.mobile} {
    padding: ${({ $isSubItem }) => ($isSubItem ? "12px 20px 12px 40px" : "14px 20px")};
    font-size: ${({ $isSubItem }) => ($isSubItem ? "1.3rem" : "1.4rem")};
  }
`;

export const ContentArea = styled.main`
  flex: 1;
  background: #ffffff;
  padding: 40px;
  min-height: 600px;

  @media ${device.mobile} {
    padding: 20px 16px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  margin-bottom: 20px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 40px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e5e5;

  @media ${device.mobile} {
    font-size: 2.4rem;
    margin-bottom: 30px;
    padding-bottom: 16px;
  }
`;

export const PageContent = styled.div`
  width: 100%;
`;
