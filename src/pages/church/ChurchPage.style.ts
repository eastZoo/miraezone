import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  width: 100%;
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

export const HistoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const HistoryItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobile} {
    padding: 16px 0;
  }
`;

export const HistoryYear = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2e;
  min-width: 80px;
  margin-right: 30px;

  @media ${device.mobile} {
    font-size: 1.6rem;
    min-width: 70px;
    margin-right: 20px;
  }
`;

export const HistoryContent = styled.div`
  font-size: 1.6rem;
  color: #333;
  flex: 1;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const OrgChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background: #f8f9ff;
  border-radius: 12px;
  margin: 30px 0;

  @media ${device.mobile} {
    padding: 24px;
    gap: 16px;
  }
`;

export const OrgLevel = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;

  @media ${device.mobile} {
    gap: 20px;
  }
`;

export const OrgItem = styled.div`
  background: #ffffff;
  padding: 24px 32px;
  border-radius: 8px;
  border: 2px solid #e5e5e5;
  text-align: center;
  min-width: 150px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a1a2e;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media ${device.mobile} {
    padding: 20px 24px;
    min-width: 120px;
  }
`;

export const OrgPosition = styled.div`
  font-size: 1.4rem;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`;

export const OrgName = styled.div`
  font-size: 1.8rem;
  color: #1a1a2e;
  font-weight: 600;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

export const OrgConnector = styled.div`
  font-size: 2.4rem;
  color: #999;
  line-height: 1;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const DepartmentList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const DepartmentItem = styled.div`
  background: #f8f9ff;
  padding: 24px;
  border-radius: 8px;
  border-left: 4px solid #1a1a2e;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const DepartmentTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px 0;

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

export const DepartmentDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #666;
  margin: 0;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const LocationInfo = styled.div`
  background: #f8f9ff;
  padding: 30px;
  border-radius: 12px;
  margin: 24px 0;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

export const LocationItem = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  padding: 16px 0;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const LocationLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a2e;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const LocationValue = styled.div`
  font-size: 1.6rem;
  color: #333;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  margin: 24px 0;
  border: 1px solid #e5e5e5;
  position: relative;

  @media ${device.mobile} {
    height: 300px;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.6rem;
  position: absolute;
  top: 0;
  left: 0;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const TransportList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  @media ${device.mobile} {
    gap: 20px;
  }
`;

export const TransportItem = styled.div`
  display: flex;
  gap: 20px;
  background: #f8f9ff;
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid #1a1a2e;

  @media ${device.mobile} {
    padding: 20px;
    gap: 16px;
  }
`;

export const TransportIcon = styled.div`
  font-size: 3.6rem;
  flex-shrink: 0;

  @media ${device.mobile} {
    font-size: 3rem;
  }
`;

export const TransportContent = styled.div`
  flex: 1;
`;

export const TransportTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 12px 0;

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

export const TransportDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;
  color: #666;
  margin: 0;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

