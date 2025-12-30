import React from "react";

import * as S from "./MainTemplate.style";
import Header from "@/components/atoms/Header";
import { Footer } from "@/components/atoms/Footer";

interface MainTemplateProps {
  children: React.ReactNode;
  webHeader?: React.ReactNode;
  commonUi?: React.ReactNode;
  transparentHeader?: boolean;
}

const MainTemplate = ({
  children,
  webHeader,
  commonUi = true,
  transparentHeader = false,
}: MainTemplateProps) => {
  return (
    <S.Wrapper>
      {/* 헤더 - CSS 반응형으로 모바일/데스크톱 처리 */}
      {webHeader || <Header isTransparent={transparentHeader} />}
      {/* /pages 폴더의 페이지들이 위치할 컨테이너 */}
      <S.ContainerWrapper>{children}</S.ContainerWrapper>

      {/* 모바일 버전 디테일 페이지 헤더에서는 필요X인 퀵버튼과 푸터 제거됨
          DetailHeaderMobile과 함께 사용 */}
      {commonUi && (
        <>
          {/* <S.QuickButtonBox>
            <QuickButtons />
          </S.QuickButtonBox> */}

          <Footer />
        </>
      )}
    </S.Wrapper>
  );
};

export default MainTemplate;
