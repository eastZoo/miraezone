import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #eee;
`;

/* 상단바 */
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  height: 56px;
`;

/* 상단바 좌측 */
export const TopLeft = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;


export const Logo = styled.img`
  height: 28px;
`;

/* 햄버거 메뉴 */
export const HamMenu = styled.button`
  display: flex;
  align-items: center;
  font-size: 24px;
  background: none;
  border: none;
`;

/* 우측 아이콘 그룹 */
export const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconBtn = styled.button`
  position: relative;
  font-size: 28px;
  background: none;
  border: none;
  padding: 0;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -6px;
  background: #a44945;
  color: #fff;
  font-size: 10px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 검색창 */
export const SearchBar = styled.div`
  padding: 8px 12px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid  #a44945;
  border-radius: 35px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 12px 16px;
  font-size: 12px;
  
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const SearchButton = styled.button`
  padding: 0 16px 0 8px;
  background: none;
  border: none;
  font-size: 20px;
  color:  #a44945;
`;

/* 탭메뉴 */
export const TabMenu = styled.nav`
  position: relative;
  display: flex;
  gap: 20px;
  padding: 0 16px;
  border-bottom: 1px solid #eee;

  overflow-x: auto;
  overscroll-behavior-x: contain;

  /* 스크롤바 숨김 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  a {
    position: relative;
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 6px;
    font-size: 1.4rem;
    color: #999;
    text-decoration: none;
    text-align: center;
  }
`;

export const TabLink = styled(NavLink)`
  position: relative;
  flex: 0 0 auto;
  padding: 12px 0;
  text-decoration: none;
  color: #b3b3b3;

  &.active {
    color: #a44945;
    font-weight: 600;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 0; right: 0; bottom: -1px;
    height: 2px;
    background: #a44945;
    border-radius: 2px;
  }
`;
