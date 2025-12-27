import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./WorshipPage.style";

const WorshipInfoPage: React.FC = () => {
  const subMenuItems = [
    { title: "예배 안내", path: "/worship/info" },
    { title: "설교 영상", path: "/worship/videos" },
  ];

  return (
    <SubMenuTemplate
      mainMenuTitle="예배/찬양"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/worship/info"
      pageTitle="예배 안내"
      breadcrumb={["Home", "예배/찬양", "예배 안내"]}
    >
      <S.ContentWrapper>
        <S.WorshipSchedule>
          <S.ScheduleSection>
            <S.ScheduleTitle>주일 예배</S.ScheduleTitle>
            <S.ScheduleList>
              <S.ScheduleItem>
                <S.ScheduleTime>오전 9:00</S.ScheduleTime>
                <S.ScheduleName>새벽 예배</S.ScheduleName>
                <S.SchedulePlace>본당</S.SchedulePlace>
              </S.ScheduleItem>
              <S.ScheduleItem>
                <S.ScheduleTime>오전 11:00</S.ScheduleTime>
                <S.ScheduleName>1부 예배</S.ScheduleName>
                <S.SchedulePlace>본당</S.SchedulePlace>
              </S.ScheduleItem>
              <S.ScheduleItem>
                <S.ScheduleTime>오후 2:00</S.ScheduleTime>
                <S.ScheduleName>2부 예배</S.ScheduleName>
                <S.SchedulePlace>본당</S.SchedulePlace>
              </S.ScheduleItem>
              <S.ScheduleItem>
                <S.ScheduleTime>오후 4:00</S.ScheduleTime>
                <S.ScheduleName>청년 예배</S.ScheduleName>
                <S.SchedulePlace>청년실</S.SchedulePlace>
              </S.ScheduleItem>
            </S.ScheduleList>
          </S.ScheduleSection>

          <S.ScheduleSection>
            <S.ScheduleTitle>수요 예배</S.ScheduleTitle>
            <S.ScheduleList>
              <S.ScheduleItem>
                <S.ScheduleTime>오후 7:30</S.ScheduleTime>
                <S.ScheduleName>수요 저녁 예배</S.ScheduleName>
                <S.SchedulePlace>본당</S.SchedulePlace>
              </S.ScheduleItem>
            </S.ScheduleList>
          </S.ScheduleSection>

          <S.ScheduleSection>
            <S.ScheduleTitle>금요 예배</S.ScheduleTitle>
            <S.ScheduleList>
              <S.ScheduleItem>
                <S.ScheduleTime>오후 8:00</S.ScheduleTime>
                <S.ScheduleName>금요 철야 예배</S.ScheduleName>
                <S.SchedulePlace>본당</S.SchedulePlace>
              </S.ScheduleItem>
            </S.ScheduleList>
          </S.ScheduleSection>
        </S.WorshipSchedule>

        <S.WorshipNotice>
          <S.NoticeTitle>예배 안내</S.NoticeTitle>
          <S.NoticeContent>
            <p>
              미래존교회는 주일과 수요일, 금요일에 정기 예배를 드립니다. 모든 성도 여러분의
              참여를 환영합니다.
            </p>
            <p>
              예배 전 30분 전부터 찬양 연습과 기도회가 진행되오니, 예배에 집중할 수 있도록
              미리 참석해 주시기 바랍니다.
            </p>
            <p>
              코로나19 확산 방지를 위해 마스크 착용과 개인 위생 수칙을 준수해 주시기
              바랍니다.
            </p>
          </S.NoticeContent>
        </S.WorshipNotice>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default WorshipInfoPage;

