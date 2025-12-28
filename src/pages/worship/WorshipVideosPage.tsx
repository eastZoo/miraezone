import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useWorshipVideos } from "@/lib/hooks/useWorship";
import * as S from "./WorshipPage.style";
import dayjs from "dayjs";

const WorshipVideosPage: React.FC = () => {
  const subMenuItems = [
    { title: "예배 안내", path: "/worship/info" },
    { title: "설교 영상", path: "/worship/videos" },
  ];

  const [page, setPage] = useState(1);
  const [speaker, setSpeaker] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const limit = 10;

  // 설교 영상 목록 조회
  const { data, isLoading } = useWorshipVideos(page, limit, speaker, search);
  const videos = data?.data || [];
  const total = data?.total || 0;

  const totalPages = Math.ceil(total / limit);

  const handleSearch = () => {
    setPage(1);
    // 검색은 useWorshipVideos의 queryKey에 의해 자동으로 재요청됨
  };

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="예배/찬양"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/worship/videos"
        pageTitle="설교 영상"
        breadcrumb={["Home", "예배/찬양", "설교 영상"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="예배/찬양"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/worship/videos"
      pageTitle="설교 영상"
      breadcrumb={["Home", "예배/찬양", "설교 영상"]}
    >
      <S.ContentWrapper>
        {/* 검색 및 필터 */}
        <S.Toolbar>
          <S.ViewMode>
            <S.ViewIcon $active={true}>■</S.ViewIcon>
            <S.ViewIcon>□</S.ViewIcon>
            <S.InfoText>전체 {total}건</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox
              value={speaker}
              onChange={(e) => setSpeaker(e.target.value)}
            >
              <option value="">전체</option>
              <option value="나영호">나영호 목사</option>
              <option value="김철수">김철수 목사</option>
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

        {/* 설교 영상 그리드 */}
        <S.VideosGrid>
          {videos.map((video) => (
            <S.VideoCard key={video.id}>
              <S.VideoThumbnail>
                {video.thumbnailUrl ? (
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <S.ThumbnailPlaceholder>
                    <S.PlayIcon>▶</S.PlayIcon>
                  </S.ThumbnailPlaceholder>
                )}
              </S.VideoThumbnail>
              <S.VideoInfo>
                <S.VideoDate>
                  {dayjs(video.date).format("YYYY.MM.DD")}
                </S.VideoDate>
                <S.VideoTitle>{video.title}</S.VideoTitle>
                <S.VideoMeta>
                  <S.VideoSpeaker>{video.speaker}</S.VideoSpeaker>
                  <S.VideoViews>조회 {video.views}</S.VideoViews>
                </S.VideoMeta>
              </S.VideoInfo>
            </S.VideoCard>
          ))}
        </S.VideosGrid>

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

export default WorshipVideosPage;

