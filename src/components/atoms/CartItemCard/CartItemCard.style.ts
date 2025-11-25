import styled from "styled-components";
import * as W from "@/components/atoms/ProductCard/ProductCard.style";
import { device } from "@/styles/GlobalStyle";


export const CartItemCard = styled(W.ProductCard)`
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  overflow: clip;

  @media ${device.mobile} {
    border-radius: 20px;
    border: 1px solid #eee;
  }
`;

/* ============ 스토어 타이틀 ============ */
export const StoreHeader = styled.div`
  border-radius: 30px 30px 0 0;
  background: #f7f7f7;
  color: #111;
  font-size: 2rem;
  font-weight: bold;
  padding: 36px;
  display: flex;
  align-items: center;
  gap: 36px; 

  @media ${device.mobile} {
    padding: 16px;
    font-size: 1.4rem;
    gap: 10px;
    border-radius: 15px 15px 0 0;
  }
`;

export const Checkbox = styled(W.Checkbox)``;

/* ============ 프로덕트 정보 영역 ============ */
export const ProductCardInfos = styled(W.ProductCardInfos)`
  padding: 36px;
  width: auto;

  @media ${device.mobile} {
    padding: 16px;
    margin-bottom: 16px;
  }
`;

export const ProductDetail = styled(W.ProductDetail)`
  align-items: flex-start;

  @media ${device.mobile} {
    align-items: center;
  }
`;

export const LeftAddon = styled(W.LeftAddon)`
`;

export const DetailBox = styled(W.DetailBox)`
  position: relative;
`;

export const ProductImg = styled(W.ProductImg)`
  width: 140px;
  height: 140px;
`;

export const ProductInfo = styled(W.ProductInfo)`
`;

export const ProductName = styled(W.ProductName)`
`;

export const QtyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DescriptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductDescribe = styled(W.ProductDescribe)`
`;

export const ProductPrice = styled(W.ProductPrice)`
  color: #999;
  font-weight: 400;
  font-size: 1.4rem;
`;

export const UnitPrice = styled(W.UnitPrice)`
`;

// 카운트 박스
export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #eee;

  button {
    width: 30px;
    height: 30px;
    border: none;
    background-color: #fff;
    color: #111;
    font-size: 1.6rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    width: 40px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 1.6rem;
    color: #111;
    background-color: #fff;
  }

   @media ${device.mobile} {
    position: absolute;
    bottom: -10px;
    left: 20px;
   }
`;

// 삭제 버튼
export const RemoveButton = styled.div`
  color: #333;
  font-size: 1.4rem;
  border-bottom: 1px solid #333;
`;

// 모바일 삭제 버튼
export const MRemoveButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  span {
    font-weight: 600;
    color: #111;
    font-size: 1.4rem;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #999;
  }
`;