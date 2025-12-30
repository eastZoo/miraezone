import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

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

export const Input = styled(Common.FormInput)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;

  &[readonly] {
    background: ${({ theme }) => theme.colors.gray100};
    cursor: pointer;
  }
`;

export const TextArea = styled(Common.FormTextArea)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
`;

export const Select = styled(Common.FormSelect)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
`;

// 지도 스타일
export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.gray100};
  box-shadow: ${({ theme }) => theme.shadows.field};
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
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.4rem;
  z-index: 1;
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

export const TransportItem = styled(Common.ListItem)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
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
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(5)};
  background: ${({ $danger, $primary, theme }) => {
    if ($danger) return theme.colors.red;
    if ($primary) return theme.colors.primary;
    return theme.colors.muted;
  }};
  color: ${({ theme }) => theme.colors.white100};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${({ $danger, $primary, theme }) => {
      if ($danger) return `color-mix(in srgb, ${theme.colors.red} 90%, black)`;
      if ($primary) return `color-mix(in srgb, ${theme.colors.primary} 90%, black)`;
      return `color-mix(in srgb, ${theme.colors.muted} 90%, black)`;
    }};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.item};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray100};
    opacity: 0.6;
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

