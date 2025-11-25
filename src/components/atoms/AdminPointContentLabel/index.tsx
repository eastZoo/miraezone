import React from 'react';
// 1. style.ts에서 ContentFormLabel을 S.Wrapper로 가져옵니다.
import { ContentFormLabel as Wrapper } from './ContentFormLabel.style.ts';

// 2. props 정의: <label>의 기본 속성(LabelHTMLAttributes)을 확장합니다.
interface ContentFormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}

const ContentFormLabel: React.FC<ContentFormLabelProps> = ({
                                                               children,
                                                               className,
                                                               ...props
                                                           }) => {
    return (
        // 3. htmlFor, className 등의 props를 Wrapper(styled.label)에 전달합니다.
        <Wrapper className={className} {...props}>
            {children}
        </Wrapper>
    );
};

export default ContentFormLabel;