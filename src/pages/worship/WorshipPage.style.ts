import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const WorshipSchedule = styled.div`
  margin-bottom: 50px;
`;

export const ScheduleSection = styled.section`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ScheduleTitle = styled.h2`
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

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ScheduleItem = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr 150px;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;

  &:hover {
    background: #f8f9ff;
  }

  &:last-child {
    border-bottom: none;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px;
  }
`;

export const ScheduleTime = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1a1a2e;

  @media ${device.mobile} {
    font-size: 1.6rem;
  }
`;

export const ScheduleName = styled.div`
  font-size: 1.6rem;
  color: #333;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const SchedulePlace = styled.div`
  font-size: 1.5rem;
  color: #666;
  text-align: right;

  @media ${device.mobile} {
    font-size: 1.4rem;
    text-align: left;
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

export const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 30px;
  }
`;

export const VideoCard = styled.div`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: #1a1a2e;
  }
`;

export const VideoThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #1a1a2e;
  position: relative;
  overflow: hidden;
`;

export const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

export const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a2e;
  font-size: 2.4rem;
  padding-left: 4px;
  transition: all 0.2s ease;

  ${VideoCard}:hover & {
    transform: scale(1.1);
    background: #ffffff;
  }
`;

export const VideoInfo = styled.div`
  padding: 20px;
`;

export const VideoDate = styled.div`
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 12px;
`;

export const VideoTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const VideoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  color: #666;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

export const VideoSpeaker = styled.span`
  font-weight: 500;
`;

export const VideoViews = styled.span``;

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

