import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  width: 100%;
`;

// 탭 스타일
export const TabContainer = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 30px;
  border-bottom: 2px solid #e5e5e5;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  padding: 16px 32px;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666")};
  border: none;
  border-bottom: ${({ $active }) => ($active ? "3px solid #1a1a2e" : "3px solid transparent")};
  font-size: 1.6rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  top: 2px;

  &:hover {
    background: ${({ $active }) => ($active ? "#1a1a2e" : "#f8f9ff")};
    color: ${({ $active }) => ($active ? "#ffffff" : "#1a1a2e")};
  }

  @media ${device.mobile} {
    padding: 12px 20px;
    font-size: 1.4rem;
  }
`;

// 예배 일정 테이블 스타일
export const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
`;

export const ScheduleTableHeader = styled.thead`
  background: #1a1a2e;
  color: #ffffff;
`;

export const ScheduleTableHeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;

  @media ${device.mobile} {
    padding: 12px 16px;
    font-size: 1.4rem;
  }
`;

export const ScheduleTableBody = styled.tbody``;

export const ScheduleTableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9ff;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ScheduleTableCell = styled.td`
  padding: 16px 20px;
  font-size: 1.5rem;
  color: #333;

  @media ${device.mobile} {
    padding: 12px 16px;
    font-size: 1.4rem;
  }
`;

export const WorshipNotice = styled.section`
  background: #f8f9ff;
  padding: 30px;
  border-radius: 8px;
  border-left: 4px solid #1a1a2e;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const NoticeTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 20px 0;

  @media ${device.mobile} {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }
`;

export const NoticeContent = styled.div`
  font-size: 1.6rem;
  line-height: 1.8;
  color: #333;

  p {
    margin: 0 0 16px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media ${device.mobile} {
    font-size: 1.4rem;
    line-height: 1.7;

    p {
      margin-bottom: 12px;
    }
  }
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

// 설교 영상 테이블 스타일
export const VideosTableWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media ${device.mobile} {
    margin-bottom: 30px;
  }
`;

export const VideosTable = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;

  @media ${device.mobile} {
    min-width: 500px;
  }
`;

export const VideosTableHeader = styled.thead`
  background: #1a1a2e;
  color: #ffffff;
`;

export const VideosTableHeaderCell = styled.th`
  padding: 16px 20px;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 600;

  @media ${device.mobile} {
    padding: 12px 16px;
    font-size: 1.4rem;
  }
`;

export const VideosTableBody = styled.tbody``;

export const VideosTableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #f8f9ff;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const VideosTableCell = styled.td`
  padding: 16px 20px;
  font-size: 1.5rem;
  color: #333;
  vertical-align: middle;

  @media ${device.mobile} {
    padding: 12px 16px;
    font-size: 1.4rem;
  }
`;

export const VideoThumbnailImg = styled.img`
  width: 120px;
  height: 68px;
  object-fit: cover;
  border-radius: 4px;

  @media ${device.mobile} {
    width: 80px;
    height: 45px;
  }
`;

export const ThumbnailPlaceholder = styled.div`
  width: 120px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 4px;

  &.hidden {
    display: none;
  }

  @media ${device.mobile} {
    width: 80px;
    height: 45px;
  }
`;

export const PlayIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a2e;
  font-size: 1.8rem;
  padding-left: 3px;

  @media ${device.mobile} {
    width: 28px;
    height: 28px;
    font-size: 1.4rem;
  }
`;

export const VideoTitleText = styled.div`
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
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

