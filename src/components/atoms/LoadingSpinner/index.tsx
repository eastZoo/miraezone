import React from "react";
import * as S from "./LoadingSpinner.style";

export interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  text = "로딩 중...",
  fullScreen = false,
}) => {
  const spinnerContent = (
    <S.SpinnerContainer $size={size}>
      <S.Spinner $size={size} />
      {text && <S.LoadingText $size={size}>{text}</S.LoadingText>}
    </S.SpinnerContainer>
  );

  if (fullScreen) {
    return <S.FullScreenSpinner>{spinnerContent}</S.FullScreenSpinner>;
  }

  return spinnerContent;
};

export default LoadingSpinner;

