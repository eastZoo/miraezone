import * as S from "./HeaderMobile.style";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import HamMenu from "../HamMenu";
import logo from "@/styles/assets/images/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import { HiOutlineHeart, HiOutlineShoppingBag, HiOutlineBell } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";



const categories = [
  { id: "001", label: "한우" },
  { id: "002", label: "한돈" },
  { id: "003", label: "수입우육" },
  { id: "004", label: "수입돈육" },
  { id: "006", label: "닭·오리" },
  { id: "007", label: "가림 세절육" },
  { id: "008", label: "가림 제주돈" },
];

export const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname, search } = useLocation();
  const caId = new URLSearchParams(search).get("ca_id");
  const isTypeList = pathname === "/shop/typeList";

  return (
    <S.HeaderWrapper>
      {/* 상단바 */}
      <S.TopBar>
        <S.TopLeft>
          <S.HamMenu onClick={() => setIsMenuOpen((prev) => !prev)}>
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </S.HamMenu>

          <Link to="/">
            <S.Logo src={logo} alt="부민축산 로고" />
          </Link>
        </S.TopLeft>
        <S.IconGroup>
          <Link to="/mypage/notification">
            <S.IconBtn aria-label="알림">
              <HiOutlineBell />
            </S.IconBtn>
          </Link>
          <Link to="/mypage/wishlist">
            <S.IconBtn aria-label="찜하기">
              <HiOutlineHeart />
            </S.IconBtn>
          </Link>
          <Link to="/mypage/cart">
            <S.IconBtn aria-label="장바구니">
              <HiOutlineShoppingBag />
              <S.CartBadge>3</S.CartBadge>
            </S.IconBtn>
          </Link>
        </S.IconGroup>
      </S.TopBar>

      {/* 검색창 */}
      <S.SearchBar>
        <S.SearchForm>
          <S.SearchInput type="text" placeholder="찾으시는 제품을 검색해보세요." />
          <S.SearchButton type="submit">
            <LuSearch />
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchBar>

      {/* 탭메뉴 */}
      <S.TabMenu>
        {/* 홈 */}
        <S.TabLink
          as={Link}
          to="/"
          className={pathname === "/" ? "active" : undefined}
        >
          홈
        </S.TabLink>

        {/* 카테고리 */}
        {categories.map((c) => (
          <S.TabLink
            as={Link}
            key={c.id}
            to={`/shop/typeList?cate_type=admin&ca_id=${c.id}`}
            className={isTypeList && caId === c.id ? "active" : undefined}
          >
            {c.label}
          </S.TabLink>
        ))}

        {/* 고객요청사항 */}
        <S.TabLink
          as={Link}
          to="/mypage/requests"
          className={pathname === "/mypage/requests" ? "active" : undefined}
        >
          고객요청사항
        </S.TabLink>
      </S.TabMenu>

      <HamMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </S.HeaderWrapper>
  );
};

export default HeaderMobile;
