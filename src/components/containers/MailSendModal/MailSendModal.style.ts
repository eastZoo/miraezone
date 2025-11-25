import styled from "styled-components";

export const MailForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  align-items: center;

  &:has(textarea) {
    align-items: flex-start;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  min-height: 250px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 8px 0;
`;

export const AttachmentNotice = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
  padding: 12px;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

export const FileUploadGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const FileStatus = styled.span`
  font-size: 14px;
  color: #666;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;

  button {
    min-width: 120px;
  }
`;

