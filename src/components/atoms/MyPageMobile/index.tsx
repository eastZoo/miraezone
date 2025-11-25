import * as S from "./MyPageMobile.style";

import Button from "../Button";

import { HiOutlineCamera } from "react-icons/hi2";
import { LiaClipboardListSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { CiBitcoin } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineChevronRight } from "react-icons/hi";



const MyPageMobile = () => {
  const openKakaoTalk = () => {
    // 카카오톡 채널 또는 상담 링크로 이동
    window.open("https://pf.kakao.com/_your_channel_id", "_blank");
  };

  return (
    <S.MyPageMobile>
      <S.MyPageHeader>
        <S.HedaerWrapper>
          <S.HeaderTitleBox>
            {/* 회원정보수정 버튼 */}
            <S.HeaderTitle>부민축산 <span>님</span></S.HeaderTitle>
            <S.HeaderEmail>boomin@naver.com</S.HeaderEmail>
          </S.HeaderTitleBox>
          
          {/* 회원정보수정 버튼 */}
          <Link to="/mypage/profile">
            <S.EditBtn type="button">
              <IoMdSettings /> 회원정보수정
            </S.EditBtn>
          </Link>
        </S.HedaerWrapper>
      </S.MyPageHeader>

      {/* 로우 메뉴 */}
      <S.MenuRow>
        <S.MenuRowList>
          <li>
            <Link to="/mypage/order">
                <S.MenuItem>
                <LiaClipboardListSolid />
                <S.MenuItemTitle>주문/배송</S.MenuItemTitle>
              </S.MenuItem>
            </Link>
          </li>
          <li>
            <Link to="/mypage/reviews">
              <S.MenuItem>
                <HiOutlineCamera />
                <S.MenuItemTitle>구매후기</S.MenuItemTitle>
              </S.MenuItem>
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <S.MenuItem>
                <HiOutlineCamera />
                <S.MenuItemTitle>쿠폰</S.MenuItemTitle>
                <span>0</span>
              </S.MenuItem>
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <S.MenuItem>
                <CiBitcoin />
                <S.MenuItemTitle>포인트</S.MenuItemTitle>
                <span className="point">10,000p</span>
              </S.MenuItem>
            </Link>
          </li>
        </S.MenuRowList>
      </S.MenuRow>

      {/* 메뉴 리스트 */}
      <S.MenuList>
        <S.MenuListItem>
          <Link to="/mypage/requests">
              <span>고객요청사항</span>
              <Button
                variant="icon"
                size="small"
                icon={<HiOutlineChevronRight />}
              />
          </Link>
        </S.MenuListItem>
        <S.MenuListItem>
          <Link to="/mypage/notices">
              <span>공지사항</span>
              <Button
                variant="icon"
                size="small"
                icon={<HiOutlineChevronRight />}
              />
          </Link>
        </S.MenuListItem>
        <S.MenuListItem>
          <Link to="/mypage/order">
              <span>최근 주문내역</span>
              <Button
                variant="icon"
                size="small"
                icon={<HiOutlineChevronRight />}
              />
          </Link>
        </S.MenuListItem>
        <S.MenuListItem>
          <Link to="/mypage/wishlist">
              <span>찜한 상품</span>
              <Button
                variant="icon"
                size="small"
                icon={<HiOutlineChevronRight />}
              />
          </Link>
        </S.MenuListItem>
        <S.MenuListItem onClick={openKakaoTalk}>
          <Link to="/mypage/wishlist">
              <span>카톡 상담</span>
              <Button
                variant="icon"
                size="small"
                icon={<HiOutlineChevronRight />}
              />
          </Link>
        </S.MenuListItem>
      </S.MenuList>
    </S.MyPageMobile>
  );
};

export default MyPageMobile;