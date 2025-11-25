import React from "react";

import * as S from "./MainTemplate.style";
import Header from "@/components/atoms/Header";
import HeaderMobile from "@/components/atoms/HeaderMobile";
import QuickButtons from "@/components/containers/QuickButton";
import { Footer } from "@/components/atoms/Footer";
import { useMediaQuery } from "react-responsive";

interface MainTemplateProps {
  children: React.ReactNode;
  mobileHeader?: React.ReactNode;
  webHeader?: React.ReactNode;
  commonUi?: React.ReactNode;
  transparentHeader?: boolean;
}

const MainTemplate = ({
  children,
  mobileHeader,
  webHeader,
  commonUi = true,
  transparentHeader = false,
}: MainTemplateProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const renderHeader = () => {
    if (isMobile) {
      return mobileHeader ?? <HeaderMobile />;
    }

    if (webHeader) {
      return webHeader;
    }

    return <Header isTransparent={transparentHeader} />;
  };

  return (
    <S.Wrapper>
      {/* 헤더 */}
      {renderHeader()}
      {/* /pages 폴더의 페이지들이 위치할 컨테이너 */}
      <S.ContainerWrapper>{children}</S.ContainerWrapper>

      {/* 모바일 버전 디테일 페이지 헤더에서는 필요X인 퀵버튼과 푸터 제거됨
          DetailHeaderMobile과 함께 사용 */}
      {commonUi && (
        <>
          <S.QuickButtonBox>
            <QuickButtons />
          </S.QuickButtonBox>

          <Footer />
        </>
      )}
    </S.Wrapper>
  );
};

export default MainTemplate;
