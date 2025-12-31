import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  padding: 16px;
  max-width: 1600px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 12px;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 0 16px 0;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 20px;
    padding-bottom: 12px;
  }
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;

  @media ${device.mobile} {
    flex-wrap: wrap;
    gap: 12px;
    font-size: 12px;
  }
`;

export const Speaker = styled.span``;

export const Date = styled.span``;

export const Views = styled.span``;

export const BackButton = styled.button`
  padding: 10px 24px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }

  @media ${device.mobile} {
    padding: 8px 16px;
    font-size: 12px;
    width: 100%;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const NoVideo = styled.div`
  text-align: center;
  padding: 48px;
  font-size: 18px;
  color: #666;
  background: #f8f9fa;
  border-radius: 8px;
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 48px;
  font-size: 18px;
  color: #666;
`;

export const NavigationSection = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media ${device.mobile} {
    margin-top: 32px;
    padding-top: 16px;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobile} {
    padding: 12px 0;
  }
`;

export const NavigationLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 80px;

  @media ${device.mobile} {
    min-width: 60px;
    gap: 6px;
  }
`;

export const NavigationArrow = styled.span`
  font-size: 16px;
  color: #666;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const NavigationLabel = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const NavigationRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }
`;

export const NavigationTitle = styled.span`
  color: #333;
  font-size: 14px;
  flex: 1;
  text-align: left;

  @media ${device.mobile} {
    font-size: 12px;
    text-align: left;
  }
`;

export const NavigationAuthor = styled.span`
  color: #666;
  font-size: 14px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const NavigationDate = styled.span`
  color: #666;
  font-size: 14px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export const NavigationEmpty = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #e0e0e0;
  color: #999;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobile} {
    padding: 12px 0;
    font-size: 12px;
  }
`;

export const NavigationEmptyText = styled.span`
  margin-left: 24px;

  @media ${device.mobile} {
    margin-left: 20px;
  }
`;

