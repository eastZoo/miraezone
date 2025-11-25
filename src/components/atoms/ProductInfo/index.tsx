import * as S from "./ProductInfo.style"
import Button from "../Button";

// 아이콘
import { PiDropSimpleLight } from "react-icons/pi";
import { HiOutlineHeart, HiOutlineShare } from "react-icons/hi2";

export const ProductInfo = () => {
  return (
    <S.ProductInfoBox>
      {/* 상품 카테고리 영역 */}
      <S.PrdInfoCategory>
        <S.PrdInfoCategoryItem>
          <span><PiDropSimpleLight/></span>
          냉장
        </S.PrdInfoCategoryItem>
        <S.PrdInfoCategoryItem>
          베스트
        </S.PrdInfoCategoryItem>
        <S.PrdInfoCategoryItem>
          행사
        </S.PrdInfoCategoryItem>
      </S.PrdInfoCategory>

    {/* 상품 제목, 가격, 액션버튼 영역 */}
      <S.PrdTitleBox>
        <S.PrdInfoArea>
          {/* 상품 제목 */}
          <S.PrdTitle>
            녹차먹인 삼겹 녹차먹인 삼겹 녹차먹인 삼겹 녹차먹인 삼겹 녹차먹인 삼겹 </S.PrdTitle>

          {/* 상품 가격 */}
          <S.PrdPriceBox>
            <S.PrdPrice>
              <S.Unit>Kg당</S.Unit>
              <S.Price>19,000원</S.Price>
            </S.PrdPrice>
            <S.SubNote>1박스 평균 중량 18kg</S.SubNote>
          </S.PrdPriceBox>
        </S.PrdInfoArea>

        {/* 찜하기/공유 버튼 */}
        <S.PrdActions>
          <S.IconBtn><HiOutlineHeart/></S.IconBtn>
          <S.IconBtn><HiOutlineShare/></S.IconBtn>
        </S.PrdActions>
      </S.PrdTitleBox>

    {/* 상세 정보 표시 영역 */}
      <S.PrdDetailInfoList>
        <S.InfoItem>
          <span className="label">원산지</span>
          <span className="value">: 국내산</span>
        </S.InfoItem>
        <S.InfoItem>
          <span className="label">판매여부</span>
          <span className="value">: 판매</span>
        </S.InfoItem>
        <S.InfoItem>
          <span className="label">배송일</span>
          <span className="value">: 당일 결제 시 7월 15일 도착 예정</span>
        </S.InfoItem>
        <S.InfoItem>
          <span className="label">수량</span>
          <div className="value">
            <S.CounterBox>
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </S.CounterBox>
          </div>
        </S.InfoItem>
      </S.PrdDetailInfoList>
    
    {/* 총 상품 금액 표시 영역 */}
      <S.TotalPriceRow>
        <S.TotalLabel>총 상품금액</S.TotalLabel>
        <S.TotalPrice>342,000</S.TotalPrice>
        <S.TotalUnit>원</S.TotalUnit>
      </S.TotalPriceRow>


    {/* 장바구니, 구매 버튼 영역 */}
    <S.ButtonBox>
      <Button
        variant="outline"
        fullWidth
        >
        장바구니
      </Button>
      <Button
        variant="primary"
        fullWidth
      >
        구매하기
      </Button>
    </S.ButtonBox>
    </S.ProductInfoBox>
  );
};