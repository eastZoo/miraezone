import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const breakpoints = {
  mobile: "768px",
};

export const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 10px;
    font-family: 'Pretendard', sans-serif;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* 가로 스크롤 방지 */
  }

  a { color: inherit; text-decoration: none; }
  ul, ol { padding: 0; margin: 0; list-style: none; }
  button { cursor: pointer; }
  input, button, textarea, select { font: inherit; }
`;

// 공통 컨테이너 스타일 - 모든 섹션에서 일관된 마진과 패딩 사용
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

// 관리자 공통 넓이 컨테이너
export const AdminContainer = styled.div`
  width: 100%;
  max-width: 1780px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

// 그림자 카드 컨테이너 스타일
export const ShadowCardContainer = styled.div`
  border-radius: 30px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.1);
`;

/**
 * 헤더 아래로 children 페이지가 가려질때 공통으로 사용하는 스타일 컴포넌트 높이 조정
 */
export const MainContainerWrapper = styled.div<{ marginTop?: string }>`
  ${({ marginTop }) =>
    marginTop ? `margin-top: ${marginTop};` : ""}// @media ${device.mobile} {
  //   padding: 0 16px;
  // }
`;

/** 페이지별 상단 오른쪽 브레드크럼 스타일 */
export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 8px;

  /* 모든 자식 요소는 회색 */
  > * {
    color: #999;
  }

  /* span만 회색 유지 */
  span {
    color: #999 !important;
  }

  /* 마지막 텍스트 요소만 검정색 */
  .last-item {
    color: #333 !important;
  }
`;
