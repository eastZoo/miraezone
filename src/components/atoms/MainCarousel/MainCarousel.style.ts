import styled from "styled-components";
import { device } from "@/styles/GlobalStyle";

export const CarouselContainer = styled.div`
  width: 100vw;
  height: auto;
  position: relative;

  margin-top: -150px; /* 헤더 패딩을 상쇄하여 헤더 바로 아래에 위치 */
  left: 50%;
  transform: translateX(-50%);
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px; /* 최대 너비 제한 */
  margin: 20px auto; /* 중앙 정렬 */

  .swiper-slide {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper {
    overflow: visible; /* 슬라이드가 컨테이너 밖으로 나갈 수 있도록 */
  }

  .swiper-wrapper {
    overflow: visible; /* 래퍼도 오버플로우 허용 */
  }
`;

export const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  color: white;
  height: 100%;
`;

export const DeliverySection = styled.div`
  flex: 1;
  text-align: center;
`;

export const DeliveryTruck = styled.div`
  width: 200px;
  height: 120px;
  background: white;
  border-radius: 20px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: #a44945;
`;

export const DeliveryText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const DeliverySubtext = styled.div`
  font-size: 1.4rem;
  opacity: 0.9;
`;

export const PromoSection = styled.div`
  flex: 1;
  text-align: center;
`;

export const PromoTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const PromoSubtitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const BCCard = styled.div`
  width: 200px;
  height: 120px;
  background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
  border-radius: 15px;
  margin: 0 auto 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.6rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
`;

export const GoldCoins = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  background: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
`;

export const CustomerSection = styled.div`
  flex: 1;
  text-align: center;
`;

export const CustomerText = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const CustomerSubtext = styled.div`
  font-size: 1.4rem;
  opacity: 0.9;
`;

export const CarouselControls = styled.div`
  position: absolute;
  width: 1000px;
  margin: 0 auto;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 15px; /* 이미지 양끝에 더 가깝게 */
  z-index: 10;
  pointer-events: none; /* 클릭 이벤트가 슬라이드로 전달되도록 */
`;

export const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 28px;
  border: solid 1px #eee;
  background-color: #fff;

  // background: rgba(255, 255, 255, 0.3);
  // border: none;
  // border-radius: 50%;

  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  transition: background 0.3s ease;
  pointer-events: auto; /* 버튼만 클릭 가능하도록 */

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const SlideIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  background: rgba(0, 0, 0, 0.3);
  color: #ddd;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 1.4rem;
  z-index: 10;
  margin-right: 20px; /* 중앙에서 약간 오른쪽으로 */

  @media ${device.mobile} {
    margin-right: 0;
    background: rgba(0, 0, 0, 0.3);
    font-size: 1.2rem;
  }
`;

// 슬라이드별 배경 스타일
export const SlideBackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 15px; /* 이미지 모서리 둥글게 */

  img {
    border-radius: 15px; /* 이미지 자체에도 border-radius 적용 */
  }
`;
