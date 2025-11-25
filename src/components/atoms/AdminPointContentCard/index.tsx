import React from 'react';
// 1. 같은 폴더의 style.ts 파일에서 ContentFormCard를 S.Wrapper로 가져옵니다.
import { ContentFormCard as Wrapper } from './ContentFormCard.style.ts';

// 2. 이 컴포넌트가 받을 props를 정의합니다. (div의 기본 속성 + children)
interface ContentFormCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ContentFormCard: React.FC<ContentFormCardProps> = ({
                                                             children,
                                                             className,
                                                             ...props
                                                         }) => {
    return (
        // 3. props를 Wrapper(styled.div)에 전달합니다.
        <Wrapper className={className} {...props}>
            {children}
        </Wrapper>
    );
};

export default ContentFormCard;