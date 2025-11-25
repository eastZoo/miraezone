import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media ${device.mobile} {
    background-color: #fff;
    align-items: flex-start;
  }
`;

export const ModalContainer = styled.div<{ $maxWidth?: string }>`
  background-color: white;
  border-radius: 8px;
  max-width: ${({ $maxWidth }) => $maxWidth || "500px"};
  width: 90%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media ${device.mobile} {
    max-width: 100%;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 35px;
  align-items: center;

  @media ${device.mobile} {
    padding: 16px 20px;
  }
`;

export const BackButton = styled.button`
  display: none;

  @media ${device.mobile} {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    position: absolute;
    left: 12px;

    svg {
      font-size: 24px;
      color: #333;
    }
  }
`;

export const ModalTitle = styled.div`
  flex: 1;

  font-family: Pretendard;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.48px;
  text-align: center;
  color: #111;

  @media ${device.mobile} {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;

  svg {
    width: 25px;
    height: auto;
  }

  @media ${device.mobile} {
    display: none;
  }
`;
export const ModalContent = styled.div`
  padding: 35px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;

  @media ${device.mobile} {
    padding: 20px 16px;
    min-height: calc(100vh - 135px);
  }

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ModalInputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 45px;

   @media ${device.mobile} {
    gap: 30px;
  }
`;

export const ModalInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.mobile} {
    gap: 12px;
  }
`;
export const ModalInputLabel = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.32px;
  text-align: left;
  color: #111;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 35px;

  border-top: 1px solid #eee;

  button {
    flex: 1;
  }

  @media ${device.mobile} {
    padding: 16px 20px;
    gap: 8px;
  }
`;

export const ModalAddressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;

  @media ${device.mobile} {
    gap: 16px;
    margin: 16px 0;
  }
`;

export const ModalAddressCard = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px;

  border: 1px solid ${(props) => (props.$isSelected ? props.theme.colors.primary : "#eee")};
  border-radius: 30px;

  @media ${device.mobile} {
    padding: 20px 16px;
    gap: 16px;
    border-radius: 12px;
  }
`;

export const AddressName = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  font-family: Pretendard;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: -0.36px;
  color: ${(props) => props.theme.colors.primary};
`;

export const AddressIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};

  > svg {
    color: white;
    width: 65%;
    height: 100%;
  }

  @media ${device.mobile} {
    width: 28px;
    height: 28px;
  }
`;

export const AddressDelete = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: -0.28px;
  text-align: right;
  color: #333;
  text-decoration: underline;
  cursor: pointer;
  margin-left: auto;

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const AddressInfo = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.32px;
  text-align: left;
  color: #111;
`;

export const AddressButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  gap: 10px;
  margin-left: auto;

  @media ${device.mobile} {
    width: 100%;
    gap: 8px;
  }
`;
