import { Container, device } from "@/styles/GlobalStyle";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  @media ${device.mobile} {
    overflow-x: hidden;
  }
`;

export const ContainerWrapper = styled(Container)`
  width: 100%;
  position: relative;
`;

export const QuickButtonBox = styled.div`
  /* QuickButton 컴포넌트에서 직접 스타일링하므로 여기서는 제거 */
`;

export const QuickMenuLeft = styled.div`
  width: 80px;
  margin-right: 520px;
  position: absolute;
  top: 20px;
  right: 50%;
  z-index: 997;
`;

export const QuickMenuRight = styled.div`
  width: 80px;
  margin-left: 520px;
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 997;
`;
