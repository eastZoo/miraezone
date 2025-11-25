import { Container, device } from "@/styles/GlobalStyle";
import styled from "styled-components";

/* ========== Wrapper ========== */
export const HeaderWrapper = styled.div<{ $transparent?: boolean }>`
  position: ${({ $transparent }) => ($transparent ? "absolute" : "relative")};
  top: ${({ $transparent }) => ($transparent ? 0 : "auto")};
  left: 0;
  width: 100%;
  overflow: visible;
  z-index: 1001;
`;

/* ========== 상단 유틸리티 바 ========== */
export const TopUtilityBar = styled.div`
  background: #f8f8f8;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
  z-index: 1002;
`;

export const TopUtilityInner = styled(Container)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  min-width: 1200px;

  @media ${device.mobile} {
    height: 35px;
    min-width: auto;
    padding: 0 16px;
  }
`;

export const TopUtilityList = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: block;
    padding: 0 12px;
    height: 40px;
    line-height: 40px;
    font-size: 1.3rem;
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease;
    white-space: nowrap;

    &:hover {
      color: #a44945;
    }

    div {
      margin: 0;
    }
  }
`;

/* ========== 메인 헤더 ========== */
export const MainHeader = styled.div<{ $transparent?: boolean }>`
  background: ${({ $transparent }) =>
    $transparent
      ? "transparent"
      : "linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)"};
  backdrop-filter: ${({ $transparent }) =>
    $transparent ? "none" : "blur(20px)"};
  -webkit-backdrop-filter: ${({ $transparent }) =>
    $transparent ? "none" : "blur(20px)"};
  border-bottom: ${({ $transparent }) =>
    $transparent
      ? "1px solid rgba(255, 255, 255, 0.2)"
      : "1px solid rgba(229, 229, 229, 0.3)"};
  position: relative;
  z-index: 1001;
  transition: all 0.3s ease;
  overflow: visible;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: ${({ $transparent }) =>
      $transparent
        ? "linear-gradient(to bottom, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.65) 100%)"
        : "linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%)"};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(229, 229, 229, 0.5);
    overflow: visible;
  }
`;

export const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  min-width: 1200px;
  padding: 0 40px;
  overflow: visible;
  position: relative;

  @media ${device.mobile} {
    height: 60px;
    min-width: auto;
    padding: 0 16px;
  }
`;

/* 로고 래퍼 */
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  a {
    display: flex;
    align-items: center;
  }

  img {
    height: 65px;
    width: auto;
    max-width: 280px;
    object-fit: contain;
    transition: opacity 0.3s ease;

    @media ${device.mobile} {
      height: 45px;
      max-width: 150px;
    }
  }
`;

/* 네비게이션 섹션 */
export const NavSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 20px;
  overflow: visible;
  position: relative;
`;

/* 로고 섹션 */
export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #a44945;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AnimalIcon = styled.div`
  font-size: 20px;
  color: white;
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoSubtitle = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1;
`;

export const LogoTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  line-height: 1.2;
`;

/* 검색 섹션 */
export const SearchSection = styled.div`
  flex: 1;
  max-width: 500px; /* 최대 너비 증가 */
  min-width: 400px; /* 최소 너비 증가 */
  margin: 0 40px; /* 마진 증가 */
  display: flex;
  justify-content: center; /* 중앙 정렬 */
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 45px; /* 높이 증가 */
  padding: 0 20px 0 25px; /* 패딩 조정 - 아이콘 공간 확보 */
  border: 2px solid #e5e5e5;
  border-radius: 25px; /* 둥근 모서리 증가 */
  font-size: 1.5rem; /* 폰트 크기 증가 */
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #a44945;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: -25px; /* 아이콘 위치를 오른쪽에서 15px로 조정 */
  top: 50%;
  transform: translateY(-50%);
  width: 28px; /* 버튼 크기 조정 */
  height: 28px; /* 버튼 크기 조정 */
  background: transparent; /* 배경을 투명하게 */
  border: none; /* 테두리 제거 */
  color: #a44945; /* 아이콘 색상을 브랜드 컬러로 설정 */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: #8a3a37; /* 호버 시 아이콘 색상 변경 */
  }

  svg {
    width: 20px; /* 아이콘 크기 조정 */
    height: 20px; /* 아이콘 크기 조정 */
  }
`;

/* 액션 섹션 */
export const ActionSection = styled.div`
  display: flex;
  gap: 15px; /* 간격 축소 */
  width: 170px;
  flex-shrink: 0; /* 축소 방지 */
  justify-content: flex-end;

  @media ${device.mobile} {
    width: auto;
    gap: 8px; /* 간격 축소 */
  }
`;

export const ActionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const ActionIcon = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ActionText = styled.div`
  font-size: 1.2rem;
  color: #666;
  font-weight: 500;
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 전체카테고리 */
export const AllCategory = styled.div`
  position: relative;
  margin-right: 30px;
`;

export const AllCategoryBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 80px;
  padding: 0 20px;
  background: none;
  color: #111;
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #8a3a37;
    color: #fff;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media ${device.mobile} {
    height: 60px;
    padding: 0 12px;
    font-size: 1.4rem;
  }
`;

export const CategoryDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 800px;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  margin-top: 10px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const CategoryColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #a44945;
`;

export const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 6px;
  }

  a {
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

/* 메인 메뉴 */
export const MainMenu = styled.div`
  flex-shrink: 0;
  overflow: visible;
  position: relative;
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap; /* 줄바꿈 방지 */
  overflow: visible; /* 서브 메뉴가 보이도록 */
  position: relative;

  @media ${device.mobile} {
    justify-content: space-between;
    font-size: 1.4rem;
    gap: 16px;
    overflow-x: auto; /* 모바일에서만 가로 스크롤 허용 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */

    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }
  }
`;

export const MenuItem = styled.li`
  position: relative;
  flex-shrink: 0;

  a,
  a:visited {
    display: block;
    padding: 0 35px;
    height: 100px;
    line-height: 100px;
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    white-space: nowrap;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 60%;
      height: 3px;
      background: white;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: white;

      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }

    @media ${device.mobile} {
      height: 60px;
      line-height: 60px;
      padding: 0 12px;
      font-size: 1.4rem;
    }
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  background: linear-gradient(
    145deg,
    rgba(8, 17, 32, 0.95) 0%,
    rgba(12, 26, 49, 0.92) 60%,
    rgba(21, 43, 72, 0.9) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  box-shadow: 0 20px 45px rgba(3, 10, 24, 0.65);
  padding: 16px 0;
  margin-top: 12px;
  list-style: none;
  z-index: 1002;
  opacity: 0;
  visibility: hidden;
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  transform: translateX(-50%) translateY(-16px);
  transition: opacity 0.35s ease, visibility 0.35s ease,
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }

  ${MenuItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }

  @media ${device.mobile} {
    min-width: 160px;
    padding: 8px 0;
  }
`;

export const SubMenuItem = styled.li`
  margin: 0;

  a {
    display: block;
    padding: 14px 28px;
    height: auto;
    line-height: 1.4;
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    transition: all 0.25s ease;
    white-space: nowrap;
    letter-spacing: 0.02em;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%) scaleX(0);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #f6c77b;
      transition: transform 0.25s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
      padding-left: 34px;

      &::after {
        transform: translateY(-50%) scaleX(1);
      }
    }

    @media ${device.mobile} {
      padding: 12px 22px;
      font-size: 1.4rem;

      &:hover {
        padding-left: 28px;
      }
    }
  }
`;
