import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi2";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
  z-index: 998;

  &[data-open="true"] {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const CloseButton = styled.button`
  position: fixed;
  top: calc(16px + env(safe-area-inset-top, 0px));
  right: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  z-index: 1000;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const HamMenuContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: #fff;
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  padding: 0 16px 56px;

  &[data-open="true"] {
    transform: translateX(0);
  }

  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-y: auto;
`;

/************ 로그인/회원가입 *************/
export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 16px 0 8px 0;
`;

export const LoginBtn = styled(Link)`
  flex: 1;
  padding: 10px;
  background: #333;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`;

export const JoinBtn = styled(Link)`
  flex: 1;
  padding: 10px;
  color: #999;
  border: solid 1px #eee;
  font-size: 1.4rem;
  font-weight: 500;
  background: #fff;
  text-align: center;
`;

/************ 유틸리티 *************/
export const UtilityMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  border: solid;
  border-width: 1px 0 1px 0;
  border-color: #eee;
  padding: 16px 0;
`;

export const UtilityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  li {
  }

  svg {
    width: 28px;
    height: 28px;
  }

  span {
    font-size: 1.4rem;
    color: #666;
  }
`;

/************ 탭메뉴 *************/
export const TabMenuWrapper = styled.div`
  border-left: solid 1px #eee;
  border-right: solid 1px #eee;
`;

export const TabMenu = styled.div`
  width: 100%;
  display: flex;
  border-top: solid 1px #eee;

  button {
    flex: 1;
    padding: 12px 0;
    background: #f8f8f8;
    border: none;
    font-size: 1.4rem;
    color: #999;
    cursor: pointer;
    position: relative;

    /* active 상태 */
    &.active {
      color: #333;
      font-weight: 600;
      background: #fff;
    }
  }
`;

// 탭메뉴 콘텐츠
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #fff;
`;

export const AccHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border: 0;
  background: #fff;
  color: #111;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

export const Chevron = styled(HiChevronDown)<{ $open?: boolean }>`
  width: 18px;
  height: 18px;
  color: #333;
  transition: transform 0.2s ease;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
`;

/* 펼쳐지는 패널 */
export const AccPanel = styled.div`
  background: #f7f7f7;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease;

  &[data-open="true"] {
    max-height: 240px;
  }

  a {
    display: block;
    padding: 12px 16px 12px 24px;
    text-decoration: none;
    color: #333;
    font-size: 1.4rem;
  }
`;

export const CustomerCenter = styled.div`
  p {
    font-size: 1.4rem;
    color: #333;
  }
  strong {
    display: block;
    font-size: 2.6rem;
    color: #111;
  }

  small {
    display: block;
    color: #666;
    font-size: 1.2rem;
    margin-top: 30px;
  }
`;
