import styled, { css } from "styled-components";
import iconRefrigerated from "@/styles/assets/images/icon_refrigerated.png";
import iconFrozen from "@/styles/assets/images/icon_frozen.png";
import { device } from "@/styles/GlobalStyle";

interface ProductItemStylrProps {
  $size: "xs" | "sm" | "md" | "lg";
}

export const ProductItemContainer = styled.div`
  width: 100%;
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
`;

export const ProductImageContainer = styled.div<ProductItemStylrProps>`
  position: relative;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img:first-of-type {
    border-radius: 30px;

    ${(props) =>
      props.$size === "xs" &&
      css`
        width: 156px;
        height: 156px;
      `}

    ${(props) =>
      props.$size === "sm" &&
      css`
        width: 166px;
        height: 166px;
      `}
    
    ${(props) =>
      props.$size === "md" &&
      css`
        width: 220px;
        height: 220px;
      `}

    ${(props) =>
      props.$size === "lg" &&
      css`
        width: 285px;
        height: 285px;
      `}
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.8rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const SpecialPriceLabel = styled.img`
  position: absolute;
  top: -4px;
  right: 12px;
  color: white;
  // padding: 4px 8px;
  font-size: 1.1rem;
  font-weight: 600;
  z-index: 2;
  width: 54px;
  height: 80px;
`;

export const ComingSoonLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  z-index: 2;
  border-radius: 30px;
`;

export const ProductInfo = styled.div`
  padding: 12px;
`;

export const ProductTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 8px 0;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const ProductUnit = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.64;
  letter-spacing: -0.28px;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteGreyText};

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

export const ProductLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 500;
  background: #f5f5f5;
  color: #666;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &.refrigerated::before,
  &.frozen::before {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &.refrigerated::before {
    background: url(${iconRefrigerated}) no-repeat center/contain;
  }
  &.frozen::before {
    background: url(${iconFrozen}) no-repeat center/contain;
  }

  &.event,
  &.special,
  &.coming-soon {
    background: #ffebee;
    color: #d32f2f;
  }

  @media ${device.mobile} {
    font-size: 1rem;
    padding: 4px 8px;
  }
`;

export const ProductActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;

  @media ${device.mobile} {
    gap: 3px;
  }
`;

export const ActionButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  /* color: #333; */
  padding: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 24px;
    height: 24px;
  }
  
  @media ${device.mobile} {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const CartButton = styled.button`
  border: none;
  background: none;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
