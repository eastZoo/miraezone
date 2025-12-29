import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNewsList } from "@/lib/hooks/useNews";
import * as S from "./NewsPage.style";
import dayjs from "dayjs";

const NewsPage: React.FC = () => {
  const navigate = useNavigate();
  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const limit = 10;

  // 교회 소식 목록 조회
  const { data, isLoading } = useNewsList(page, limit, category, search);
  const news = data?.data || [];
  const total = data?.total || 0;

  const totalPages = Math.ceil(total / limit);
  const newCount = news.filter((n) => n.isNew).length;

  const handleSearch = () => {
    setPage(1);
  };

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/news"
        pageTitle="교회 소식"
        breadcrumb={["Home", "안내/소식", "교회 소식"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

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
            <S.InfoText>
              새글 {newCount}/{total}
            </S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">전체</option>
              <option value="예배">예배</option>
              <option value="행사">행사</option>
              <option value="선교">선교</option>
              <option value="소식">소식</option>
            </S.SelectBox>
            <S.SearchInput
              type="text"
              placeholder="검색어를 입력하세요"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 교회 소식 목록 */}
        <S.NewsList>
          {news.map((item) => (
            <S.NewsItem
              key={item.id}
              onClick={() => navigate(`/news/${item.id}`)}
            >
              <S.NewsCategory>{item.category}</S.NewsCategory>
              <S.NewsTitle>
                {item.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {item.title}
              </S.NewsTitle>
              <S.NewsMeta>
                <S.NewsDate>
                  {dayjs(item.createdAt).format("YYYY.MM.DD")}
                </S.NewsDate>
                <S.NewsViews>조회 {item.views}</S.NewsViews>
              </S.NewsMeta>
            </S.NewsItem>
          ))}
        </S.NewsList>

        {/* 페이지네이션 */}
        <S.Pagination>
          <S.PaginationButton
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            이전
          </S.PaginationButton>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <S.PaginationNumber
              key={num}
              $active={num === page}
              onClick={() => setPage(num)}
            >
              {num}
            </S.PaginationNumber>
          ))}
          <S.PaginationButton
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            다음
          </S.PaginationButton>
        </S.Pagination>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default NewsPage;
