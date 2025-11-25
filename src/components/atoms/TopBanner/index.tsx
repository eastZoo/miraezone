import * as S from "./TopBanner.style";
import { RiCloseLargeFill } from "react-icons/ri";
import Applogo from "@/styles/assets/images/bumin_app_logo.png";

interface TopBannerProps {
  onClose?: () => void;
}

const TopBanner: React.FC<TopBannerProps> = ({ onClose }) => {
  return (
    <S.TopBannerContainer>
      {/* 닫기 버튼 */}
      <S.CloseButton onClick={onClose} aria-label="닫기">
        <RiCloseLargeFill/>
      </S.CloseButton>

      <S.BannerContent>
        <S.AppLogo src={Applogo} alt="부민축산 앱로고"/>
        <S.BannerText>지금 가입하고 <span>추천인 입력</span>하면 <span>1,000p</span>!</S.BannerText>
      </S.BannerContent>

      <S.AppOpenButton>
        <a href="/">앱 열기</a>
      </S.AppOpenButton>
    </S.TopBannerContainer>
  );
};

export default TopBanner;