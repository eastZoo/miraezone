import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
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
  border-bottom: ${({ $active }) =>
    $active ? "3px solid #1a1a2e" : "3px solid transparent"};
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
`;

export const Section = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const AddButton = styled.button`
  padding: 10px 24px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2a2a3e;
  }
`;

// 폼 스타일
export const FormSection = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }
`;

export const SelectBox = styled.select`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  background: #ffffff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }
`;

export const HelpText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const SaveButton = styled.button`
  padding: 10px 24px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2a2a3e;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: #ffffff;
  color: #666;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #1a1a2e;
    color: #1a1a2e;
  }
`;

// 예배 일정 목록 스타일
export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ScheduleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

export const ScheduleType = styled.span`
  padding: 4px 12px;
  background: #1a1a2e;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 4px;
`;

export const ScheduleName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  min-width: 200px;
`;

export const ScheduleTime = styled.span`
  font-size: 1.4rem;
  color: #666;
  min-width: 150px;
`;

export const SchedulePlace = styled.span`
  font-size: 1.4rem;
  color: #666;
`;

export const ScheduleActions = styled.div`
  display: flex;
  gap: 8px;
`;

// 설교 영상 목록 스타일
export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const VideoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const VideoThumbnail = styled.div`
  width: 160px;
  height: 90px;
  background: #1a1a2e;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.4rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

export const VideoInfo = styled.div`
  flex: 1;
`;

export const VideoTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const VideoMeta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 1.3rem;
  color: #666;
`;

export const VideoActions = styled.div`
  display: flex;
  gap: 8px;
`;

// 공통 버튼 스타일
export const EditButton = styled.button`
  padding: 8px 16px;
  background: #ffffff;
  color: #1a1a2e;
  border: 1px solid #1a1a2e;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1a1a2e;
    color: #ffffff;
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  background: #ffffff;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #dc3545;
    color: #ffffff;
  }
`;

