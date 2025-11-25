import * as S from "./HeaderMobile.style";
import { useState } from "react";
import { Link } from "react-router-dom";

import HamMenu from "../HamMenu";
import logo from "@/styles/assets/images/church_logo.png";
import { HiMenu, HiX } from "react-icons/hi";

// 서브 메뉴 데이터 (Header와 동일)
const menuItems = [
  {
    title: "교회소개",
    path: "/",
    subMenu: [
      { title: "교회 소개", path: "/" },
      { title: "교회 비전", path: "/" },
      { title: "교회 연혁", path: "/" },
      { title: "교회 조직", path: "/" },
      { title: "오시는 길", path: "/" },
    ],
  },
  {
    title: "안내/소식",
    path: "/",
    subMenu: [
      { title: "공지사항", path: "/" },
      { title: "교회 소식", path: "/" },
      { title: "행사 안내", path: "/" },
      { title: "주보", path: "/" },
    ],
  },
  {
    title: "예배/찬양",
    path: "/",
    subMenu: [
      { title: "예배 안내", path: "/" },
      { title: "설교 영상", path: "/" },
      { title: "찬양 영상", path: "/" },
      { title: "예배 말씀", path: "/" },
    ],
  },
  {
    title: "사역/양육",
    path: "/",
    subMenu: [
      { title: "사역 소개", path: "/" },
      { title: "양육 프로그램", path: "/" },
      { title: "제자 훈련", path: "/" },
      { title: "선교 사역", path: "/" },
    ],
  },
  {
    title: "다음세대",
    path: "/",
    subMenu: [
      { title: "유초등부", path: "/" },
      { title: "중고등부", path: "/" },
      { title: "청년부", path: "/" },
      { title: "다음세대 소식", path: "/" },
    ],
  },
  {
    title: "자료실",
    path: "/",
    subMenu: [
      { title: "설교 자료", path: "/" },
      { title: "찬양 자료", path: "/" },
      { title: "교육 자료", path: "/" },
      { title: "다운로드", path: "/" },
    ],
  },
];

export const HeaderMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <S.HeaderWrapper>
      {/* 메인 헤더 */}
      <S.MainHeader>
        <S.HeaderInner>
          {/* 햄버거 메뉴 및 로고 */}
          <S.TopLeft>
            {/* <S.HamMenu onClick={() => setIsMenuOpen((prev) => !prev)}>
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </S.HamMenu> */}

            <Link to="/">
              <S.Logo src={logo} alt="교회 로고" />
            </Link>
          </S.TopLeft>
        </S.HeaderInner>
      </S.MainHeader>

      {/* 메인 메뉴 */}
      <S.MainMenu>
        {menuItems.map((item, index) => (
          <S.MenuItem key={index}>
            <Link to={item.path}>{item.title}</Link>
          </S.MenuItem>
        ))}
      </S.MainMenu>

      <HamMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </S.HeaderWrapper>
  );
};

export default HeaderMobile;
