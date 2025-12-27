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
    flex-shrink: 0;
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

export const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  border-top: 2px solid #1a1a2e;
`;

export const NoticeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  border-bottom: 1px solid #e5e5e5;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #f8f9ff;
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
  }
`;

export const NoticeTitle = styled.div`
  font-size: 1.6rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;

  @media ${device.mobile} {
    font-size: 1.4rem;
    width: 100%;
  }
`;

export const NewBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: #ff4444;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 4px;
  line-height: 1;
`;

export const NoticeMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.4rem;
  color: #999;
  flex-shrink: 0;

  @media ${device.mobile} {
    font-size: 1.3rem;
    gap: 16px;
  }
`;

export const NoticeDate = styled.span``;

export const NoticeViews = styled.span``;

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

