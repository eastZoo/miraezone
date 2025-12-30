import { AdminContainer, Container } from "@/styles/GlobalStyle";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden; /* 가로 스크롤 방지 */
`;

export const ContentLayout = styled.div<{ hasSidebar?: boolean; hasSubTabs?: boolean }>`
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 72px);
  margin-top: ${({ hasSubTabs }) => (hasSubTabs ? "128px" : "72px")}; /* 헤더(72px) + 하위 탭(56px) 또는 헤더만 */
  padding-top: 0;
  padding-left: ${({ hasSidebar }) =>
    hasSidebar ? "300px" : "0"}; /* 사이드바가 있을 때만 여백 추가 */
  padding-right: ${({ hasSidebar }) =>
    hasSidebar ? "300px" : "0"}; /* 오른쪽 여백 추가 */
  background: ${({ theme }) => theme.colors.adminPageBgColor || "#f7f8fa"};
  transition: margin-top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

// 기본 스타일은 공통으로 정의
const baseContainerStyles = {
  flex: 1,
  position: "relative" as const,
  padding: "32px 40px",
};

// AdminContainer 상속 버전
export const ContainerWrapperAdmin = styled(AdminContainer)<{
  hasSidebar?: boolean;
}>`
  ${baseContainerStyles}
  width: ${({ hasSidebar }) => (hasSidebar ? "calc(100% - 300px)" : "100%")};
  max-width: 1780px;
  margin-right: auto;
  margin-left: ${({ hasSidebar }) => (hasSidebar ? "0" : "auto")};
  background: ${({ theme }) => theme.colors.adminPageBgColor || "#f7f8fa"};
  min-height: calc(100vh - 128px);
  border-radius: 0;
`;

// Container 상속 버전
export const ContainerWrapperStandard = styled(Container)<{
  hasSidebar?: boolean;
}>`
  ${baseContainerStyles}
  width: ${({ hasSidebar }) => (hasSidebar ? "calc(100% - 300px)" : "100%")};
  background: ${({ theme }) => theme.colors.adminPageBgColor || "#f7f8fa"};
  min-height: calc(100vh - 128px);
`;

export const QuickButtonBox = styled.div`
  /* QuickButton 컴포넌트에서 직접 스타일링하므로 여기서는 제거 */
`;

export const QuickMenuLeft = styled.div`
  width: 80px;
  margin-right: 520px;
  position: absolute;
  top: 20px;
  right: 50%;
  z-index: 997;
`;

export const QuickMenuRight = styled.div`
  width: 80px;
  margin-left: 520px;
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 997;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray100};
  flex-wrap: wrap;
  gap: 16px;
`;

export const PageTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;
