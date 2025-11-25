import * as S from "./MyPageProfile.style";
import { IoMdSettings } from "react-icons/io";

interface MyPageProfileProps {
  name: string;
  point?: number;
  onEditProfile?: () => void;
};

export default function MyPageProfile({
  name,
  point = 0,
  onEditProfile,
}: MyPageProfileProps) {
  return (
    <S.MyPageProfileWrap>
      <S.ProfileTop>
        {/* 회원정보수정 버튼 */}
        <S.EditBtn type="button" onClick={onEditProfile}>
            <IoMdSettings /> 회원정보수정
        </S.EditBtn>
        
        {/* 프로필 정보 영역 */}
        <S.ProfileInfo>
          {/* 사용자 명 및 포인트 */}
          <S.ProfileLeft>
            <S.UserName>{name} <span>님</span></S.UserName>
            <S.PointRow>
              <span className="Label">보유포인트</span>
              <span className="Value">
                {point.toLocaleString()}
                <small>P</small>
              </span>
            </S.PointRow>
          </S.ProfileLeft>

          {/* 사용자 정보 */}
          <S.ProfileRight>
            <S.ProfileInfoList>
              <S.ProfileInfoItem>
                  <S.Label>최종접속일시</S.Label>
                  <S.Value>2025-08-13 11:09:36</S.Value>
                </S.ProfileInfoItem>

                <S.ProfileInfoItem>
                  <S.Label>회원가입일시</S.Label>
                  <S.Value>2024-08-13 11:09:36</S.Value>
                </S.ProfileInfoItem>

                <S.ProfileInfoItem>
                  <S.Label>휴대폰번호</S.Label>
                  <S.Value>010-1234-5678</S.Value>
                </S.ProfileInfoItem>

                <S.ProfileInfoItem>
                  <S.Label>E-Mail</S.Label>
                  <S.Value>bumin@naver.com</S.Value>
                </S.ProfileInfoItem>

                <S.ProfileInfoItem>
                  <S.Label>주소</S.Label>
                  <S.Value>부산광역시 사상구 사상로565번길 19(모라동)</S.Value>
                </S.ProfileInfoItem>
            </S.ProfileInfoList>
          </S.ProfileRight>
        </S.ProfileInfo>
      </S.ProfileTop>

      {/* 하단 배너 영역 */}
      <S.BottomBanner>
        지금 부민축산카드 가입하시고, 다양한 혜택을 만나보세요!
      </S.BottomBanner>
    </S.MyPageProfileWrap>
  );
}
