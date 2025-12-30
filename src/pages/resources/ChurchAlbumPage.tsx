import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useChurchAlbumList } from "@/lib/hooks/useChurchAlbum";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import * as S from "./ChurchAlbumPage.style";
import dayjs from "dayjs";

const ChurchAlbumPage: React.FC = () => {
  const navigate = useNavigate();
  const subMenuItems = [
    { title: "교회 앨범", path: "/resources/church-albums" },
    // { title: "찬양 자료", path: "/resources/songs" },
    // { title: "다운로드", path: "/resources/downloads" },
  ];

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const limit = 12;

  // 앨범 목록 조회
  const { data, isLoading } = useChurchAlbumList(page, limit, search);
  const albums = data?.data || [];
  const total = data?.total || 0;

  const totalPages = Math.ceil(total / limit);

  const handleSearch = () => {
    setPage(1);
  };

  const handleAlbumClick = (albumId: number) => {
    navigate(`/resources/church-albums/${albumId}`);
  };

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="자료실"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/resources/church-albums"
        pageTitle="교회 앨범"
        breadcrumb={["Home", "자료실", "교회 앨범"]}
      >
        <S.ContentWrapper>
          <LoadingSpinner size="medium" />
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="자료실"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/resources/church-albums"
      pageTitle="교회 앨범"
      breadcrumb={["Home", "자료실", "교회 앨범"]}
    >
      <S.ContentWrapper>
        {/* 검색 */}
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

        {/* 앨범 그리드 */}
        <S.AlbumsGrid>
          {albums.length > 0 ? (
            albums.map((album) => (
              <S.AlbumCard
                key={album.id}
                onClick={() => handleAlbumClick(album.id)}
              >
                <S.AlbumThumbnail>
                  {album.thumbnailUrl ? (
                    <img
                      src={album.thumbnailUrl}
                      alt={album.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <S.ThumbnailPlaceholder>
                      <p>앨범</p>
                    </S.ThumbnailPlaceholder>
                  )}
                </S.AlbumThumbnail>
                <S.AlbumInfo>
                  <S.AlbumDate>
                    {dayjs(album.createdAt).format("YYYY.MM.DD")}
                  </S.AlbumDate>
                  <S.AlbumTitle>{album.title}</S.AlbumTitle>
                  <S.AlbumMeta>
                    <S.AlbumViews>조회 {album.views}</S.AlbumViews>
                  </S.AlbumMeta>
                </S.AlbumInfo>
              </S.AlbumCard>
            ))
          ) : (
            <S.NoAlbums>등록된 앨범이 없습니다.</S.NoAlbums>
          )}
        </S.AlbumsGrid>

        {/* 페이지네이션 */}
        {totalPages > 0 && (
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
        )}
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default ChurchAlbumPage;
