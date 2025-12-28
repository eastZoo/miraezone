import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 48px;
  background: #fff;
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
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

// 폼 스타일
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
`;

export const AddressSearchRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &[readonly] {
    background: #f8f9fa;
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

// 지도 스타일
export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  background: #f8f9fa;
`;

export const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const MapPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #999;
  font-size: 14px;
`;

// 대중교통 안내 스타일
export const AddForm = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 2px solid #e0e0e0;
`;

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;

export const TransportListContainer = styled.div`
  margin-top: 24px;
  border-top: 2px solid #e0e0e0;
  padding-top: 24px;
`;

export const TransportListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const TransportListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const TransportCount = styled.span`
  font-size: 14px;
  color: #666;
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 12px;
`;

export const TransportListScrollable = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;

    &:hover {
      background: #555;
    }
  }
`;

export const TransportItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  margin-bottom: 12px;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    border-color: #007bff;
  }
`;

export const TransportContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const TransportTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const TransportDesc = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

// 버튼 스타일
export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button<{ $primary?: boolean; $danger?: boolean }>`
  padding: 10px 20px;
  background: ${(props) => {
    if (props.$danger) return "#dc3545";
    if (props.$primary) return "#007bff";
    return "#6c757d";
  }};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;

  &:hover {
    background: ${(props) => {
      if (props.$danger) return "#c82333";
      if (props.$primary) return "#0056b3";
      return "#5a6268";
    }};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const EditForm = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
`;

// 주소 검색 모달 스타일
export const PostcodeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostcodeModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const PostcodeModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 24px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 1001;
`;

export const PostcodeModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

export const PostcodeModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

