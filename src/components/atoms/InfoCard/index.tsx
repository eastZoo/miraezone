import React from "react";
import * as S from "./InfoCard.style";
import { FaCirclePlus } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

interface Notice {
  id: number;
  title: string;
  date: string;
}

interface InfoCardProps {
  notices?: Notice[];
}

const InfoCard: React.FC<InfoCardProps> = ({ notices = [] }) => {
  const defaultNotices: Notice[] = [
    {
      id: 1,
      title: "부민축산 카드 출시 혜택 안내드립니다. 부민축산카...",
      date: "2025-08-08",
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const displayNotices = notices.length > 0 ? notices : defaultNotices;

  return (
    <S.InfoCardContainer>
      <S.InfoCardContent>
        {/* 고객센터 정보 */}
        <S.CustomerServiceSection>
          <S.ServiceInfoWrapper>
            <S.ServiceInfo>
              <S.ServiceTitle>부민축산 원육 고객센터</S.ServiceTitle>
              <S.PhoneNumber>010-5076-0406</S.PhoneNumber>
            </S.ServiceInfo>

            <S.ServiceInfo>
              <S.ServiceTitle>가림에프앤씨 세절육 고객센터</S.ServiceTitle>
              <S.PhoneNumber>051-722-3666</S.PhoneNumber>
            </S.ServiceInfo>
          </S.ServiceInfoWrapper>

          <S.OperatingHours>
            <S.HoursText>평일 : 09시 ~ 18시 (토요일, 공휴일 휴무)</S.HoursText>
            <S.HoursText>점심 : 오후 12시 ~ 오후 1시</S.HoursText>
          </S.OperatingHours>
        </S.CustomerServiceSection>

        {/* 계좌안내 및 공지사항 */}
        <S.AccountNoticeSection>
          <S.AccountInfoWrapper>
            <S.AccountInfo>
              <S.AccountTitle>계좌안내</S.AccountTitle>
              <S.AccountNumber>1105804747730</S.AccountNumber>
            </S.AccountInfo>

            <S.BankInfo>
              우리은행 <span>(예금주 : 주식회사 부민축산)</span>
            </S.BankInfo>
          </S.AccountInfoWrapper>

        {!isMobile && (
          <S.NoticeSection>
            <S.NoticeHeader>
              <S.NoticeTitle>공지사항</S.NoticeTitle>
              <S.ViewAllLink href="/notices">
                전체보기
                <FaCirclePlus size={18} />
              </S.ViewAllLink>
            </S.NoticeHeader>

            <S.NoticeList>
              {displayNotices.map((notice) => (
                <S.NoticeItem key={notice.id}>
                  <S.NoticeText>{notice.title}</S.NoticeText>
                  <S.NoticeDate>{notice.date}</S.NoticeDate>
                </S.NoticeItem>
              ))}
            </S.NoticeList>
          </S.NoticeSection>
        )}
        </S.AccountNoticeSection>
      </S.InfoCardContent>
    </S.InfoCardContainer>
  );
};

export default InfoCard;
