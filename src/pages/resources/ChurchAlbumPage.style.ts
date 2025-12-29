import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    margin-bottom: 24px;
    padding-bottom: 16px;
  }
`;

export const ViewMode = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoText = styled.span`
  font-size: 1.4rem;
  color: #666;
  margin-left: 12px;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${device.mobile} {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  width: 250px;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }

  @media ${device.mobile} {
    flex: 1;
    width: auto;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 20px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #2a2a3e;
  }
`;

export const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 30px;
  }
`;

export const AlbumCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const AlbumThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #f8f9fa;
  overflow: hidden;
  position: relative;
`;

export const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const AlbumInfo = styled.div`
  padding: 16px;
`;

export const AlbumDate = styled.div`
  font-size: 1.2rem;
  color: #999;
  margin-bottom: 8px;
`;

export const AlbumTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const AlbumMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  color: #666;
`;

export const AlbumViews = styled.span``;

export const NoAlbums = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  font-size: 1.6rem;
  color: #999;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  background: #ffffff;
  color: #333;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #f8f9fa;
    border-color: #1a1a2e;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const PaginationNumber = styled.button<{ $active: boolean }>`
  padding: 10px 16px;
  background: ${(props) => (props.$active ? "#1a1a2e" : "#ffffff")};
  color: ${(props) => (props.$active ? "#ffffff" : "#333")};
  border: 1px solid ${(props) => (props.$active ? "#1a1a2e" : "#e5e5e5")};
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.$active ? "#1a1a2e" : "#f8f9fa")};
    border-color: #1a1a2e;
  }
`;

