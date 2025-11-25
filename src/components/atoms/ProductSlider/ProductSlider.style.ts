import styled from "styled-components";

export const MobileSliderBox = styled.div`
  position: relative;
  width: 100%;
`;

export const MobileSlide = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  z-index: 20;
  pointer-events: none;
`;

export const ControlButton = styled.button`
  pointer-events: auto;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;