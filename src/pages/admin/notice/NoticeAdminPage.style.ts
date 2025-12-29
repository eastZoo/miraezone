import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.div`
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

export const AddButton = styled.button`
  padding: 10px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 4px;
`;

export const ViewMode = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InfoText = styled.span`
  font-size: 14px;
  color: #666;
`;

export const SearchArea = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 24px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 4px;
`;

export const FormRow = styled.div`
  margin-bottom: 16px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #007bff;
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
      min-height: 300px;
    }
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin-right: 24px;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
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

  &:hover {
    background: #0056b3;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #5a6268;
  }
`;

export const NoticeList = styled.div`
  margin-bottom: 24px;
`;

export const NoticeItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f8f9fa;
  }
`;

export const NoticeTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

export const NewBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #dc3545;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 2px;
`;

export const ImportantBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #ffc107;
  color: #333;
  font-size: 12px;
  font-weight: 600;
  border-radius: 2px;
`;

export const NoticeMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: 16px;
`;

export const NoticeDate = styled.span`
  font-size: 14px;
  color: #666;
`;

export const NoticeViews = styled.span`
  font-size: 14px;
  color: #666;
`;

export const NoticeActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditButton = styled.button`
  padding: 6px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c82333;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  background: white;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #f8f9fa;
    border-color: #007bff;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaginationNumber = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  background: ${(props) => (props.$active ? "#333" : "white")};
  color: ${(props) => (props.$active ? "white" : "#333")};
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) => (props.$active ? "#333" : "#f8f9fa")};
    border-color: #007bff;
  }
`;

