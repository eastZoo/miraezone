import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";
import { device } from "@/styles/GlobalStyle";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)``;

export const SectionHeader = styled(Common.SectionHeader)``;

export const SectionTitle = styled(Common.SectionTitle)``;

export const AddButton = styled(Common.PrimaryButton)``;

export const FormSection = styled(Common.FormSection)``;

export const FormRow = styled(Common.FormRow)``;

export const FormLabel = styled(Common.FormLabel)``;

export const FormInput = styled(Common.FormInput)``;

export const SelectBox = styled(Common.FormSelect)``;

export const HelpText = styled(Common.HelpText)``;

export const FormActions = styled(Common.FormActions)``;

export const SaveButton = styled(Common.PrimaryButton)``;

export const CancelButton = styled(Common.SecondaryButton)``;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ScheduleItem = styled(Common.ListItem)``;

export const ScheduleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  flex: 1;
  flex-wrap: wrap;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const ScheduleType = styled(Common.Badge).attrs({ $variant: "primary" as const })``;

export const ScheduleName = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  min-width: 200px;
`;

export const ScheduleTime = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
  min-width: 150px;
`;

export const SchedulePlace = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const ScheduleActions = styled(Common.ItemActions)``;

export const VideoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const VideoItem = styled(Common.ListItem)`
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const VideoThumbnail = styled.div`
  width: 160px;
  height: 90px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.mobile} {
    width: 100px;
    height: 56px;
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

export const VideoInfo = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing(5)};
`;

export const VideoTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const VideoMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const VideoActions = styled(Common.ItemActions)``;

export const EditButton = styled(Common.SecondaryButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
`;

export const DeleteButton = styled(Common.DangerButton)`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
`;

