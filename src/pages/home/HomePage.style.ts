import styled, { keyframes } from "styled-components";
import { device } from "@/styles/GlobalStyle";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BackgroundCanvas = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: calc(100vh + 900px);
  overflow: hidden;
  pointer-events: none;
  z-index: 0;

  @media ${device.mobile} {
    height: calc(100vh + 700px);
  }
`;

export const HomeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 75vh;
  min-height: 520px;
  overflow: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  padding: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media ${device.mobile} {
    height: 70vh;
    min-height: 480px;
    padding-bottom: 70px;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
  }
`;

export const ContentSection = styled.div`
  position: relative;
  width: 100%;
  background: transparent;
  padding-bottom: 30px;
  z-index: 1;
`;

export const SectionBackground = styled.div<{
  $variant?: "weekly" | "content";
}>`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: #ffffff;
  position: relative;
  z-index: ${({ $variant }) => ($variant === "weekly" ? 1 : 0)};
  padding: ${({ $variant }) =>
    $variant === "weekly" ? "220px 0 160px" : "120px 0 280px"};
  margin-top: ${({ $variant }) =>
    $variant === "weekly" ? "-220px" : "-120px"};
  box-shadow: ${({ $variant }) =>
    $variant === "weekly"
      ? "0 -20px 60px rgba(6, 12, 24, 0.18)"
      : "0 30px 80px rgba(6, 12, 24, 0.12)"};
`;

export const SectionInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;

  @media ${device.mobile} {
    padding: 0 20px;
  }
`;

export const SectionDivider = styled.div<{ $flip?: boolean }>`
  width: 100vw;
  height: 150px;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  transform: ${({ $flip }) => ($flip ? "scaleY(-1)" : "none")};
  position: relative;
  z-index: 1;
  margin-top: -50px;
  pointer-events: none;

  @media ${device.mobile} {
    height: 110px;
    margin-top: -40px;
  }
`;

export const SectionSurface = styled.div<{ $hasBackground?: boolean }>`
  position: relative;
  z-index: 2;
  padding: 0 10px;
  margin: ${({ $hasBackground }) =>
    $hasBackground ? "-80px auto 50px" : "50px auto"};
  width: ${({ $hasBackground }) => ($hasBackground ? "100vw" : "100%")};
  max-width: ${({ $hasBackground }) => ($hasBackground ? "none" : "1280px")};
  margin-left: ${({ $hasBackground }) =>
    $hasBackground ? "calc(-50vw + 50%)" : "auto"};
  margin-right: ${({ $hasBackground }) =>
    $hasBackground ? "calc(-50vw + 50%)" : "auto"};
  background: ${({ $hasBackground }) =>
    $hasBackground ? "#ffffff" : "transparent"};
  padding: ${({ $hasBackground }) => ($hasBackground ? "40px 20px" : "0 20px")};

  @media ${device.mobile} {
    padding: ${({ $hasBackground }) =>
      $hasBackground ? "30px 16px" : "0 16px"};
    margin: ${({ $hasBackground }) =>
      $hasBackground ? "-40px auto 40px" : "40px auto"};
  }
`;

export const BackgroundSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const BackgroundImage = styled.img<{ $isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 2s ease-in-out;
  animation: ${(props) => props.$isActive && fadeIn} 2s ease-in-out;
  filter: brightness(0.7) contrast(1.1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

export const OverlayText = styled.div<{ $opacity: number }>`
  position: absolute;
  top: calc(45% + 10px);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: white;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 20px 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacity};
  transition: opacity 0.4s ease-out;
  pointer-events: ${(props) => (props.$opacity > 0 ? "auto" : "none")};

  @media ${device.mobile} {
    padding: 20px 15px;
    top: calc(50% + 10px);
  }
`;

const letterFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) rotateX(90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
`;

const sparkleAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3);
  }
  50% {
    opacity: 0.6;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6);
  }
`;

const sparkleAnimation2 = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3);
  }
  50% {
    opacity: 0.7;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3),
      0 0 25px rgba(255, 255, 255, 0.7), 0 0 35px rgba(255, 255, 255, 0.5);
  }
`;

