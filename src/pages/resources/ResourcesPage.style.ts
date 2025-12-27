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

export const ViewIcon = styled.button<{ $active?: boolean }>`
  width: 32px;
  height: 32px;
  border: 1px solid #e5e5e5;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a1a2e;
  }
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

export const SelectBox = styled.select`
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  background: #ffffff;
  cursor: pointer;

  @media ${device.mobile} {
    flex: 1;
    min-width: 100px;
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

export const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  border-top: 2px solid #1a1a2e;
`;

export const ResourceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9ff;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }
`;

export const ResourceIcon = styled.div`
  font-size: 3.6rem;
  flex-shrink: 0;

  @media ${device.mobile} {
    font-size: 3rem;
  }
`;

export const ResourceInfo = styled.div`
  flex: 1;
`;

export const ResourceTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

export const ResourceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.4rem;
  color: #666;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ResourceArtist = styled.span`
  font-weight: 500;
`;

export const ResourceCategory = styled.span`
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 1.2rem;
`;

export const ResourceStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  flex-shrink: 0;

  @media ${device.mobile} {
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;

export const DownloadCount = styled.div`
  font-size: 1.3rem;
  color: #999;
`;

export const DownloadButton = styled.button`
  padding: 10px 24px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #2a2a3e;
  }

  @media ${device.mobile} {
    padding: 8px 20px;
    font-size: 1.3rem;
  }
`;

export const DownloadList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  border-top: 2px solid #1a1a2e;
`;

export const DownloadItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9ff;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;
    padding: 20px;
  }
`;

export const FileIcon = styled.div<{ $fileType: string }>`
  font-size: 4rem;
  flex-shrink: 0;

  @media ${device.mobile} {
    font-size: 3.2rem;
  }
`;

export const DownloadInfo = styled.div`
  flex: 1;
`;

export const DownloadTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

export const DownloadDesc = styled.div`
  font-size: 1.4rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 1.3rem;
    margin-bottom: 12px;
  }
`;

export const DownloadMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 1.3rem;
  color: #666;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MetaLabel = styled.span`
  color: #999;
`;

export const MetaValue = styled.span`
  color: #333;
  font-weight: 500;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 16px;
  border: 1px solid #e5e5e5;
  background: #ffffff;
  color: #666;
  font-size: 1.4rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #1a1a2e;
    color: #1a1a2e;
  }
`;

export const PaginationNumber = styled.button<{ $active?: boolean }>`
  padding: 8px 12px;
  border: 1px solid #e5e5e5;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666")};
  font-size: 1.4rem;
  cursor: pointer;
  min-width: 36px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1a1a2e;
    color: ${({ $active }) => ($active ? "#ffffff" : "#1a1a2e")};
  }
`;

