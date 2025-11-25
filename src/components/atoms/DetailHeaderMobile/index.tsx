import * as S from "./DetailHeaderMobile.style";
import { HiOutlineShoppingBag, HiOutlineBell } from "react-icons/hi2";
import { HiOutlineChevronLeft } from "react-icons/hi";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

interface DetailHeaderMobileProps {
  showRightBox?: boolean;
  pageTitle?: string;
  onBackHandler?: () => void;
}


const DetailHeaderMobile: React.FC<DetailHeaderMobileProps> = ({
  showRightBox = true,
  pageTitle,
  onBackHandler,
}) => {
  const navigate = useNavigate();
  
  return (
    <S.DetailHeaderWrapper>
      {/* 뒤로가기 */}
      <S.HeaderLeftBox>
        <Button
          variant="icon"
          size="small"
          icon={<HiOutlineChevronLeft width={24} height={24} />}
          onClick={onBackHandler ? onBackHandler : () => navigate(-1)}
        />
      </S.HeaderLeftBox>
      
      {/* 페이지 타이틀 */}
      <S.HeaderTitle><h2>{pageTitle}</h2></S.HeaderTitle>

      {/* 우측 아이콘들 */}
       {showRightBox && (
        <S.HeaderRightBox>
          <Link to="/mypage/notification">
            <S.NotiBtn aria-label="알림">
              <HiOutlineBell />
            </S.NotiBtn>
          </Link>
          <Link to="/mypage/cart">
            <S.CartBtn aria-label="장바구니">
              <HiOutlineShoppingBag />
              <S.CartBadge>3</S.CartBadge>
            </S.CartBtn>
          </Link>
        </S.HeaderRightBox>
      )}
    </S.DetailHeaderWrapper>
  );
};

export default DetailHeaderMobile;