import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNextGenList } from "@/lib/hooks/useNextGen";
import * as S from "./NextGenNewsPage.style";
import dayjs from "dayjs";

const NextGenNewsPage: React.FC = () => {
  const navigate = useNavigate();
  const subMenuItems = [
    { title: "유초등부", path: "/nextgen/elementary" },
    { title: "중고등부", path: "/nextgen/youth" },
    { title: "청년부", path: "/nextgen/youngadult" },
    { title: "다음세대 소식", path: "/nextgen/news" },
  ];

  const [page, setPage] = useState(1);
  const [department, setDepartment] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const limit = 10;

  // 다음세대 소식 목록 조회
  const { data, isLoading } = useNextGenList(page, limit, department, search);
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
        mainMenuTitle="다음세대"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/nextgen/news"
        pageTitle="다음세대 소식"
        breadcrumb={["Home", "다음세대", "다음세대 소식"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

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
            <S.InfoText>
              새글 {newCount}/{total}
            </S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">전체</option>
              <option value="유초등부">유초등부</option>
              <option value="중고등부">중고등부</option>
              <option value="청년부">청년부</option>
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

        {/* 소식 목록 */}
        <S.NewsList>
          {news.map((item) => (
            <S.NewsItem
              key={item.id}
              onClick={() => navigate(`/nextgen/news/${item.id}`)}
            >
              <S.NewsDepartment>{item.department}</S.NewsDepartment>
              <S.NewsTitle>
                {item.isNotice && <S.NoticeBadge>공지</S.NoticeBadge>}
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

export default NextGenNewsPage;
