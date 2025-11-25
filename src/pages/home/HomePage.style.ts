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

export const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  margin: 0;
  padding: 0;

  @media ${device.mobile} {
    height: 80vh;
    min-height: 400px;
  }
`;

export const ContentSection = styled.div`
  position: relative;
  width: 100%;
  background: white;
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
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  animation: ${(props) => props.$isActive && fadeIn} 1.5s ease-in-out;
`;

export const OverlayText = styled.div<{ $opacity: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  opacity: ${(props) => props.$opacity};
  transition: opacity 0.3s ease-out;
  pointer-events: ${(props) => (props.$opacity > 0 ? "auto" : "none")};

  @media ${device.mobile} {
    padding: 15px;
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

export const MainTitle = styled.h1`
  font-size: 5.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;

  @media ${device.mobile} {
    font-size: 3rem;
    margin-bottom: 15px;
    gap: 1px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2px;

  @media ${device.mobile} {
    font-size: 2.5rem;
    gap: 1px;
  }
`;

export const LetterSpan = styled.span<{ $delay: number }>`
  display: inline-block;
  opacity: 0;
  transform: translateY(30px) rotateX(90deg);
  animation: ${letterFadeIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.$delay}s;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.1);
    text-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  max-width: 1200px;
  margin: 60px auto;
  background: #1a1a2e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media ${device.mobile} {
    flex-direction: column;
    margin: 40px 16px;
    border-radius: 8px;
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
  margin: 80px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin: 50px auto;
    padding: 0 16px;
    gap: 20px;
  }
`;

export const QuickNavCard = styled.div`
  position: relative;
  height: 280px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out,
    box-shadow 0.4s ease;

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
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);

    div:first-child {
      transform: scale(1.1);
    }

    div:last-child {
      background: rgba(0, 0, 0, 0.6);
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
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.4s ease;
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
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SectionSubtitle = styled.div`
  font-size: 1.4rem;
  color: #4a90e2;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 10px;

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;

  @media ${device.mobile} {
    font-size: 2.5rem;
  }
`;

export const NextGenerationSection = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  padding: 80px 20px;
  background: white;

  @media ${device.mobile} {
    margin: 60px auto;
    padding: 50px 16px;
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

export const NextGenCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='75' cy='75' r='70' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='2'/%3E%3C/svg%3E");
    opacity: 0.5;
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
  max-width: 1200px;
  margin: 100px auto;
  padding: 80px 20px;
  background: #f8f8f8;

  @media ${device.mobile} {
    margin: 60px auto;
    padding: 50px 16px;
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

export const PhotoImage = styled.div<{ $index: number }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;

  ${PhotoItem}:hover & {
    transform: scale(1.05);
  }

  ${(props) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #ff8a80 0%, #ea6100 100%)",
      "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
      "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
      "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
    ];
    return `background: ${gradients[props.$index % gradients.length]};`;
  }}
`;
