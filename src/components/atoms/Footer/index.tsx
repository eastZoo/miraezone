import * as S from "./Footer.style";
import { Link } from "react-router-dom";
import logo from "@/styles/assets/images/church_logo.png";

export const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterInner>
        {/* 로고 및 교회명 */}
        <S.FooterLogoSection>
          <Link to="/">
            <S.FooterLogoImage src={logo} alt="교회 로고" />
            <S.FooterLogoText>
              <S.FooterLogoSubtitle>기독교대한성결교회</S.FooterLogoSubtitle>
              <S.FooterLogoTitle>미래존교회</S.FooterLogoTitle>
            </S.FooterLogoText>
          </Link>
        </S.FooterLogoSection>

        {/* 연락처 정보 */}
        <S.FooterContactInfo>
          <S.ContactItem>
            주소: 부산 동래구 시실로211번길 6 (명장동)
          </S.ContactItem>
          <S.ContactDivider>|</S.ContactDivider>
          <S.ContactItem>Tel: 051-524-5112</S.ContactItem>
          <S.ContactDivider>|</S.ContactDivider>
          <S.ContactItem>Fax: 051-524-5113</S.ContactItem>
        </S.FooterContactInfo>

        {/* 저작권 정보 */}
        <S.FooterCopyright>
          Copyright © 2025 미래존교회 All rights reserved. Designed by eastZoo
        </S.FooterCopyright>
      </S.FooterInner>
    </S.FooterWrapper>
  );
};
