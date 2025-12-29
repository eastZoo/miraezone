import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
`;

// 탭 스타일
export const TabContainer = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 30px;
  border-bottom: 2px solid #e5e5e5;
`;

export const TabButton = styled.button<{ $active?: boolean }>`
  padding: 16px 32px;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#666")};
  border: none;
  border-bottom: ${({ $active }) =>
    $active ? "3px solid #1a1a2e" : "3px solid transparent"};
  font-size: 1.6rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  top: 2px;

  &:hover {
    background: ${({ $active }) => ($active ? "#1a1a2e" : "#f8f9ff")};
    color: ${({ $active }) => ($active ? "#ffffff" : "#1a1a2e")};
  }
`;

export const Section = styled.div`
  background: #ffffff;
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
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const AddButton = styled.button`
  padding: 10px 24px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2a2a3e;
  }
`;

// 폼 스타일
export const FormSection = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  width: 100%;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }
`;

export const SelectBox = styled.select`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  background: #ffffff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #1a1a2e;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const SaveButton = styled.button`
  padding: 10px 24px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2a2a3e;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 24px;
  background: #ffffff;
  color: #666;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #1a1a2e;
    color: #1a1a2e;
  }
`;

// 이미지 업로드 스타일
export const ImageUploadArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PreviewImage = styled.img`
  max-width: 500px;
  max-height: 300px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
`;

export const PreviewPlaceholder = styled.div`
  width: 500px;
  height: 300px;
  background: #f8f9fa;
  border: 1px dashed #e5e5e5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.4rem;
`;

export const UploadButton = styled.button`
  padding: 10px 24px;
  background: #1a1a2e;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  width: fit-content;

  &:hover {
    background: #2a2a3e;
  }
`;

// 앨범 이미지 업로드 섹션
export const ImageUploadSection = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e5e5;
`;

export const ImageUploadSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ImageUploadSectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const AlbumImagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

export const AlbumImageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
`;

export const AlbumImagePreview = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 4px;
`;

export const AlbumImageName = styled.div`
  font-size: 1.2rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DeleteImageButton = styled.button`
  padding: 6px 12px;
  background: #dc3545;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c82333;
  }
`;

export const NoImagesText = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 24px;
  color: #999;
  font-size: 1.4rem;
`;

// 앨범 목록 스타일
export const AlbumsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AlbumItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const AlbumThumbnail = styled.div`
  width: 160px;
  height: 120px;
  background: #1a1a2e;
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.4rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

export const AlbumInfo = styled.div`
  flex: 1;
`;

export const AlbumTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const AlbumMeta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 1.3rem;
  color: #666;
`;

export const AlbumActions = styled.div`
  display: flex;
  gap: 8px;
`;

// 공통 버튼 스타일
export const EditButton = styled.button`
  padding: 8px 16px;
  background: #ffffff;
  color: #1a1a2e;
  border: 1px solid #1a1a2e;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #1a1a2e;
    color: #ffffff;
  }
`;

export const DeleteButton = styled.button`
  padding: 8px 16px;
  background: #ffffff;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #dc3545;
    color: #ffffff;
  }
`;

// 다음세대 소식 관리 스타일
export const NewsList = styled.div`
  margin-bottom: 24px;
`;

export const NewsItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f8f9fa;
  }
`;

export const NewsInfo = styled.div`
  flex: 1;
`;

export const NewsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

export const NoticeBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #ffc107;
  color: #333;
  font-size: 12px;
  font-weight: 600;
  border-radius: 2px;
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

export const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666;
`;

export const NewsDepartment = styled.span`
  font-weight: 500;
  color: #007bff;
`;

export const NewsDate = styled.span``;

export const NewsViews = styled.span``;

export const NewsActions = styled.div`
  display: flex;
  gap: 8px;
`;

// 다음세대 소식 관리용 추가 스타일 (기존 스타일과 통합)
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

