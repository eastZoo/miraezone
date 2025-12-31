import styled from "styled-components";
import * as Common from "@/styles/adminCommonStyles";
import { device } from "@/styles/GlobalStyle";

export const Container = styled(Common.AdminContainer)``;

export const Section = styled(Common.AdminSection)``;

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

export const SearchArea = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  width: 100%;

  @media ${device.mobile} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const SearchInput = styled(Common.FormInput)`
  flex: 1;
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

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const MemberItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.field};
  }

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const MemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const MemberName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const MemberEmail = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const MemberPhone = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const MemberMeta = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.muted};

  @media ${device.mobile} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const MemberDate = styled.span``;

export const MemberActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};

  @media ${device.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;

export const ApproveButton = styled(Common.SecondaryButton)<{
  $isApproved: boolean;
}>`
  ${({ $isApproved }) =>
    $isApproved &&
    `
    background: #f0f0f0;
    color: #666;
    border-color: #ddd;
  `}
`;

export const ToggleButton = styled(Common.SecondaryButton)<{
  $isActive: boolean;
}>`
  ${({ $isActive }) =>
    !$isActive &&
    `
    background: #fee;
    color: #c33;
    border-color: #c33;
  `}
`;

export const MasterBadge = styled.span`
  padding: 4px 8px;
  background: #ffd700;
  color: #333;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ApprovedBadge = styled.span`
  padding: 4px 8px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const PendingBadge = styled.span`
  padding: 4px 8px;
  background: #fff3e0;
  color: #e65100;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const InactiveBadge = styled.span`
  padding: 4px 8px;
  background: #ffebee;
  color: #c62828;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.6rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(6)};

  @media ${device.mobile} {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const PaginationButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.gray100};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaginationNumber = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.white100};
  color: ${({ $active, theme }) => ($active ? "#fff" : theme.colors.text)};
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.gray100)};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.gray100};
  }
`;

