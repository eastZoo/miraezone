import React, { useEffect, useRef, useState } from "react";
import * as S from "./Header.style";
/** 아이콘 임포트 */
import logo from "@/styles/assets/images/church_logo.png";

import { Link } from "react-router-dom";

// 서브 메뉴 데이터
const menuItems = [
  {
    title: "교회소개",
    path: "/church/introduce",
    subMenu: [
      { title: "교회 소개", path: "/church/introduce" },
      { title: "교회 조직", path: "/church/organization" },
      { title: "오시는 길", path: "/church/location" },
    ],
  },
  {
    title: "안내/소식",
    path: "/notice",
    subMenu: [
      { title: "공지사항", path: "/notice" },
      { title: "교회 소식", path: "/news" },
      { title: "주보", path: "/bulletins" },
    ],
  },
  {
    title: "예배/찬양",
    path: "/worship/info",
    subMenu: [
      { title: "예배 안내", path: "/worship/info" },
      { title: "설교 영상", path: "/worship/videos" },
    ],
  },
  {
    title: "다음세대",
    path: "/nextgen/elementary",
    subMenu: [
      { title: "유초등부", path: "/nextgen/elementary" },
      { title: "중고등부", path: "/nextgen/youth" },
      { title: "청년부", path: "/nextgen/youngadult" },
      { title: "다음세대 소식", path: "/nextgen/news" },
    ],
  },
  {
    title: "자료실",
    path: "/resources/church-albums",
    subMenu: [
      { title: "교회 앨범", path: "/resources/church-albums" },
      // { title: "찬양 자료", path: "/resources/songs" },
      // { title: "다운로드", path: "/resources/downloads" },
    ],
  },
];

interface HeaderProps {
  isTransparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent = false }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gnbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !gnbRef.current) return;

      const topUtilityHeight = 40; // TopUtilityBar 높이
      const mainHeaderHeight = 80; // MainHeader 높이
      const offsetTop = topUtilityHeight + mainHeaderHeight;

      setIsFixed(window.scrollY > offsetTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const toggleAllCategory = () => setIsMenuOpen((prev) => !prev);

  return (
    <S.HeaderWrapper ref={headerRef} id="header" $transparent={isTransparent}>
      {/* 상단 유틸리티 바 */}
      {/* <S.TopUtilityBar>
        <S.TopUtilityInner>
          <S.TopUtilityList>
            <Link to="/auth/login">
              <div>로그인</div>
            </Link>
            <Link to="/auth/register/welcome">
              <div>회원가입</div>
            </Link>
            <Link to="/mypage">
              <div>마이페이지</div>
            </Link>
            <Link to="/shop/orderinquiryview">
              <div>주문확인</div>
            </Link>
          </S.TopUtilityList>
        </S.TopUtilityInner>
      </S.TopUtilityBar> */}

      {/* 메인 헤더 - 로고와 메뉴가 같은 row */}
      <S.MainHeader
        ref={gnbRef}
        className={isFixed ? "fixed" : ""}
        $transparent={isTransparent}
      >
        <S.HeaderInner>
          {/* 로고 영역 */}
          <S.LogoWrapper>
            <Link to="/">
              <img src={logo} alt="교회 로고" />
            </Link>
          </S.LogoWrapper>

          {/* 네비게이션 메뉴 영역 */}
          <S.NavSection>
            {/* 메인 메뉴 */}
            <S.MainMenu $isOpen={isMobileMenuOpen}>
              <S.MenuList>
                {menuItems.map((item, index) => (
                  <S.MenuItem
                    key={index}
                    onMouseEnter={() => setActiveMenuIndex(index)}
                    onMouseLeave={() => setActiveMenuIndex(null)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {activeMenuIndex === index && (
                      <S.SubMenu>
                        {item.subMenu.map((subItem, subIndex) => (
                          <S.SubMenuItem key={subIndex}>
                            <Link to={subItem.path}>{subItem.title}</Link>
                          </S.SubMenuItem>
                        ))}
                      </S.SubMenu>
                    )}
                  </S.MenuItem>
                ))}
              </S.MenuList>
            </S.MainMenu>

            {/* 모바일 메뉴 토글 버튼 */}
            <S.MobileMenuToggle
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </S.MobileMenuToggle>
          </S.NavSection>
        </S.HeaderInner>
      </S.MainHeader>
    </S.HeaderWrapper>
  );
};

export default Header;
