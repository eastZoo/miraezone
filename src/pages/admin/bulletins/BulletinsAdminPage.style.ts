import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";
import { device } from "@/styles/GlobalStyle";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)``;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const AddButton = styled(Common.PrimaryButton)``;

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

  @media ${device.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
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

  @media ${device.mobile} {
    width: 100%;
  }
`;

export const SearchButton = styled(Common.PrimaryButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.4rem;
`;

export const FormSection = styled(Common.FormSection)``;

export const FormRow = styled(Common.FormRow)``;

export const FormLabel = styled(Common.FormLabel)``;

export const FormInput = styled(Common.FormInput)``;

export const FormActions = styled(Common.FormActions)``;

export const SaveButton = styled(Common.PrimaryButton)``;

export const CancelButton = styled(Common.SecondaryButton)``;

export const FileSection = styled(Common.AdminCard)`
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const FileSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const FileSectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

export const UploadButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white100};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({ theme }) => `color-mix(in srgb, ${theme.colors.secondary} 90%, black)`};
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

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const FileItem = styled(Common.ListItem)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const FileName = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FileActions = styled(Common.ItemActions)``;

export const DeleteFileButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
`;

export const BulletinsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const BulletinCard = styled.div`
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.item};
    transform: translateY(-2px);
  }
`;

export const BulletinThumbnail = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbnailPlaceholder = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.8rem;
  font-weight: 600;
`;

export const BulletinInfo = styled.div`
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const BulletinDate = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const BulletinTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const BulletinActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: 0 ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(4)};
  flex-wrap: wrap;
`;

export const EditButton = styled(Common.SecondaryButton)`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
`;

export const DownloadButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white100};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({ theme }) => `color-mix(in srgb, ${theme.colors.secondary} 90%, black)`};
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

export const DeleteButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(1.5)} ${({ theme }) => theme.spacing(3)};
  font-size: 1.2rem;
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

