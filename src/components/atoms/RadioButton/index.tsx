import React from "react";
import * as S from "./RadioButton.style";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonProps {
  options: RadioOption[];
  name: string;
  value?: string;
  onChange?: (name: string, value: RadioOption) => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ options, name, value, onChange, disabled = false }) => {
  const handleChange = (optionValue: RadioOption) => {
    if (!disabled && onChange) {
      onChange(name, optionValue);
    }
  };

  return (
    <S.RadioButtonContainer>
      {options.map((option) => (
        <S.RadioButtonLabel key={option.value}>
          <S.RadioButtonInput
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => handleChange(option)}
            disabled={disabled}
          />
          {option.label}
        </S.RadioButtonLabel>
      ))}
    </S.RadioButtonContainer>
  );
};

export default RadioButton;
