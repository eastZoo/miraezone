import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 50px;

  @media ${device.mobile} {
    height: 200px;
    margin-bottom: 40px;
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.9;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-align: center;
  padding: 40px;
`;

export const HeroTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin: 0 0 12px 0;

  @media ${device.mobile} {
    font-size: 2.4rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
  opacity: 0.9;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.mobile} {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 2px solid #e5e5e5;

  @media ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 20px;
    padding-bottom: 12px;
  }
`;

export const SectionContent = styled.div`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333;

  p {
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${device.mobile} {
    font-size: 1.4rem;
    line-height: 1.7;

    p {
      margin-bottom: 16px;
    }
  }
`;

export const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
  }
`;

export const ActivityCard = styled.div`
  background: #f8f9ff;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #1a1a2e;
  }

  @media ${device.mobile} {
    padding: 24px;
  }
`;

export const ActivityIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 3.2rem;
    margin-bottom: 12px;
  }
`;

export const ActivityTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px 0;

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

export const ActivityDescription = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #666;
  margin: 0;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const ScheduleTable = styled.div`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
`;

export const ScheduleRow = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const ScheduleLabel = styled.div`
  padding: 20px;
  background: #f8f9ff;
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a2e;
  border-right: 1px solid #e5e5e5;

  @media ${device.mobile} {
    padding: 16px;
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
    font-size: 1.4rem;
  }
`;

export const ScheduleValue = styled.div`
  padding: 20px;
  font-size: 1.6rem;
  color: #333;

  @media ${device.mobile} {
    padding: 16px;
    font-size: 1.4rem;
  }
`;

