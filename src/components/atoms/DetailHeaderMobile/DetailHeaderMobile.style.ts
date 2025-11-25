import styled from "styled-components";

export const DetailHeaderWrapper = styled.div`
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  position: relative;
`;

export const HeaderLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 1;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderTitle = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 0;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
   }
`;

export const HeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CartBtn = styled.button`
  position: relative;
  font-size: 24px;
  background: none;
  border: none;
  padding: 0;
`;


export const NotiBtn = styled.button`
  position: relative;
  font-size: 24px;
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