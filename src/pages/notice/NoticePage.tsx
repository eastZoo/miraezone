import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNoticeList } from "@/lib/hooks/useNotice";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import * as S from "./NoticePage.style";
import dayjs from "dayjs";

const NoticePage: React.FC = () => {
  const navigate = useNavigate();
  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const limit = 10;

  // 공지사항 목록 조회
  const { data, isLoading } = useNoticeList(page, limit, search);
  const notices = data?.data || [];
  const total = data?.total || 0;

  const totalPages = Math.ceil(total / limit);
  const newCount = notices.filter((n) => n.isNew).length;

  const handleSearch = () => {
    setPage(1);
  };

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/notice"
        pageTitle="공지사항"
        breadcrumb={["Home", "안내/소식", "공지사항"]}
      >
        <S.ContentWrapper>
          <LoadingSpinner size="medium" />
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

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
            <S.InfoText>
              새글 {newCount}/{total}
            </S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
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

        {/* 공지사항 목록 */}
        <S.NoticeList>
          {notices.map((notice) => (
            <S.NoticeItem
              key={notice.id}
              onClick={() => navigate(`/notice/${notice.id}`)}
            >
              <S.NoticeTitle>
                {notice.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {notice.isImportant && <S.NewBadge>중요</S.NewBadge>}
                {notice.title}
              </S.NoticeTitle>
              <S.NoticeMeta>
                <S.NoticeDate>
                  {dayjs(notice.createdAt).format("YYYY.MM.DD")}
                </S.NoticeDate>
                <S.NoticeViews>조회 {notice.views}</S.NoticeViews>
              </S.NoticeMeta>
            </S.NoticeItem>
          ))}
        </S.NoticeList>

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

export default NoticePage;
