import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./NewsPage.style";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  views: number;
  isNew?: boolean;
}

const NewsPage: React.FC = () => {
  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      title: "2025년 1월 교회 소식지 발행",
      date: "2025.01.15",
      category: "소식",
      views: 234,
      isNew: true,
    },
    {
      id: 2,
      title: "겨울 수양회 후기 및 사진",
      date: "2025.01.10",
      category: "행사",
      views: 189,
      isNew: true,
    },
    {
      id: 3,
      title: "새 신자 환영 예배 안내",
      date: "2025.01.05",
      category: "예배",
      views: 156,
    },
    {
      id: 4,
      title: "2024년 연말 감사 예배 후기",
      date: "2024.12.30",
      category: "예배",
      views: 278,
    },
    {
      id: 5,
      title: "선교사 파송 예배 소식",
      date: "2024.12.25",
      category: "선교",
      views: 312,
    },
  ]);

  return (
    <SubMenuTemplate
      mainMenuTitle="안내/소식"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/news"
      pageTitle="교회 소식"
      breadcrumb={["Home", "안내/소식", "교회 소식"]}
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
              <option>예배</option>
              <option>행사</option>
              <option>선교</option>
              <option>소식</option>
            </S.SelectBox>
            <S.SelectBox>
              <option>제목</option>
              <option>내용</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 교회 소식 목록 */}
        <S.NewsList>
          {news.map((item) => (
            <S.NewsItem key={item.id}>
              <S.NewsCategory>{item.category}</S.NewsCategory>
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

export default NewsPage;

