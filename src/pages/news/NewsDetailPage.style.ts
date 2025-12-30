import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 0 24px 0;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
    padding-bottom: 16px;
  }
`;

export const TitleSection = styled.div`
  flex: 1;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #333;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.4;

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }
`;

export const NewBadge = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #dc3545;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
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

  @media ${device.mobile} {
    padding: 8px 16px;
    font-size: 12px;
    width: 100%;
  }
`;

export const ThumbnailSection = styled.div`
  margin-bottom: 32px;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ContentSection = styled.div`
  line-height: 1.8;
  color: #333;
  font-size: 16px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 1.7;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    margin-bottom: 16px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 16px 0;
  }

  ul,
  ol {
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 16px;
    margin: 16px 0;
    color: #666;
    font-style: italic;
  }

  code {
    background: #f4f4f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    font-size: 14px;
  }

  pre {
    background: #f4f4f4;
    padding: 16px;
    border-radius: 4px;
    overflow-x: auto;
    margin: 16px 0;

    code {
      background: none;
      padding: 0;
    }
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 48px;
  font-size: 18px;
  color: #666;
`;

