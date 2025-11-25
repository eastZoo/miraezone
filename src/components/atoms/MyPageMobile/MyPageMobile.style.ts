import styled from "styled-components";

export const MyPageMobile = styled.div`
  width: 100%;
  position: relative;
`;

/* ================== 헤더 ================== */
export const MyPageHeader = styled.div`
  position: relative;
  padding: 24px 0;

  &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(50% - 50vw);
      width: 100vw;
      height: 5px;
      background: #eee;
    }
`;

export const HedaerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  color: #111;

  span {
    font-size: 1.4rem;
  }
`;

export const HeaderEmail = styled.span`
  margin: 0;
  font-size: 1.2rem;
  color: #999;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border: none;
  background: none;
  color: #999;
  font-size: 1.4rem;
  cursor: pointer;
  
  svg {
    width: 15px;
    height: 15px;
  }
`;

/* ================== 4개 로우 메뉴 ================== */
export const MenuRow = styled.div`
  position: relative;
  width: 100%;
`;

export const MenuRowList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: calc(50% - 50vw);
    width: 100vw;
    height: 5px;
    background: #eee;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  min-width: 84px;

  li {
  }

  svg {
    width: 28px;
    height: 28px;
  }

  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: #111;
  }

  .point {
    color: #a44945;
  }
`;

export const MenuItemTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: #999;
`;

/* ================== 메뉴 리스트 ================== */
export const MenuList = styled.ul`
`;

export const MenuListItem = styled.li`
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    text-decoration: none;
    color: inherit;
    font-size: 1.6rem;
    font-weight: 600;
  }

`;