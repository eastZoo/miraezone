import React from "react";
import * as S from "./Checkbox.style";

interface IProp extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

const Checkbox = ({ name, label, required, ...props }: IProp) => {
  return (
    <S.CheckBoxContainer>
      <S.CheckBoxInput type="checkbox" {...props} name={name} id={name} />
      {label && (
        <S.CheckBoxLabel htmlFor={name}>
          {label}
          {required && <span className="text-왔다-파랑 ml-1">*</span>}
        </S.CheckBoxLabel>
      )}
    </S.CheckBoxContainer>
  );
};

export default Checkbox;
