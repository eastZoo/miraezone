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
              <S.FooterLogoSubtitle>대한예수교 장로회</S.FooterLogoSubtitle>
              <S.FooterLogoTitle>미래존교회</S.FooterLogoTitle>
            </S.FooterLogoText>
          </Link>
        </S.FooterLogoSection>

        {/* 연락처 정보 */}
        <S.FooterContactInfo>
          <S.ContactItem>
            주소: 48724 부산광역시 동구 정공단로 17번길 16
          </S.ContactItem>
          <S.ContactDivider>|</S.ContactDivider>
          <S.ContactItem>Tel: 051-647-2452~3</S.ContactItem>
          <S.ContactDivider>|</S.ContactDivider>
          <S.ContactItem>Fax: 051-647-2454</S.ContactItem>
        </S.FooterContactInfo>

        {/* 저작권 정보 */}
        <S.FooterCopyright>
          Copyright © 2023 미래존교회 All rights reserved. Designed by (주)스데반정보
        </S.FooterCopyright>
      </S.FooterInner>
    </S.FooterWrapper>
  );
};
