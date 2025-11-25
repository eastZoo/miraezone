import React from 'react';
import * as S from './InputButton.style.ts';

// <form> 태그의 기본 속성(예: onSubmit)을 받을 수 있도록 확장합니다.
interface InputButtonFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
}

const InputButtonForm: React.FC<InputButtonFormProps> = ({ children, className, ...props }) => {
    return (

        <S.Wrapper className={className} {...props}>
            {children}
        </S.Wrapper>
    );
};

export default InputButtonForm;