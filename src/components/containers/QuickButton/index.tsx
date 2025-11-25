import { useEffect, useState } from "react";
import * as S from "./QuickButton.style";
import { HiArrowUp } from "react-icons/hi";
import { FaAndroid, FaApple } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { TfiDownload } from "react-icons/tfi";
import { VscHistory } from "react-icons/vsc";
import kakaoImage from "@/styles/assets/images/kakao_quick.png";
import RecentProductsSidebar from "@/components/atoms/RecentProductsSidebar";

const QuickButtons = () => {
  /** ============================= state 영역 ============================= */
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showRecentSidebar, setShowRecentSidebar] = useState(false);

  /** ============================= API 영역 ============================= */

  /** ============================= 비즈니스 로직 영역 ============================= */

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openKakaoTalk = () => {
    // 카카오톡 채널 또는 상담 링크로 이동
    window.open("https://pf.kakao.com/_your_channel_id", "_blank");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setShowDownloadMenu(false);
    }
  };

  const toggleDownloadMenu = () => {
    setShowDownloadMenu(!showDownloadMenu);
  };

  /* 앱 다운로드 링크 */
  const openAndroidApp = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=your.app.id",
      "_blank"
    );
  };

  /* iOS 앱 다운로드 링크 */
  const openIOSApp = () => {
    window.open("https://apps.apple.com/app/your-app/id123456789", "_blank");
  };

  /* 최근 본 상품 페이지로 이동 */
  const openRecentProducts = () => {
    setShowRecentSidebar(true);
  };

  /* 최근 본 상품 사이드바 닫기 */
  const closeRecentSidebar = () => {
    setShowRecentSidebar(false);
  };

  /** ============================= 컴포넌트 영역 ============================= */

  /** ============================= useEffect 영역 ============================= */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // 스크롤이 100px 이상일 때만 버튼 표시
      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false); // 스크롤이 위로 올라가면 메뉴도 닫기
        setShowDownloadMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 최근 본 상품 사이드바 */}
      <RecentProductsSidebar
        isOpen={showRecentSidebar}
        onClose={closeRecentSidebar}
        products={[]}
      />

      {isVisible && (
        <S.QuickButtonContainer>
          {/* 2단계 다운로드 메뉴 */}
          <S.SecondLevelMenu isVisible={showDownloadMenu}>
            <S.QuickButton onClick={openIOSApp} className="ios">
              <FaApple />
              <S.ButtonText>iOS</S.ButtonText>
            </S.QuickButton>
            <S.QuickButton onClick={openAndroidApp} className="android">
              <FaAndroid />
              <S.ButtonText>Android</S.ButtonText>
            </S.QuickButton>
          </S.SecondLevelMenu>

          {/* 1단계 메뉴 */}
          <S.FirstLevelMenu isVisible={isExpanded}>
            <S.QuickButton
              onClick={toggleDownloadMenu}
              className={`download ${showDownloadMenu ? "active" : ""}`}
            >
              {showDownloadMenu ? <HiOutlineXMark /> : <TfiDownload />}
            </S.QuickButton>
            <S.QuickButton onClick={openRecentProducts} className="recent">
              <VscHistory />
            </S.QuickButton>
          </S.FirstLevelMenu>

          {/* 메인 버튼들 */}
          <S.QuickButton
            onClick={toggleExpanded}
            className={`add ${isExpanded ? "rotated" : ""}`}
          >
            <S.IconWrapper>
              {isExpanded ? <HiOutlineXMark /> : <HiOutlinePlus />}
            </S.IconWrapper>
          </S.QuickButton>
          <S.QuickButton onClick={openKakaoTalk} className="talk">
            <S.KakaoImage src={kakaoImage} alt="카카오톡" />
          </S.QuickButton>
          <S.QuickButton onClick={scrollToTop} className="scroll-top">
            <HiArrowUp />
          </S.QuickButton>
        </S.QuickButtonContainer>
      )}
    </>
  );
};

export default QuickButtons;
