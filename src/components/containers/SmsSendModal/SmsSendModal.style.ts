import styled from "styled-components";

export const SmsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NoticeText = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
  padding: 8px 0;
`;

export const MessageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 16px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  min-height: 200px;
  padding-bottom: 40px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const ByteCounter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  color: #666;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
`;

export const PhoneInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

export const PhoneInfoRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

export const PhoneNumber = styled.span`
  font-size: 14px;
  color: #333;
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

