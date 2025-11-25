import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const QuickButtonContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;

  @media ${device.mobile} {
    right: 16px;
  }
`;

// 1단계 메뉴 컨테이너
export const FirstLevelMenu = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

// 2단계 메뉴 컨테이너
export const SecondLevelMenu = styled.div<{ isVisible: boolean }>`
  display: flex;
  // flex-direction: column;
  gap: 12px;
  align-items: flex-end;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

export const QuickButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  outline: none;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* 맨 위로 버튼 (빨간색) */
  &.scroll-top {
    background-color: #a44945;
    color: white;

    &:hover {
      background-color: #8a3d3a;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  /* 추가/닫기 버튼 (흰색) */
  &.add {
    background-color: white;
    color: #a44945;
    border: 1px solid #ddd;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background-color: #f5f5f5;
      border-color: #a44945;
    }

    svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  /* Android 버튼 (흰색) - 2단계 메뉴 */
  &.android {
    background-color: white;
    color: #a44945;
    border: 1px solid #a44945;
    transform: translateX(-15px); /* 2단계 메뉴는 왼쪽으로 오프셋 */

    &:hover {
      background-color: #f5f5f5;
      border-color: #8a3d3a;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
    }
  }

  /* iOS 버튼 (흰색) - 2단계 메뉴 */
  &.ios {
    background-color: white;
    color: #a44945;
    border: 1px solid #a44945;
    transform: translateX(-15px); /* 2단계 메뉴는 왼쪽으로 오프셋 */

    &:hover {
      background-color: #f5f5f5;
      border-color: #8a3d3a;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
    }
  }

  /* TALK 버튼 (노란색) */
  &.talk {
    background-color: #fee500;
    color: #3c1e1e;

    &:hover {
      background-color: #fdd835;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
    }
  }

  /* 다운받기 버튼 (흰색) */
  &.download {
    background-color: white;
    color: #a44945;

    &:hover {
      background-color: #f5f5f5;
      border-color: #8a3d3a;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-bottom: 2px;
    }
  }

  /* 다운받기 버튼 활성화 상태 */
  &.download.active {
    background-color: ${({ theme }) => theme.colors.black100};
    color: white;

    &:hover {
      background-color: #8a3d3a;
      border-color: #8a3d3a;
    }
  }

  /* 최근 본 상품 버튼 (흰색) */
  &.recent {
    background-color: white;
    color: #a44945;

    &:hover {
      background-color: #f5f5f5;
      border-color: #8a3d3a;
    }

    svg {
      width: 22px;
      height: 22px;
      margin-bottom: 2px;
    }
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  .plus-icon,
  .x-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .plus-icon {
    opacity: 1;
    transform: rotate(0deg);

    &.hidden {
      opacity: 0;
      transform: rotate(-45deg);
    }

    &.visible {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  .x-icon {
    opacity: 0;
    transform: rotate(0deg);

    &.hidden {
      opacity: 0;
      transform: rotate(0deg);
    }

    &.visible {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
`;

export const ButtonText = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 2px;
`;

export const KakaoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