const sparkleAnimation3 = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3);
  }
  50% {
    opacity: 0.65;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 0, 0, 0.3),
      0 0 35px rgba(255, 255, 255, 0.9), 0 0 45px rgba(255, 255, 255, 0.7);
  }
`;

export const MainTitle = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 25px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3px;

  @media ${device.mobile} {
    font-size: 3.2rem;
    margin-bottom: 18px;
    gap: 2px;
    line-height: 1.2;
  }
`;

export const SubTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3px;

  @media ${device.mobile} {
    font-size: 2.6rem;
    gap: 2px;
  }
`;

export const LetterSpan = styled.span<{ $delay: number; $index?: number }>`
  display: inline-block;
  opacity: 0;
  transform: translateY(30px) rotateX(90deg);
  animation: ${letterFadeIn} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards,
    ${(props) => {
        const animIndex = (props.$index || 0) % 3;
        if (animIndex === 0) return sparkleAnimation;
        if (animIndex === 1) return sparkleAnimation2;
        return sparkleAnimation3;
      }}
      2s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay}s,
    ${(props) => props.$delay + 0.8 + (props.$index || 0) * 0.15}s;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    text-shadow: 0 5px 20px rgba(255, 255, 255, 0.6);
    animation-play-state: paused;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #f8f8f8;
  min-height: 100vh;
`;

export const Spacer = styled.div<{ $isScrolled: boolean }>`
  height: 100vh;
  transition: height 0.3s ease-out;
`;

export const SermonSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  background: white;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${device.mobile} {
    padding: 40px 16px;
  }
`;

export const SermonHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const SermonTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;

  @media ${device.mobile} {
    font-size: 2.5rem;
  }
`;

export const SermonSubtitle = styled.p`
  font-size: 1.6rem;
  color: #666;
  margin: 0;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const SermonDivider = styled.hr`
  border: none;
  border-top: 2px solid #4a90e2;
  margin: 30px 0 50px;
  max-width: 1200px;
`;

export const SermonContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 40px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const SermonImageWrapper = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SermonImage = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  overflow: hidden;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='%23ffffff' stroke-width='1' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E");
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    height: 300px;
  }
`;

export const SermonImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  color: white;
`;

export const SermonLabel = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 0.1em;

  @media ${device.mobile} {
    font-size: 2.5rem;
  }
`;

export const SermonLabelSub = styled.div`
  font-size: 1.8rem;
  margin-bottom: 30px;
  opacity: 0.9;

  @media ${device.mobile} {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;

export const SermonVerse = styled.div`
  font-size: 1.6rem;
  line-height: 1.6;
  opacity: 0.95;
  max-width: 90%;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`;

export const SermonDetails = styled.div`
  background: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${device.mobile} {
    padding: 30px 20px;
  }
`;

export const SermonCategory = styled.div`
  font-size: 1.6rem;
  color: #4a90e2;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const SermonDetailTitle = styled.h3`
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  line-height: 1.3;

  @media ${device.mobile} {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`;

export const SermonDetailText = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.6;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`;

export const SermonButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 30px;
  }
`;

export const SermonButton = styled.button`
  flex: 1;
  padding: 15px 25px;
  border: 2px solid #4a90e2;
  background: transparent;
  color: #333;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #4a90e2;
    color: white;
  }

  @media ${device.mobile} {
    padding: 12px 20px;
    font-size: 1.3rem;
  }
`;

export const WeeklyMessageSection = styled.div`
  display: flex;
  width: calc(100% - 40px);
  max-width: 1240px;
  margin: -120px auto 50px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25), 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
    margin: 20px 16px 30px;
    border-radius: 12px;
  }
`;

export const WeeklyMessageImage = styled.div`
  flex: 0 0 45%;
  position: relative;
  min-height: 300px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media ${device.mobile} {
    min-height: 200px;
    flex: 0 0 auto;
  }
