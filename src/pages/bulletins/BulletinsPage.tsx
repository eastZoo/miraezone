import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useBulletinList } from "@/lib/hooks/useBulletin";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import * as S from "./BulletinsPage.style";
import dayjs from "dayjs";

const BulletinsPage: React.FC = () => {
  const navigate = useNavigate();
  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const limit = 10;

  // 주보 목록 조회
  const { data, isLoading } = useBulletinList(page, limit, search);
  const bulletins = data?.data || [];
  const total = data?.total || 0;

  const totalPages = Math.ceil(total / limit);

  const handleSearch = () => {
    setPage(1);
  };

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/bulletins"
        pageTitle="주보"
        breadcrumb={["Home", "안내/소식", "주보"]}
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
      currentSubMenuPath="/bulletins"
      pageTitle="주보"
      breadcrumb={["Home", "안내/소식", "주보"]}
    >
      <S.ContentWrapper>
        {/* 검색 및 필터 */}
        <S.Toolbar>
          <S.ViewMode>
           
            <S.InfoText>전체 {total}건</S.InfoText>
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

        {/* 주보 목록 - 그리드 형태 */}
        <S.BulletinsGrid>
          {bulletins.map((bulletin) => (
            <S.BulletinCard
              key={bulletin.id}
              onClick={() => navigate(`/bulletins/${bulletin.id}`)}
            >
              <S.BulletinThumbnail>
                {bulletin.thumbnailUrl ? (
                  <img
                    src={bulletin.thumbnailUrl}
                    alt={bulletin.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <S.ThumbnailPlaceholder>
                    <p>주보</p>
                    <p style={{ fontSize: "1.2rem", marginTop: "8px" }}>
                      {dayjs(bulletin.date).format("YYYY.MM.DD")}
                    </p>
                  </S.ThumbnailPlaceholder>
                )}
              </S.BulletinThumbnail>
              <S.BulletinInfo>
                <S.BulletinDate>
                  {dayjs(bulletin.date).format("YYYY.MM.DD")}
                </S.BulletinDate>
                <S.BulletinTitle>{bulletin.title}</S.BulletinTitle>
              </S.BulletinInfo>
            </S.BulletinCard>
          ))}
        </S.BulletinsGrid>

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

export default BulletinsPage;

