import React from "react";
import * as S from "./Button.style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon" | "admin" | "danger";
  size?: "xs" | "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  width?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  fullWidth = false,
  width,
  loading = false,
  children,
  className,
  disabled,
  icon,
  ...props
}) => {
  return (
    <S.StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      width={width}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading && <S.Spinner />}
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </S.StyledButton>
  );
};

export default Button;
