import styled from "styled-components";
import { Container, device, ShadowCardContainer } from "@/styles/GlobalStyle";

export const InfoCardContainer = styled.div`
  padding: 40px 0;
  background: white;

`;

export const InfoCardContent = styled(Container)`
  max-width: 1200px;
  background: white;
  padding: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative; 

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 30px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: calc(50% - 50vw);
      width: 100vw;
      height: 4px;
      background: #eee;
    }
  }
`;

export const CustomerServiceSection = styled(ShadowCardContainer)`
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 40px 35px;

  @media ${device.mobile} {
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    gap: 20px;
  }
`;

export const ServiceInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

   @media ${device.mobile} {
    flex-direction: column; 
  }
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin: 0;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const PhoneNumber = styled.div`
  font-size: 2.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

export const OperatingHours = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
`;

export const HoursText = styled.span`
  font-size: 1.4rem;
  color: #666;
`;

export const AccountNoticeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccountInfoWrapper = styled(ShadowCardContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 25px 35px;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    align-items: flex-start;
  }
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const AccountTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const AccountNumber = styled.div`
  font-size: 2.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

export const BankInfo = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.grayText};
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    flex-direction: row;

  }
`;

export const NoticeSection = styled(ShadowCardContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px 35px;
`;

export const NoticeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoticeTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const ViewAllLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PlusIcon = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NoticeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const NoticeText = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  margin-right: 12px;
`;

export const NoticeDate = styled.span`
  font-size: 1.2rem;
  color: #999;
  white-space: nowrap;
`;
