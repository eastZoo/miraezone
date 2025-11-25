import * as S from "../Input.style";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
}

const InputSelect: React.FC<SelectProps> = ({
  size = "medium",
  fullWidth = false,
  error = false,
  helperText,
  options,
  className,
  ...props
}) => {
  return (
    <S.InputWrapper>
      <S.StyledSelect
        size={size}
        fullWidth={fullWidth}
        error={error}
        className={className}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.StyledSelect>
      <S.ChevronDown/>
      {helperText && <S.HelperText error={error}>{helperText}</S.HelperText>}
    </S.InputWrapper>
  );
};

export default InputSelect;