import styled from "styled-components";

export const ContentFormRow = styled.div<{ $hasBorder?: boolean }>`
    display: flex;
    
    border-bottom: ${(props) => (props.$hasBorder ? '1px solid #e0e0e0' : 'none')};

    &:last-child {
        border-bottom: none;
    }
`;