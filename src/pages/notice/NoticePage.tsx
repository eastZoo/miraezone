import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./NoticePage.style";

interface NoticeItem {
  id: number;
  title: string;
  date: string;
  views: number;
  isNew?: boolean;
}

const NoticePage: React.FC = () => {
  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const [notices] = useState<NoticeItem[]>([
    {
      id: 1,
      title: "2025년 새해 인사말",
      date: "2025.01.01",
      views: 123,
      isNew: true,
    },
    {
      id: 2,
      title: "1월 예배 및 모임 안내",
      date: "2024.12.28",
      views: 89,
      isNew: true,
    },
    {
      id: 3,
      title: "겨울 수양회 참가 안내",
      date: "2024.12.20",
      views: 156,
    },
    {
      id: 4,
      title: "연말 감사 예배 안내",
      date: "2024.12.15",
      views: 234,
    },
    {
      id: 5,
      title: "12월 성도와의 만남",
      date: "2024.12.10",
      views: 98,
    },
  ]);

  return (
    <SubMenuTemplate
      mainMenuTitle="안내/소식"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/notice"
      pageTitle="공지사항"
      breadcrumb={["Home", "안내/소식", "공지사항"]}
    >
      <S.ContentWrapper>
        {/* 검색 및 필터 */}
        <S.Toolbar>
          <S.ViewMode>
            <S.ViewIcon $active={true}>■</S.ViewIcon>
            <S.ViewIcon>□</S.ViewIcon>
            <S.InfoText>새글 {notices.filter((n) => n.isNew).length}/{notices.length}</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox>
              <option>제목</option>
              <option>내용</option>
              <option>작성자</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 공지사항 목록 */}
        <S.NoticeList>
          {notices.map((notice) => (
            <S.NoticeItem key={notice.id}>
              <S.NoticeTitle>
                {notice.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {notice.title}
              </S.NoticeTitle>
              <S.NoticeMeta>
                <S.NoticeDate>{notice.date}</S.NoticeDate>
                <S.NoticeViews>조회 {notice.views}</S.NoticeViews>
              </S.NoticeMeta>
            </S.NoticeItem>
          ))}
        </S.NoticeList>

        {/* 페이지네이션 */}
        <S.Pagination>
          <S.PaginationButton disabled>이전</S.PaginationButton>
          <S.PaginationNumber $active={true}>1</S.PaginationNumber>
          <S.PaginationNumber>2</S.PaginationNumber>
          <S.PaginationNumber>3</S.PaginationNumber>
          <S.PaginationButton>다음</S.PaginationButton>
        </S.Pagination>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default NoticePage;

