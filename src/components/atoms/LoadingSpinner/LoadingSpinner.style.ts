import styled, { keyframes } from "styled-components";
import { device } from "@/styles/GlobalStyle";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div<{ $size?: "small" | "medium" | "large" }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "20px";
      case "large":
        return "60px";
      default:
        return "40px";
    }
  }};
  gap: 16px;

  @media ${device.mobile} {
    padding: ${({ $size }) => {
      switch ($size) {
        case "small":
          return "16px";
        case "large":
          return "40px";
        default:
          return "32px";
      }
    }};
    gap: 12px;
  }
`;

export const Spinner = styled.div<{ $size?: "small" | "medium" | "large" }>`
  width: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "24px";
      case "large":
        return "64px";
      default:
        return "40px";
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "24px";
      case "large":
        return "64px";
      default:
        return "40px";
    }
  }};
  border: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "3px solid #f3f4f6";
      case "large":
        return "6px solid #f3f4f6";
      default:
        return "4px solid #f3f4f6";
    }
  }};
  border-top: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "3px solid #1a1a2e";
      case "large":
        return "6px solid #1a1a2e";
      default:
        return "4px solid #1a1a2e";
    }
  }};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingText = styled.div<{ $size?: "small" | "medium" | "large" }>`
  font-size: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "1.4rem";
      case "large":
        return "1.8rem";
      default:
        return "1.6rem";
    }
  }};
  color: #666;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: ${({ $size }) => {
      switch ($size) {
        case "small":
          return "1.3rem";
        case "large":
          return "1.6rem";
        default:
          return "1.4rem";
      }
    }};
  }
`;

export const FullScreenSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

