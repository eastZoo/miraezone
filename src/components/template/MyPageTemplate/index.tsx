import type React from "react";
import * as S from "./MyPageTemplate.style"
import { MyPageMenu } from "@/components/atoms/MyPageMenu";

interface MyPageTemplateProps {
  children: React.ReactNode;
  showMenu?: boolean;
}

export default function MyPageTemplate ({ children, showMenu = true }:MyPageTemplateProps) {
  return (
    <S.MyPageTemplateWrapper>
      {/* 마이페이지 메뉴 */}
    {showMenu && (<MyPageMenu />)}
    
      {/* /mypage 폴더의 페이지들이 위치할 컨테이너 */}
      <S.MyPageTemplateContent>{children}</S.MyPageTemplateContent>
    </S.MyPageTemplateWrapper>
  );
};