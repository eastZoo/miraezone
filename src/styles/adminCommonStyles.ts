import styled from "styled-components";

/* ========== 공통 컨테이너 ========== */
export const AdminContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(8)} ${({ theme }) => theme.spacing(10)};
  max-width: 1400px;
  margin: 0 auto;
`;

/* ========== 공통 카드/섹션 ========== */
export const AdminCard = styled.div`
  background: ${({ theme }) => theme.colors.white100};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing(6)};
  box-shadow: ${({ theme }) => theme.shadows.field};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.item};
  }
`;

export const AdminSection = styled.div`
  background: ${({ theme }) => theme.colors.white100};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing(6)};
  box-shadow: ${({ theme }) => theme.shadows.field};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray100};
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: -0.02em;
`;

/* ========== 공통 버튼 ========== */
export const PrimaryButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white100};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  &:hover:not(:disabled) {
    background: ${({ theme }) => `color-mix(in srgb, ${theme.colors.primary} 90%, black)`};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.item};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.gray100};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const SecondaryButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({ theme }) => `${theme.colors.primary}14`};
    border-color: ${({ theme }) => `color-mix(in srgb, ${theme.colors.primary} 90%, black)`};
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

export const DangerButton = styled.button`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(6)};
  background: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.red};
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white100};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.item};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GhostButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(4)};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

/* ========== 공통 폼 요소 ========== */
export const FormSection = styled.div`
  background: ${({ theme }) => theme.colors.white100};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  box-shadow: ${({ theme }) => theme.shadows.field};
`;

export const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  letter-spacing: -0.01em;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  width: 100%;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}1A`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const FormTextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  width: 100%;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}1A`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const FormSelect = styled.select`
  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.4rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.white100};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}1A`};
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding-top: ${({ theme }) => theme.spacing(6)};
  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
`;

export const HelpText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 0;
  line-height: 1.5;
`;

/* ========== 공통 리스트 아이템 ========== */
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.colors.white100};
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s ease;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.field};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

/* ========== 공통 헤더 ========== */
export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray100};
`;

export const PageTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

/* ========== 공통 배지 ========== */
export const Badge = styled.span<{ $variant?: "primary" | "secondary" | "success" | "danger" }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(3)};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 1.2rem;
  font-weight: 600;
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "primary":
        return `
          background: ${theme.colors.primary}1A;
          color: ${theme.colors.primary};
        `;
      case "secondary":
        return `
          background: ${theme.colors.muted}1A;
          color: ${theme.colors.muted};
        `;
      case "success":
        return `
          background: ${theme.colors.secondary}1A;
          color: ${theme.colors.secondary};
        `;
      case "danger":
        return `
          background: ${theme.colors.red}1A;
          color: ${theme.colors.red};
        `;
      default:
        return `
          background: ${theme.colors.gray100};
          color: ${theme.colors.text};
        `;
    }
  }}
`;

