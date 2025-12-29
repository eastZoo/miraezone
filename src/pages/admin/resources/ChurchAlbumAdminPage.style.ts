import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const CreateButton = styled.button`
  padding: 12px 24px;
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

export const FormSection = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const FormTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
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

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
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
    background: #f8f9fa;
    border-color: #1a1a2e;
    color: #1a1a2e;
  }
`;

export const AlbumsSection = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
`;

export const LoadingText = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.6rem;
  color: #666;
`;

export const EmptyText = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.6rem;
  color: #999;
`;

export const AlbumsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AlbumItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
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
  font-size: 1.2rem;
  color: #666;
`;

export const AlbumDate = styled.span``;

export const AlbumViews = styled.span``;

export const AlbumActions = styled.div`
  display: flex;
  gap: 8px;
`;

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

export const SelectButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  background: ${({ $active }) => ($active ? "#1a1a2e" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#1a1a2e")};
  border: 1px solid #1a1a2e;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $active }) => ($active ? "#2a2a3e" : "#f8f9fa")};
  }
`;

export const ImagesSection = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImageUploadArea = styled.div`
  margin-bottom: 24px;
`;

export const ImageUploadButton = styled.button`
  padding: 12px 24px;
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

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
`;

export const ImageThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #f8f9fa;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageInfo = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageFileName = styled.div`
  font-size: 1.2rem;
  color: #666;
  word-break: break-all;
`;

export const ImageDeleteButton = styled.button`
  padding: 6px 12px;
  background: #dc3545;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c82333;
  }
`;

