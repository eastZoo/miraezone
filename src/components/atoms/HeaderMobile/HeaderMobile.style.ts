import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(229, 229, 229, 0.3);
  position: relative;
  z-index: 1001;
`;

/* 메인 헤더 */
export const MainHeader = styled.div`
  position: relative;
  z-index: 1001;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 16px;
`;

/* 상단바 좌측 */
export const TopLeft = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 45px;
  width: auto;
  max-width: 150px;
  object-fit: contain;
`;

/* 햄버거 메뉴 */
export const HamMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #333;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a44945;
  }
`;

/* 메인 메뉴 */
export const MainMenu = styled.nav`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(229, 229, 229, 0.3);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid rgba(229, 229, 229, 0.2);

  a {
    display: block;
    padding: 16px 20px;
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #a44945;
      background: rgba(164, 73, 69, 0.05);
      padding-left: 24px;
    }
  }
`;
