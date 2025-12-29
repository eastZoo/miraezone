import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import * as S from "./SubMenuTemplate.style";
import MainTemplate from "@/components/template/MainTemplate";
import { Breadcrumb } from "@/styles/GlobalStyle";
import homeBg1 from "@/styles/assets/images/home_bg1.jpg";
import homeBg2 from "@/styles/assets/images/home_bg2.jpg";
import homeBg3 from "@/styles/assets/images/home_bg3.jpg";

export interface SubMenuItem {
  title: string;
  path: string;
  isSubItem?: boolean; // 하위 메뉴 여부
}

export type { SubMenuItem };

export interface SubMenuTemplateProps {
  /** 메인 메뉴 타이틀 */
  mainMenuTitle: string;
  /** 서브 메뉴 리스트 */
  subMenuItems: SubMenuItem[];
  /** 현재 선택된 서브 메뉴 경로 */
  currentSubMenuPath: string;
  /** 페이지 타이틀 */
  pageTitle: string;
  /** 브레드크럼 (예: ["Home", "교회소개", "교회 소개"]) */
  breadcrumb: string[];
  /** 페이지 콘텐츠 */
  children: React.ReactNode;
}

// 이미지 프리로딩을 위한 전역 변수
const images = [homeBg1, homeBg2, homeBg3];
let imagesPreloaded = false;

// 이미지 프리로드 함수
const preloadImages = () => {
  if (imagesPreloaded) return;

  images.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });

  imagesPreloaded = true;
};

// 배너 컴포넌트 메모이제이션
const Banner: React.FC = React.memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 이미지 프리로드
    preloadImages();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10초마다 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <S.BannerWrapper>
      <S.BannerContainer>
        <S.BackgroundSlide>
          {images.map((image, index) => (
            <S.BackgroundImage
              key={`bg-${index}`}
              src={image}
              alt={`배경 이미지 ${index + 1}`}
              $isActive={index === currentIndex}
              decoding="async"
              loading="eager"
            />
          ))}
        </S.BackgroundSlide>
        <S.BannerOverlay>
          <S.BannerMottoYear>2026 표어</S.BannerMottoYear>
          <S.BannerText>{"일하시는 하나님, 순종하는 교회"}</S.BannerText>
          <S.BannerVerse>(눅 5:5-6)</S.BannerVerse>
        </S.BannerOverlay>
      </S.BannerContainer>
    </S.BannerWrapper>
  );
});

Banner.displayName = "Banner";

const SubMenuTemplate: React.FC<SubMenuTemplateProps> = ({
  mainMenuTitle,
  subMenuItems,
  currentSubMenuPath,
  pageTitle,
  breadcrumb,
  children,
}) => {
  const location = useLocation();

  // 컴포넌트 마운트 시 이미지 프리로드
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <MainTemplate transparentHeader>
      <Banner />
      <S.Wrapper>
        {/* 사이드바 */}
        <S.Sidebar>
          <S.SidebarHeader>
            <S.MainMenuButton>{mainMenuTitle}</S.MainMenuButton>
          </S.SidebarHeader>
          <S.SubMenuList>
            {subMenuItems.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(item.path + "/") ||
                currentSubMenuPath === item.path ||
                currentSubMenuPath?.startsWith(item.path + "/");
              return (
                <S.SubMenuItem key={index} $isSubItem={item.isSubItem}>
                  <S.SubMenuLink
                    as={Link}
                    to={item.path}
                    $isActive={isActive}
                    $isSubItem={item.isSubItem}
                  >
                    {item.isSubItem && <S.SubItemIndicator>└</S.SubItemIndicator>}
                    {item.title}
                  </S.SubMenuLink>
                </S.SubMenuItem>
              );
            })}
          </S.SubMenuList>
        </S.Sidebar>

        {/* 콘텐츠 영역 */}
        <S.ContentArea>
          {/* 브레드크럼 */}
          <S.BreadcrumbWrapper>
            <Breadcrumb>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {index < breadcrumb.length - 1 ? (
                    <>
                      {item} <span>{">"}</span>
                    </>
                  ) : (
                    <span className="last-item">{item}</span>
                  )}
                </React.Fragment>
              ))}
            </Breadcrumb>
          </S.BreadcrumbWrapper>

          {/* 페이지 타이틀 */}
          <S.PageTitle>{pageTitle}</S.PageTitle>

          {/* 페이지 콘텐츠 */}
          <S.PageContent>{children}</S.PageContent>
        </S.ContentArea>
      </S.Wrapper>
    </MainTemplate>
  );
};

export default SubMenuTemplate;