`;

export const BibleImage = styled.div`
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f5f5dc'/%3E%3Cpath d='M 200 50 L 200 250' stroke='%23333' stroke-width='2'/%3E%3Ctext x='200' y='150' font-family='serif' font-size='24' fill='%23333' text-anchor='middle'%3E성경%3C/text%3E%3C/svg%3E")
    center/cover no-repeat;
  opacity: 0.9;
  filter: brightness(0.95);

  @media ${device.mobile} {
    background-size: contain;
  }
`;

export const WeeklyMessageContent = styled.div`
  flex: 1;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  @media ${device.mobile} {
    padding: 30px 20px;
  }
`;

export const WeeklyMessageDate = styled.div`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-weight: 400;

  @media ${device.mobile} {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

export const WeeklyMessageTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 25px;
  color: white;

  @media ${device.mobile} {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

export const WeeklyMessageInfo = styled.div`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 35px;
  line-height: 1.5;

  @media ${device.mobile} {
    font-size: 1.4rem;
    margin-bottom: 25px;
  }
`;

export const WeeklyMessageButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
  }

  @media ${device.mobile} {
    padding: 12px 24px;
    font-size: 1.4rem;
    width: 100%;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const QuickNavSection = styled.section`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin: 40px auto;
    padding: 0 16px;
    gap: 20px;
  }
`;

export const QuickNavCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-child(1) {
    transition-delay: 0.1s;
  }
  &:nth-child(2) {
    transition-delay: 0.2s;
  }
  &:nth-child(3) {
    transition-delay: 0.3s;
  }
  &:nth-child(4) {
    transition-delay: 0.4s;
  }

  &.visible:nth-child(1) {
    transition-delay: 0.1s;
  }
  &.visible:nth-child(2) {
    transition-delay: 0.2s;
  }
  &.visible:nth-child(3) {
    transition-delay: 0.3s;
  }
  &.visible:nth-child(4) {
    transition-delay: 0.4s;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25), 0 4px 16px rgba(0, 0, 0, 0.15);

    div:first-child {
      transform: scale(1.08);
    }

    div:last-child {
      background: rgba(0, 0, 0, 0.65);
    }
  }

  @media ${device.mobile} {
    height: 220px;
  }
`;

export const QuickNavImage = styled.div<{ $bgImage: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  ${(props) => {
    switch (props.$bgImage) {
      case "church":
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Cpath d='M 200 100 L 200 200 L 150 200 L 150 250 L 250 250 L 250 200 L 200 200' stroke='%23333' stroke-width='2' fill='none'/%3E%3Cpath d='M 180 200 L 180 220 L 220 220 L 220 200' stroke='%23333' stroke-width='2' fill='none'/%3E%3Ccircle cx='200' cy='120' r='15' fill='%23333'/%3E%3C/svg%3E");
        `;
      case "worship":
        return `
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f5f5dc'/%3E%3Cpath d='M 200 50 L 200 250' stroke='%23333' stroke-width='2'/%3E%3Ctext x='200' y='150' font-family='serif' font-size='24' fill='%23333' text-anchor='middle'%3E성경%3C/text%3E%3C/svg%3E");
        `;
      case "location":
        return `
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23e8f4f8'/%3E%3Cpath d='M 150 200 L 250 200 L 250 180 L 200 150 L 150 180 Z' fill='%234a90e2'/%3E%3Ccircle cx='200' cy='190' r='8' fill='white'/%3E%3C/svg%3E");
        `;
      case "news":
        return `
          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url("data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23ffe5e5'/%3E%3Cpath d='M 200 150 Q 200 120 230 150 T 200 180' fill='%23e74c3c'/%3E%3C/svg%3E");
        `;
      default:
        return `background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`;
    }
  }}
`;

export const QuickNavOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px;
`;

export const QuickNavTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 8px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const QuickNavSubtitle = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionSubtitle = styled.div`
  font-size: 1.5rem;
  color: #a44945;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin-bottom: 12px;
  text-transform: uppercase;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.2;

  @media ${device.mobile} {
    font-size: 2.6rem;
  }
`;

