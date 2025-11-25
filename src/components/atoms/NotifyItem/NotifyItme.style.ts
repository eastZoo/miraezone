import styled from "styled-components";

export const NotifyItem = styled.div<{ isRead?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  color: ${({ isRead }) => (isRead ? "#999" : "#111")};
`;

export const NotifyText = styled.span`
  flex: 1;
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const StatusIcon = styled.span<{ isRead?: boolean }>`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({ isRead }) => (isRead ? "transparent" : "#333")};
  margin-left: 8px;
  color: #fff;

  &::before {
    position: absolute;
    content: "!";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;;
  }
`;