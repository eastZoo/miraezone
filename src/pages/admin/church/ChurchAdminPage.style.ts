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

export const SaveButton = styled.button`
  padding: 10px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const EditorWrapper = styled.div`
  .EasyMDEContainer {
    .editor-toolbar {
      border: 1px solid #ddd;
      border-radius: 4px 4px 0 0;
    }

    .CodeMirror {
      border: 1px solid #ddd;
      border-top: none;
      border-radius: 0 0 4px 4px;
      min-height: 200px;
    }
  }
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const HistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
`;

export const HistoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

export const HistoryYear = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #007bff;
  min-width: 80px;
`;

export const HistoryText = styled.span`
  font-size: 16px;
  color: #333;
  flex: 1;
`;

export const HistoryEditForm = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex: 1;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Button = styled.button<{ $danger?: boolean }>`
  padding: 8px 16px;
  background: ${(props) => (props.$danger ? "#dc3545" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => (props.$danger ? "#c82333" : "#0056b3")};
  }
`;

export const AddHistoryForm = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 2px solid #e0e0e0;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

