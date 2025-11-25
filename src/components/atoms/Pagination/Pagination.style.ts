import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  /* border-top: 1px solid #eee; */
`;

export const PageSizeSelector = styled.div`
  select {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    background: white;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
`;

export const PaginationInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin: 0 20px;
`;

export const PaginationControls = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  border: none;
  background: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.white100)};
  color: ${(props) => (props.active ? props.theme.colors.white100 : "#333")};
  cursor: pointer;
  border-radius: 50%;
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 4.13;
  letter-spacing: -0.32px;
  text-align: left;

  &:hover:not(:disabled) {
    background: ${(props) => (props.active ? props.theme.colors.primary : "#f8f9fa")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: #f8f9fa;
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
