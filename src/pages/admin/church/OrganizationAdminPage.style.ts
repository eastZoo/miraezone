import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const OrgChartPreview = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.white100};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  box-shadow: ${({ theme }) => theme.shadows.field};
`;

export const OrgLevel = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const OrgItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.white100};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  min-width: 120px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.field};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const OrgPosition = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const OrgName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const OrgConnector = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 2rem;
  margin: ${({ theme }) => theme.spacing(2)} 0;
`;

// 조직 구성원 목록
export const MemberListContainer = styled.div`
  margin-top: 24px;
  border-top: 2px solid #e0e0e0;
  padding-top: 24px;
`;

export const MemberListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MemberListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const MemberCount = styled.span`
  font-size: 14px;
  color: #666;
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 12px;
`;

export const MemberListScrollable = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;

  /* 스크롤바 스타일링 */
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

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MemberItem = styled(Common.ListItem)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const MemberName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const MemberInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.muted};

  span {
    padding: ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(2)};
    background: ${({ theme }) => theme.colors.white100};
    border-radius: ${({ theme }) => theme.radius.sm};
    border: 1px solid ${({ theme }) => theme.colors.gray100};
  }
`;

// 부서 목록
export const DepartmentListContainer = styled.div`
  margin-top: 24px;
  border-top: 2px solid #e0e0e0;
  padding-top: 24px;
`;

export const DepartmentListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DepartmentListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const DepartmentCount = styled.span`
  font-size: 14px;
  color: #666;
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 12px;
`;

export const DepartmentListScrollable = styled.div`
  max-height: 500px;
  overflow-y: auto;
  padding-right: 8px;

  /* 스크롤바 스타일링 */
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

export const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DepartmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;

  &:hover {
    background: #f0f0f0;
    border-color: #007bff;
  }
`;

export const DepartmentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const DepartmentTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const DepartmentDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

// 직분 목록
export const PositionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const PositionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

export const PositionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const PositionName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const PositionDesc = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.6;
`;

// 공통 폼 스타일
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

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
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

export const Input = styled(Common.FormInput)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
`;

export const Select = styled(Common.FormSelect)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
`;

export const TextArea = styled(Common.FormTextArea)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
  min-width: 200px;
`;

export const ButtonGroup = styled(Common.ItemActions)``;

export const Button = styled.button<{ $danger?: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ $danger, theme }) => ($danger ? theme.colors.red : theme.colors.primary)};
  color: ${({ theme }) => theme.colors.white100};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${({ $danger, theme }) => ($danger ? `color-mix(in srgb, ${theme.colors.red} 90%, black)` : `color-mix(in srgb, ${theme.colors.primary} 90%, black)`)};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.item};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

