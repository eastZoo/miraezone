import styled from "styled-components";

export const ControllerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 16px;
`;

export const CheckAll = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 14px;
    height: 14px;
    accent-color: #a44945;
    cursor: pointer;
  }
  span {
    font-size: 1.4rem;
    color: #666;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 6px;
`;

// export const OutlineButton = styled.button`
//   min-width: 92px;
//   height: 36px;
//   padding: 0 12px;
//   border-radius: 10px;
//   border: 1px solid #ddd;
//   background: #fff;
//   color: #333;
//   font-size: 1.4rem;
//   cursor: pointer;
// `;

// export const PrimaryButton = styled(OutlineButton)`
//   background: #a44945;
//   border-color: #a44945;
//   color: #fff;
// `;