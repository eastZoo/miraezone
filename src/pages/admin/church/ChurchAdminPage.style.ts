import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";
import { device } from "@/styles/GlobalStyle";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)`
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const SaveButton = styled(Common.PrimaryButton)``;

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
      min-height: 100px;
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

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const HistoryItem = styled(Common.ListItem)``;

export const HistoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  flex: 1;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const HistoryYear = styled(Common.Badge).attrs({ $variant: "primary" as const })`
  min-width: 80px;
  font-size: 1.8rem;
`;

export const HistoryText = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
`;

export const HistoryEditForm = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  flex: 1;
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

export const AddHistoryForm = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  border-top: 2px solid ${({ theme }) => theme.colors.gray100};
`;

export const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;

export const Input = styled(Common.FormInput)`
  padding: ${({ theme }) => theme.spacing(2.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.4rem;
`;

