import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./NextGenNewsPage.style";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  department: string;
  views: number;
  isNew?: boolean;
}

const NextGenNewsPage: React.FC = () => {
  const subMenuItems = [
    { title: "유초등부", path: "/nextgen/elementary" },
    { title: "중고등부", path: "/nextgen/youth" },
    { title: "청년부", path: "/nextgen/youngadult" },
    { title: "다음세대 소식", path: "/nextgen/news" },
  ];

  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      title: "2025년 겨울 수양회 참가 신청 안내",
      date: "2025.01.10",
      department: "전체",
      views: 234,
      isNew: true,
    },
    {
      id: 2,
      title: "유초등부 새로운 선생님 환영 예배",
      date: "2025.01.08",
      department: "유초등부",
      views: 189,
      isNew: true,
    },
    {
      id: 3,
      title: "중고등부 신학기 모임 안내",
      date: "2025.01.05",
      department: "중고등부",
      views: 156,
    },
    {
      id: 4,
      title: "청년부 새해 목표 세우기 모임",
      date: "2024.12.28",
      department: "청년부",
      views: 278,
    },
    {
      id: 5,
      title: "2024년 연말 다음세대 축제 후기",
      date: "2024.12.20",
      department: "전체",
      views: 312,
    },
  ]);

  return (
    <SubMenuTemplate
      mainMenuTitle="다음세대"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/nextgen/news"
      pageTitle="다음세대 소식"
      breadcrumb={["Home", "다음세대", "다음세대 소식"]}
    >
      <S.ContentWrapper>
        {/* 검색 및 필터 */}
        <S.Toolbar>
          <S.ViewMode>
            <S.ViewIcon $active={true}>■</S.ViewIcon>
            <S.ViewIcon>□</S.ViewIcon>
            <S.InfoText>새글 {news.filter((n) => n.isNew).length}/{news.length}</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox>
              <option>전체</option>
              <option>유초등부</option>
              <option>중고등부</option>
              <option>청년부</option>
            </S.SelectBox>
            <S.SelectBox>
              <option>제목</option>
              <option>내용</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 소식 목록 */}
        <S.NewsList>
          {news.map((item) => (
            <S.NewsItem key={item.id}>
              <S.NewsDepartment>{item.department}</S.NewsDepartment>
              <S.NewsTitle>
                {item.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {item.title}
              </S.NewsTitle>
              <S.NewsMeta>
                <S.NewsDate>{item.date}</S.NewsDate>
                <S.NewsViews>조회 {item.views}</S.NewsViews>
              </S.NewsMeta>
            </S.NewsItem>
          ))}
        </S.NewsList>

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

export default NextGenNewsPage;

