import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)``;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const AddButton = styled(Common.PrimaryButton)``;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadows.field};
`;

export const ViewMode = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const InfoText = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const SearchArea = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
`;

export const SearchInput = styled(Common.FormInput)`
  width: 300px;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
`;

export const SearchButton = styled(Common.PrimaryButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.4rem;
`;

export const FormSection = styled(Common.FormSection)``;

export const FormRow = styled(Common.FormRow)``;

export const FormLabel = styled(Common.FormLabel)``;

export const FormInput = styled(Common.FormInput)``;

export const FormTextarea = styled(Common.FormTextArea)``;

export const EditorWrapper = styled.div`
  .EasyMDEContainer {
    .editor-toolbar {
      border: 1px solid ${({ theme }) => theme.colors.gray100};
      border-radius: ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm} 0 0;
    }

    .CodeMirror {
      border: 1px solid ${({ theme }) => theme.colors.gray100};
      border-top: none;
      border-radius: 0 0 ${({ theme }) => theme.radius.sm} ${({ theme }) => theme.radius.sm};
      min-height: 300px;
      font-size: 1.6rem;
      line-height: 1.8;

      .CodeMirror-lines {
        padding: ${({ theme }) => theme.spacing(3)};
      }

      .CodeMirror-code {
        font-size: 1.6rem;
        line-height: 1.8;
      }

      .CodeMirror-cursor {
        border-left: 2px solid ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  margin-right: ${({ theme }) => theme.spacing(6)};

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormActions = styled(Common.FormActions)``;

export const SaveButton = styled(Common.PrimaryButton)``;

export const CancelButton = styled(Common.SecondaryButton)``;

export const NoticeList = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const NoticeItem = styled(Common.ListItem)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  margin-bottom: 0;
  border-radius: 0;

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.radius.sm};
    border-top-right-radius: ${({ theme }) => theme.radius.sm};
  }

  &:last-child {
    border-bottom-left-radius: ${({ theme }) => theme.radius.sm};
    border-bottom-right-radius: ${({ theme }) => theme.radius.sm};
    border-bottom: none;
  }
`;

export const NoticeTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const NewBadge = styled(Common.Badge).attrs({ $variant: "danger" as const })``;

export const ImportantBadge = styled(Common.Badge).attrs({ $variant: "secondary" as const })`
  background: #ffc107;
  color: #333;
`;

export const NoticeMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

export const NoticeDate = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const NoticeViews = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const NoticeActions = styled(Common.ItemActions)``;

export const EditButton = styled(Common.SecondaryButton)`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
`;

export const DeleteButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const PaginationButton = styled(Common.SecondaryButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.4rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationNumber = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.white100)};
  color: ${({ $active, theme }) => ($active ? theme.colors.white100 : theme.colors.text)};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) => ($active ? `color-mix(in srgb, ${theme.colors.primary} 90%, black)` : `${theme.colors.primary}14`)};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $active, theme }) => ($active ? theme.colors.white100 : theme.colors.primary)};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

