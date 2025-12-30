import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)``;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const CreateButton = styled(Common.PrimaryButton)``;

export const FormSection = styled(Common.FormSection)``;

export const FormTitle = styled(Common.FormTitle)``;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const FormRow = styled(Common.FormRow)``;

export const FormGroup = styled(Common.FormRow)``;

export const Label = styled(Common.FormLabel)``;

export const Input = styled(Common.FormInput)``;

export const TextArea = styled(Common.FormTextArea)``;

export const FormActions = styled(Common.FormActions)``;

export const SaveButton = styled(Common.PrimaryButton)``;

export const CancelButton = styled(Common.SecondaryButton)``;


export const LoadingText = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(10)};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const EmptyText = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(10)};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.muted};
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
  font-size: 1.2rem;
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

export const SelectButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.white100)};
  color: ${({ $active, theme }) => ($active ? theme.colors.white100 : theme.colors.primary)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ $active, theme }) => ($active ? `color-mix(in srgb, ${theme.colors.primary} 90%, black)` : `${theme.colors.primary}14`)};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ImagesSection = styled(Common.AdminSection)``;

export const ImageUploadArea = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const ImageUploadButton = styled(Common.PrimaryButton)``;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.field};
    transform: translateY(-2px);
  }
`;

export const ImageThumbnail = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  background: ${({ theme }) => theme.colors.gray100};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ImageInfo = styled.div`
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.white100};
`;

export const ImageFileName = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.muted};
  word-break: break-all;
  line-height: 1.4;
`;

export const ImageDeleteButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
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

export const UploadButton = styled(Common.PrimaryButton)`
  width: fit-content;
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

