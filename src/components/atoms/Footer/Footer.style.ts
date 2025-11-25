import { Container, device } from "@/styles/GlobalStyle";
import styled from "styled-components";

/* ========== Wrapper ========== */
export const FooterWrapper = styled.div`
  position: relative;
  background: #1a1a2e;
  width: 100%;
  display: flex;
  padding: 60px 0 40px;
`;

export const FooterInner = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const FooterLogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    color: white;
  }
`;

export const FooterLogoImage = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;

  @media ${device.mobile} {
    height: 50px;
  }
`;

export const FooterLogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FooterLogoSubtitle = styled.div`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  line-height: 1.2;

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const FooterLogoTitle = styled.div`
  font-size: 2.4rem;
  color: white;
  font-weight: 700;
  line-height: 1.2;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const FooterContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  color: white;
  font-size: 1.5rem;

  @media ${device.mobile} {
    font-size: 1.3rem;
    gap: 10px;
    flex-direction: column;
  }
`;

export const ContactItem = styled.span`
  color: white;
  white-space: nowrap;
`;

export const ContactDivider = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.4rem;

  @media ${device.mobile} {
    display: none;
  }
`;

export const FooterCopyright = styled.div`
  color: white;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 300;

  @media ${device.mobile} {
    font-size: 1.2rem;
    padding: 0 20px;
  }
`;