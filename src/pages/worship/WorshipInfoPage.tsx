import React from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useWorshipSchedules, useWorshipNotices } from "@/lib/hooks/useWorship";
import * as S from "./WorshipPage.style";

const WorshipInfoPage: React.FC = () => {
  const subMenuItems = [
    { title: "예배 안내", path: "/worship/info" },
    { title: "설교 영상", path: "/worship/videos" },
  ];

  // 예배 일정 조회 (모든 예배)
  const { data: schedules = [], isLoading: schedulesLoading } =
    useWorshipSchedules();
  // 예배 안내 조회
  const { data: notices = [], isLoading: noticesLoading } = useWorshipNotices();

  // order 기준으로 정렬
  const sortedSchedules = [...schedules].sort((a, b) => a.order - b.order);

  if (schedulesLoading || noticesLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="예배/찬양"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/worship/info"
        pageTitle="예배 안내"
        breadcrumb={["Home", "예배/찬양", "예배 안내"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="예배/찬양"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/worship/info"
      pageTitle="예배 안내"
      breadcrumb={["Home", "예배/찬양", "예배 안내"]}
    >
      <S.ContentWrapper>
        {/* 예배 일정 테이블 (모든 예배 표시) */}
        <S.ScheduleTable>
          <S.ScheduleTableHeader>
            <S.ScheduleTableHeaderCell>예배명</S.ScheduleTableHeaderCell>
            <S.ScheduleTableHeaderCell>시간</S.ScheduleTableHeaderCell>
            <S.ScheduleTableHeaderCell>장소</S.ScheduleTableHeaderCell>
          </S.ScheduleTableHeader>
          <S.ScheduleTableBody>
            {sortedSchedules.length > 0 ? (
              sortedSchedules.map((schedule) => (
                <S.ScheduleTableRow key={schedule.id}>
                  <S.ScheduleTableCell>{schedule.name}</S.ScheduleTableCell>
                  <S.ScheduleTableCell>{schedule.time}</S.ScheduleTableCell>
                  <S.ScheduleTableCell>{schedule.place}</S.ScheduleTableCell>
                </S.ScheduleTableRow>
              ))
            ) : (
              <S.ScheduleTableRow>
                <S.ScheduleTableCell
                  colSpan={3}
                  style={{ textAlign: "center", color: "#999" }}
                >
                  등록된 예배 일정이 없습니다.
                </S.ScheduleTableCell>
              </S.ScheduleTableRow>
            )}
          </S.ScheduleTableBody>
        </S.ScheduleTable>

        <S.WorshipNotice>
          <S.NoticeTitle>예배 안내</S.NoticeTitle>
          <S.NoticeContent>
            {notices.length > 0 ? (
              notices.map((notice) => <p key={notice.id}>{notice.content}</p>)
            ) : (
              <>
                <p>
                  미래존교회는 주일과 수요일, 금요일에 정기 예배를 드립니다.
                  모든 성도 여러분의 참여를 환영합니다.
                </p>
                <p>
                  예배 전 30분 전부터 찬양 연습과 기도회가 진행되오니, 예배에
                  집중할 수 있도록 미리 참석해 주시기 바랍니다.
                </p>
                <p>
                  코로나19 확산 방지를 위해 마스크 착용과 개인 위생 수칙을
                  준수해 주시기 바랍니다.
                </p>
              </>
            )}
          </S.NoticeContent>
        </S.WorshipNotice>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default WorshipInfoPage;
