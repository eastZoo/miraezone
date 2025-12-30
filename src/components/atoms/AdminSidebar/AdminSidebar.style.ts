import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "@/styles/GlobalStyle";

export const Sidebar = styled.div<{ $hasSubTabs?: boolean }>`
  position: fixed;
  left: 0;
  top: ${({ $hasSubTabs }) => ($hasSubTabs ? "128px" : "72px")}; /* 헤더(72px) + 하위 탭(56px) 또는 헤더만 */
  bottom: 0;
  width: 300px;
  background: #ffffff;
  border-right: 1px solid #e8e9ea;
  padding: 24px 20px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 998;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.03);
  transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media ${device.mobile} {
    width: 100%;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;

    &.open {
      transform: translateX(0);
    }
  }
`;

export const MenuGroup = styled.div`
  margin-bottom: 20px;
  padding-left: 16px;
`;

export const GroupHeader = styled.div<{ 
  $isOpen?: boolean; 
  $hasActiveItem?: boolean;
}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: ${({ $isOpen }) => $isOpen ? "#e8e8e8" : "transparent"};
  
  /* 제목 색상 */
  ${({ $isOpen, $hasActiveItem }) => 
    ($isOpen && $hasActiveItem) && `
      h3 {
        color: #A44945;
      }
      span {
        color: #A44945;
      }
    `}

    &::before {
    content: "";
    position: absolute;
    left: -28px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 46px;
    background: #A44945;
    border-radius: 0 8px 8px 0;
    opacity: ${({ $isOpen }) => $isOpen ? "1" : "0"};
    transition: opacity 0.2s ease;
  }

  &:hover {
    background: #e8e8e8;
    
    h3 {
      color: #A44945;
    }
    
    span {
      color: #A44945;
    }
  }
`;

export const GroupHeaderStatic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  user-select: none;
`;

export const GroupTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  margin: 0;

  &:active {
    background: #e8e8e8;
    border-radius: 8px;
    color: #A44945;
  }
`;

export const CollapseIcon = styled.span<{ $isCollapsed: boolean }>`
  font-size: 1.2rem;
  color: #333;
  transition: transform 0.2s ease;
  transform: rotate(
    ${({ $isCollapsed }) => ($isCollapsed ? "0deg" : "180deg")}
  );

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin: 0;
`;

export const MenuLink = styled(NavLink)<{ $isActive?: boolean }>`
  display: block;
  padding: 12px 20px;
  padding-left: 30px;
  font-size: 1.4rem;
  color: ${({ $isActive }) => ($isActive ? "#A44945" : "#777")};
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 400;
  /* background: ${({ $isActive }) => ($isActive ? "#e8e8e8" : "transparent")}; */
  /* border-left: ${({ $isActive }) => ($isActive ? "3px solid #ff4444" : "0")}; */
  margin-left: ${({ $isActive }) => ($isActive ? "0" : "0")};
/* 
  &:hover {
    background: #e8e8e8;
    color: #000;
    border-left: 3px solid #ff4444;
    padding-left: 27px;
  }

  &.active {
    color: #000;
    font-weight: 600;
    background: #e8e8e8;
    border-left: 3px solid #ff4444;
    padding-left: 27px;
  } */
`;
