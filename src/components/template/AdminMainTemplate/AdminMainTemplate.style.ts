import { AdminContainer, Container } from "@/styles/GlobalStyle";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden; /* 가로 스크롤 방지 */
`;

export const ContentLayout = styled.div<{ hasSidebar?: boolean }>`
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 90px);
  margin-top: 90px; /* 고정된 헤더 높이만큼 여백 추가 */
  padding-left: ${({ hasSidebar }) =>
    hasSidebar ? "300px" : "0"}; /* 사이드바가 있을 때만 여백 추가 */
  padding-right: ${({ hasSidebar }) =>
    hasSidebar ? "300px" : "0"}; /* 오른쪽 여백 추가 */
  background: ${({ theme }) => theme.colors.adminPageBgColor};
`;

// 기본 스타일은 공통으로 정의
const baseContainerStyles = {
  flex: 1,
  position: "relative" as const,
  padding: "20px",
};

// AdminContainer 상속 버전
export const ContainerWrapperAdmin = styled(AdminContainer)<{
  hasSidebar?: boolean;
}>`
  ${baseContainerStyles}
  width: ${({ hasSidebar }) => (hasSidebar ? "calc(100% - 300px)" : "100%")};
  max-width: 1400px;
  margin-right: auto;
  margin-left: ${({ hasSidebar }) => (hasSidebar ? "0" : "auto")};
  background: ${({ theme }) => theme.colors.adminPageBgColor};
`;

// Container 상속 버전
export const ContainerWrapperStandard = styled(Container)<{
  hasSidebar?: boolean;
}>`
  ${baseContainerStyles}
  width: ${({ hasSidebar }) => (hasSidebar ? "calc(100% - 300px)" : "100%")};
  background: ${({ theme }) => theme.colors.adminPageBgColor};
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
  align-items: center;
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;
