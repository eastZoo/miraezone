import styled, { css } from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const commonInputStyles = css<{
  size: "small" | "medium" | "large";
  fullWidth: boolean;
  error: boolean;
}>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "36px";
      case "medium":
        return "48px";
      case "large":
        return "56px";
      default:
        return "48px";
    }
  }};
  padding: 0
    ${({ size }) => {
      switch (size) {
        case "small":
          return "12px";
        case "medium":
          return "16px";
        case "large":
          return "20px";
        default:
          return "16px";
      }
    }};
  border: ${({ error }) => (error ? "1px solid #ef4444" : "1px solid #eee")};
  border-radius: ${({ size }) => (size === "small" ? "5px" : "10px")};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "14px";
      case "medium":
        return "16px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};
  color: #111;
  background-color: #fff;
  transition: all 0.2s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? "#ef4444" : "#a44945")};
    box-shadow: ${({ error }) =>
      error
        ? "0 0 0 3px rgba(239, 68, 68, 0.1)"
        : "0 0 0 3px rgba(164, 73, 69, 0.1)"};
  }

  &:hover:not(:focus) {
    border-color: ${({ error }) => (error ? "#ef4444" : "#9ca3af")};
  }

  &:disabled {
    background-color: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
    border-color: #e5e7eb;
  }
`;

export const StyledInput = styled.input<{
  size: "small" | "medium" | "large";
  fullWidth: boolean;
  error: boolean;
}>`
  ${commonInputStyles}

  &::placeholder {
    color: #999;
  }
`;

  /* ======== InputSelect ======== */
export const StyledSelect = styled.select<{
  size: "small" | "medium" | "large";
  fullWidth: boolean;
  error: boolean;
}>`
  ${commonInputStyles}
  
  cursor: pointer;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 32px;

  &::-ms-expand {
    display: none;
  }
`;

export const ChevronDown = styled(HiOutlineChevronDown)`
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #000;
  font-size: 20px;
`;

export const HelperText = styled.span<{ error: boolean }>`
  font-size: 1.2rem;
  margin-top: 4px;
  color: ${({ error }) => (error ? "#ef4444" : "#6b7280")};
`;
