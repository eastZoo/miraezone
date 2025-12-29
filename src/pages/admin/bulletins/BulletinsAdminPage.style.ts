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

export const FileSection = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const FileSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const FileSectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const UploadButton = styled.button`
  padding: 8px 16px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #218838;
  }
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FileItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 4px;
`;

export const FileName = styled.span`
  font-size: 14px;
  color: #333;
`;

export const FileActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const DeleteFileButton = styled.button`
  padding: 4px 12px;
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

export const BulletinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

export const BulletinCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const BulletinThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ThumbnailPlaceholder = styled.div`
  text-align: center;
  color: #666;
  font-size: 18px;
  font-weight: 600;
`;

export const BulletinInfo = styled.div`
  padding: 16px;
`;

export const BulletinDate = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const BulletinTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;
`;

export const BulletinActions = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
  flex-wrap: wrap;
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

export const DownloadButton = styled.button`
  padding: 6px 12px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #218838;
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

