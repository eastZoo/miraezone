import styled from "styled-components";
import { device } from "@/styles/GlobalStyle"

export const ProductInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PrdInfoCategory = styled.ul`
  display: flex;
`;

export const PrdInfoCategoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.8rem;
  color: #999;
  padding-right: 12px;
  margin-right: 12px;
  position: relative;

  /* 구분선 */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 12px;
    background-color: #999;
  }

  span {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #999;
  }

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const PrdTitleBox = styled.div`
  display: flex;
  gap: 23px;
  align-items: center;

  @media ${device.mobile} {
    align-items: flex-start;
  }
`;

export const PrdInfoArea = styled.div`
`;

export const PrdTitle = styled.h3`
  font-size: 2.6rem;
  font-weight: 600;
  color: #111;
  line-height: 1.54;

  @media ${device.mobile} {
    font-size: 2rem;
  }
`;

export const PrdPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PrdPrice = styled.div`
  display: flex;
  gap: 8px;
`;

export const Unit = styled.span`
  font-size: 2.4rem;
  color: #666;

  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

export const Price = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: #111;

  @media ${device.mobile} {
    font-size: 1.8rem;
  }
`;

export const SubNote = styled.span`
  font-size: 1.6rem;
  color: #999;

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`;

export const PrdActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: solid 1px #eee;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const PrdDetailInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 45px 0;
  margin: 45px 0;

  @media ${device.mobile} {
    margin: 24px 0;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #333;

  .label {
    flex: 0 0 70px;
    color: #666;
    font-weight: 300;
  }

  .value {
    flex: 1;
    color: #111;
    font-weight: 300;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 32px;
    height: 32px;
    border: none;
    background-color: #8b2f2f;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #a64040;
    }

    
  }

  div {
    width: 40px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #eee;
    font-size: 1.6rem;
    color: #111;
    background-color: #fff;
  }

  @media ${device.mobile} {
      button {
        width: 24px;
        height: 24px;
      }

      div {
        width: 32px;
        height: 24px;
        line-height: 24px;
        font-size: 1.4rem;
        align-items: center;
        align-self: center;
      }
    }
`;

export const TotalPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
  padding-bottom: 45px;
`;

export const TotalLabel = styled.span`
  margin-right: 8px;
`;

export const TotalPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: red;
  margin: 0 4px;
`;

export const TotalUnit = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const ButtonOutlined = styled.button`
  min-width: 270px;
  height: 60px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: #fff;
  color: #8b2f2f;
  border: 1px solid #8b2f2f;

  &:hover {
    background-color: #fbeaea;
  }
`;

export const ButtonFilled = styled.button`
  min-width: 270px;
  height: 60px;
  padding: 0 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  background-color: #8b2f2f;
  color: #fff;
  border: 1px solid #8b2f2f;

  &:hover {
    background-color: #a64040;
  }
`;