export const NextGenerationSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 70px;
  padding: 70px 40px;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 32px;
  box-shadow: 0 25px 60px rgba(5, 11, 20, 0.12),
    0 10px 30px rgba(5, 11, 20, 0.08);
  position: relative;
  overflow: hidden;

  @media ${device.mobile} {
    padding: 40px 20px;
    margin-bottom: 50px;
    border-radius: 20px;
  }
`;

export const NextGenerationDescription = styled.p`
  font-size: 1.6rem;
  color: #666;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${device.mobile} {
    font-size: 1.4rem;
    margin-bottom: 40px;
  }
`;

export const NextGenerationGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;

  @media ${device.mobile} {
    gap: 30px;
  }
`;

export const NextGenItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-child(1) {
    transition-delay: 0.1s;
  }
  &:nth-child(2) {
    transition-delay: 0.2s;
  }
  &:nth-child(3) {
    transition-delay: 0.3s;
  }

  &.visible:nth-child(1) {
    transition-delay: 0.1s;
  }
  &.visible:nth-child(2) {
    transition-delay: 0.2s;
  }
  &.visible:nth-child(3) {
    transition-delay: 0.3s;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const NextGenCircle = styled.div<{ $heroImageUrl?: string }>`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: ${({ $heroImageUrl }) =>
    $heroImageUrl
      ? "transparent"
      : "linear-gradient(135deg, #a44945 0%, #8a3a37 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(164, 73, 69, 0.35),
    0 4px 12px rgba(164, 73, 69, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(164, 73, 69, 0.4),
      0 6px 16px rgba(164, 73, 69, 0.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $heroImageUrl }) =>
      $heroImageUrl
        ? "none"
        : `url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='75' cy='75' r='70' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='2'/%3E%3C/svg%3E")`};
    opacity: 0.5;
    z-index: 1;
  }

  ${NextGenItem}:hover & {
    transform: scale(1.1);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
  }

  @media ${device.mobile} {
    width: 120px;
    height: 120px;
  }
`;

export const NextGenCircleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 0;
`;

export const NextGenNumber = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: white;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const NextGenLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
  text-align: center;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const PhotoGallerySection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 70px;
  padding: 70px 40px;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 32px;
  box-shadow: 0 25px 60px rgba(5, 11, 20, 0.1),
    0 10px 30px rgba(5, 11, 20, 0.08);
  position: relative;

  @media ${device.mobile} {
    padding: 40px 20px;
    margin-bottom: 50px;
    border-radius: 20px;
  }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const PhotoItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out,
    box-shadow 0.3s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-child(1) {
    transition-delay: 0.05s;
  }
  &:nth-child(2) {
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    transition-delay: 0.15s;
  }
  &:nth-child(4) {
    transition-delay: 0.2s;
  }
  &:nth-child(5) {
    transition-delay: 0.25s;
  }
  &:nth-child(6) {
    transition-delay: 0.3s;
  }
  &:nth-child(7) {
    transition-delay: 0.35s;
  }
  &:nth-child(8) {
    transition-delay: 0.4s;
  }

  &.visible:nth-child(1) {
    transition-delay: 0.05s;
  }
  &.visible:nth-child(2) {
    transition-delay: 0.1s;
  }
  &.visible:nth-child(3) {
    transition-delay: 0.15s;
  }
  &.visible:nth-child(4) {
    transition-delay: 0.2s;
  }
  &.visible:nth-child(5) {
    transition-delay: 0.25s;
  }
  &.visible:nth-child(6) {
    transition-delay: 0.3s;
  }
  &.visible:nth-child(7) {
    transition-delay: 0.35s;
  }
  &.visible:nth-child(8) {
    transition-delay: 0.4s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const PhotoImage = styled.img<{ $index: number }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  display: block;
  background: ${({ $index }) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    ];
    return gradients[$index % gradients.length];
  }};

  ${PhotoItem}:hover & {
    transform: scale(1.05);
  }
`;
