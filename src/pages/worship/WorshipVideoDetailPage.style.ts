import styled from "styled-components";

export const ContentWrapper = styled.div`
  padding: 16px;
  max-width: 1600px;
  margin: 0 auto;
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
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;
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

