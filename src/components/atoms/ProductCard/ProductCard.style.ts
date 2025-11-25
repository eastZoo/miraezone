import { device } from "@/styles/GlobalStyle";
import styled, { css } from "styled-components";

export const ProductCard = styled.div<{
  $variant?: "order" | "wishlist"
  $editMode?: boolean;
}>`
  
  display: flex;
  justify-content: space-between;
  padding: 36px;
  border-radius: 30px;
  border: solid 1px #eee;
  margin-top: 20px;
  width: 100%;

  ${({ $variant }) =>
    $variant === "wishlist" &&
    css`
      padding: 28px 36px;
    `}
    
  @media ${device.mobile} {
    padding: 16px;
    border-radius: 20px;
    border: 0;

    ${({ $editMode }) =>
    $editMode &&
    css`
      padding: 0;
    `}
  }
  `;

export const ProductCardInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ProductCardButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`;

export const CardButton = styled.button<{ $primary?: boolean; $danger?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 36px;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 5px;
  color: #333;
  font-size: 1.6rem;

    &:first-child {
      border: 1px solid #a44945;
      color: #a44945;
    }

    ${({ $primary }) =>
    $primary &&
    css`
      border-color: #a44945;
      color: #a44945;
      font-weight: 600;
    `}
  ${({ $danger }) =>
    $danger &&
    css`
      border-color: #f0d2d1;
      color: #a44945;
      background: #fff7f7;
    `}
`;

export const ProductStat = styled.div<{ $hidden?: boolean }>`
  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};
  align-items: center;
  gap: 4px;
  
  span {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const DeliveryStat = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
`;

export const ProductDetail = styled.div<{$variant?: "order" | "wishlist"}>`
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  min-width: 0;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
    margin-bottom: 12px;
    padding-bottom: 34px;
  }

  ${({ $variant }) =>
    $variant === "order" &&
    css`
      display: block;
    `}

  @media ${device.mobile} {
    gap: 0;
  }
`;

export const DetailContainer = styled.div<{$editMode?: boolean;}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
      
  @media ${device.mobile} {
    ${({ $editMode }) =>
    $editMode &&
    css`
      border: 1px solid #eee;
      padding: 16px;
      border-radius: 20px;
    `}
  }
`;

export const DetailBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex: 1;
  min-width: 0;

  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

export const ProductImg = styled.img<{ $size?: "sm" | "md" }>`
  ${(props) =>
      props.$size === "sm" &&
      css`
        width: 85px;
        height: 85px;
          border-radius: 10px;
      `}

    ${(props) =>
      props.$size === "md" &&
      css`
        width: 166px;
        height: 166px;
        border-radius: 30px;

        @media ${device.mobile} {
          width: 120px;
          height: 120px;
          border-radius: 20px;
        }
      `}
  background: #ddd;

`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  flex: 1;
`;

export const ProductName = styled.div`
  font-size: 1.4rem;
  color: #111;
  line-height: 1.4;
  font-weight: 600;
  width: 100%;
`;

export const ProductDescribe = styled.div<{ $variant?: "order" | "wishlist" }>`
  color: #999;
  font-size: 1.4rem;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ $variant }) => ($variant === "order" ? "#999" : "inherit")};
`;

export const OrderNum = styled.div`
`;


export const UnitPrice = styled.div<{ $variant?: "order" | "wishlist" }>`
  color: #999;
  font-size: 1.4rem;
`;

export const ProductPrice = styled.div<{ $variant?: "order" | "wishlist" }>`
  color: ${({ $variant }) => ($variant === "order" ? "#999" : "#f00")};
  font-size: ${({ $variant }) => ($variant === "order" ? "1.4rem" : "1.6rem")};
  font-weight: ${({ $variant }) => ($variant === "order" ? 400 : 600)};
`;

export const LeftAddon = styled.div`
  flex-shrink: 0;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })<{$editMode?: boolean;}>`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid #ddd;
  cursor: pointer;
  display: inline-grid;
  place-content: center;
  background: #fff;
  accent-color: #a44945;

  &:hover {
    border-color: #bbb;
  }

  &::after{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    transform: scale(0);
    transition: transform .15s ease-in-out;
  }
  
  // &:checked{
  //   background: #a44945;
  //   border-color: #a44945;
  // }
  // &:checked::after {
  //   transform: scale(1);
  // }

  /* 비활성 */
  &:disabled{
    opacity: .5; cursor: default;
  }
`;