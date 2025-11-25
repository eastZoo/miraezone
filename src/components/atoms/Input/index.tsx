import React from "react";
import * as S from "./Input.style";

export interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  refs?: React.RefObject<HTMLInputElement | null>;
}

const Input: React.FC<CustomInputProps> = ({ size = "medium", fullWidth = false, error = false, helperText, className, refs, ...props }) => {
  return (
    <S.InputWrapper>
      <S.StyledInput ref={refs} size={size} fullWidth={fullWidth} error={error} className={className} {...props} />
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.InputWrapper>
  );
};

export default Input;
