import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)``;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const AddButton = styled(Common.PrimaryButton)``;

export const FormSection = styled(Common.FormSection)``;

export const FormRow = styled(Common.FormRow)``;

export const FormLabel = styled(Common.FormLabel)``;

export const FormInput = styled(Common.FormInput)``;

export const TextArea = styled(Common.FormTextArea)``;

export const SelectBox = styled(Common.FormSelect)``;

export const FormActions = styled(Common.FormActions)``;

export const SaveButton = styled(Common.PrimaryButton)``;

export const CancelButton = styled(Common.SecondaryButton)``;

export const ImageUploadArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const PreviewImage = styled.img`
  max-width: 500px;
  max-height: 300px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const PreviewPlaceholder = styled.div`
  width: 500px;
  height: 300px;
  background: ${({ theme }) => theme.colors.gray100};
  border: 2px dashed ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.4rem;
`;

export const UploadButton = styled(Common.PrimaryButton)`
  width: fit-content;
`;

export const ImageUploadSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const ImageUploadSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const ImageUploadSectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const AlbumImagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const AlbumImageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.field};
    transform: translateY(-2px);
  }
`;

export const AlbumImagePreview = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export const AlbumImageName = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.muted};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DeleteImageButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
`;

export const NoImagesText = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.4rem;
`;

export const AlbumsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const AlbumItem = styled(Common.ListItem)`
  align-items: center;
`;

export const AlbumThumbnail = styled.div`
  width: 160px;
  height: 120px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
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
  color: ${({ theme }) => theme.colors.white100};
  font-size: 1.4rem;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`};
`;

export const AlbumInfo = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing(5)};
`;

export const AlbumTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const AlbumMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const AlbumActions = styled(Common.ItemActions)``;

export const EditButton = styled(Common.SecondaryButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
`;

export const DeleteButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
`;

export const NewsList = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const NewsItem = styled(Common.ListItem)`
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

export const NewsInfo = styled.div`
  flex: 1;
`;

export const NewsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const NoticeBadge = styled(Common.Badge).attrs({ $variant: "secondary" as const })`
  background: #ffc107;
  color: #333;
`;

export const NewBadge = styled(Common.Badge).attrs({ $variant: "danger" as const })``;

export const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const NewsDepartment = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NewsDate = styled.span``;

export const NewsViews = styled.span``;

export const NewsActions = styled(Common.ItemActions)``;

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

