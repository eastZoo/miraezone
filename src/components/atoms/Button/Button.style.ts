import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button<{
  variant: "primary" | "secondary" | "outline" | "ghost" | "icon" | "admin" | "danger";
  size: "xs" | "small" | "medium" | "large";
  fullWidth: boolean;
  width?: string | number; 
}>`
  width: ${({ fullWidth, width }) => {
    if (width) return typeof width === 'number' ? `${width}px` : width;
    return fullWidth ? "100%" : "auto";
  }};
  height: ${({ size }) => {
    switch (size) {
      case "xs":
        return "28px";
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
        case "xs":
          return "8px";
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
  border-radius: ${({ size }) => {
    switch (size) {
      case "xs":
        return "5px";
      case "small":
        return "5px";
      case "medium":
        return "10px";
      case "large":
        return "10px";
      default:
        return "10px";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "xs":
        return "1.2rem";
      case "small":
        return "1.4rem";
      case "medium":
        return "1.6rem";
      case "large":
        return "1.8rem";
      default:
        return "1.6rem";
    }
  }};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  outline: none;
  white-space: nowrap;

  /* Primary variant */
  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color: #a44945;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #8a3d3a;
    }
    
    &:active:not(:disabled) {
      background-color: #7a3532;
    }
  `}

  /* Secondary variant */
  ${({ variant }) =>
    variant === "secondary" &&
    `
    background-color: #999;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #4b5563;
    }
    
    &:active:not(:disabled) {
      background-color: #374151;
    }
  `}

  /* Outline variant */
  ${({ variant }) =>
    variant === "outline" &&
    `
    background-color: white;
    color: #666;
    border: 1px solid #eee;
    
    &:hover:not(:disabled) {
      background-color: #f9fafb;
      border-color: #a44945;
      color: #a44945;
    }
    
    &:active:not(:disabled) {
      background-color: #f3f4f6;
    }
  `}

  /* Ghost variant */
  ${({ variant }) =>
    variant === "ghost" &&
    `
    background-color: transparent;
    color: #6b7280;
    
    &:hover:not(:disabled) {
      background-color: #f3f4f6;
      color: #a44945;
    }
    
    &:active:not(:disabled) {
      background-color: #e5e7eb;
    }
  `}

   /* Icon variant */
  ${({ variant }) =>
    variant === "icon" &&
    `
      display: flex;
      color: #111;
      border: none;
      background: none;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:active {
        background: #eee;
      }
  `}

  /* Admin variant */
  ${({ variant }) =>
    variant === "admin" &&
    `
    background-color: #4a5568;
    color: white;
    
    &:hover:not(:disabled) {
      background-color: #2d3748;
    }
    
    &:active:not(:disabled) {
      background-color: #1a202c;
    }
  `}

  /* Danger variant */
  ${({ variant }) =>
    variant === "danger" &&
    `
    background-color: white;
    color: #ef4444;
    border: 1px solid #ef4444;
    
    &:hover:not(:disabled) {
      background-color: #fef2f2;
      border-color: #dc2626;
      color: #dc2626;
    }
    
    &:active:not(:disabled) {
      background-color: #fee2e2;
    }
  `}

  &:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
    border-color: #e5e7eb;
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(164, 73, 69, 0.1);
  }
`;

export const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
