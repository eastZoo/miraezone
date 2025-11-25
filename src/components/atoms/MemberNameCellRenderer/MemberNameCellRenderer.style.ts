import styled from "styled-components";

export const CellContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NameLink = styled.span`
  color: #333;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: #a44945;
    text-decoration: underline;
  }
`;

export const ContextMenu = styled.div`
  z-index: 10000;
  background-color: #4a4a4a;
  border-radius: 4px;
  padding: 8px 0;
  min-width: 140px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  /* 화살표 */
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #4a4a4a;
  }
`;

export const MenuItem = styled.div`
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a5a5a;
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }
`;
