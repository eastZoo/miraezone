import React from 'react';
// 1. style.ts에서 ContentFormRow를 S.Wrapper로 가져옵니다.
import { ContentFormRow as Wrapper } from './ContentFormRow.style.ts';

// 2. props 정의: hasBorder (boolean)를 추가합니다.
interface ContentFormRowProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hasBorder?: boolean;
}

const ContentFormRow: React.FC<ContentFormRowProps> = ({
                                                           children,
                                                           className,
                                                           hasBorder = false, // 3. hasBorder의 기본값을 false로 설정
                                                           ...props
                                                       }) => {
    return (
        // 4. hasBorder prop을 '$'를 붙여 styled-component에 전달합니다.
        <Wrapper
            className={className}
            $hasBorder={hasBorder}
            {...props}
        >
            {children}
        </Wrapper>
    );
};

export default ContentFormRow;