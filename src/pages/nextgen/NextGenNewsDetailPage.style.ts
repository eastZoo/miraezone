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
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NoticeBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #ffc107;
  color: #333;
  font-size: 12px;
  font-weight: 600;
  border-radius: 2px;
`;

export const NewBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #dc3545;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 2px;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;
`;

export const Department = styled.span`
  font-weight: 500;
  color: #007bff;
`;

export const Author = styled.span``;

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

export const ContentSection = styled.div`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  padding: 20px 0;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 48px;
  font-size: 18px;
  color: #666;
`;

