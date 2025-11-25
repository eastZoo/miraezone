import React from 'react';
import * as S from './ButtonForm.style.ts';

interface ButtonFormProps {
    children: React.ReactNode;
    className?: string;
}

const ButtonForm: React.FC<ButtonFormProps> = ({ children, className }) => {
    return (
        <S.Wrapper className={className}>
            {children}
        </S.Wrapper>
    );
};

export default ButtonForm;