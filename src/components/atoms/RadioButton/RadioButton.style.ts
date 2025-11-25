import styled from "styled-components";

export const RadioButtonContainer = styled.div`
  display: flex;
  gap: 45px;

  align-items: center;
`;
export const RadioButtonLabel = styled.label`
  display: flex;
  gap: 20px;

  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.32px;
  text-align: left;
  color: #333;
`;
export const RadioButtonInput = styled.input`
  width: 25px;
  height: 25px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid #ddd;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:checked {
    border: 2px solid #a44945;
    background-color: #fff;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: #a44945;
  }
`;
