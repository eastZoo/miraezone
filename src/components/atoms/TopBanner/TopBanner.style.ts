import styled from "styled-components";

export const TopBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  background: #a44945;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;

  svg {
    width: 24px;
    height: 24px;
  }
`;  

export const BannerContent = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
`;

export const AppLogo = styled.img`
  width: 28px;
  height: 28px;
`;

export const BannerText = styled.p`
  font-size: 1.2rem;
  color: #fff;

  span {
    font-weight: 600;
  }
`;

export const AppOpenButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 8px;
  padding: 7px 8px;
  align-self: center;

  a {
    align-self: center;
    color: #a44945;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;