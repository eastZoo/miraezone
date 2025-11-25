import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: rgba(6, 12, 24, 0.65);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 1001;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
`;

/* 메인 헤더 */
export const MainHeader = styled.div`
  position: relative;
  z-index: 1001;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 20px;
`;

/* 상단바 좌측 */
export const TopLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.img`
  height: 48px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.45));
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
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(4, 9, 18, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  a {
    display: block;
    padding: 18px 22px;
    font-size: 1.6rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    transition: all 0.3s ease;
    letter-spacing: 0.01em;

    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
      padding-left: 30px;
    }
  }
`;
