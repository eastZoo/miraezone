import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useWorshipVideos } from "@/lib/hooks/useWorship";
import { extractYouTubeThumbnail } from "@/lib/utils/youtubeUtils";
import * as S from "./WorshipPage.style";
import dayjs from "dayjs";

const WorshipVideosPage: React.FC = () => {
  const navigate = useNavigate();
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

  // 유튜브 썸네일 URL 추출
  const videosWithThumbnails = useMemo(() => {
    return videos.map((video) => {
      let thumbnailUrl = video.thumbnailUrl;
      if (!thumbnailUrl && video.videoUrl) {
        thumbnailUrl = extractYouTubeThumbnail(video.videoUrl) || undefined;
      }
      return { ...video, thumbnailUrl };
    });
  }, [videos]);

  const handleSearch = () => {
    setPage(1);
    // 검색은 useWorshipVideos의 queryKey에 의해 자동으로 재요청됨
  };

  const handleVideoClick = (videoId: number) => {
    navigate(`/worship/videos/${videoId}`);
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

        {/* 설교 영상 테이블 */}
        <S.VideosTable>
          <S.VideosTableHeader>
            <S.VideosTableHeaderCell style={{ width: "80px" }}>
              No
            </S.VideosTableHeaderCell>
            <S.VideosTableHeaderCell style={{ width: "120px" }}>
              사진
            </S.VideosTableHeaderCell>
            <S.VideosTableHeaderCell>제목</S.VideosTableHeaderCell>
            <S.VideosTableHeaderCell>설교자</S.VideosTableHeaderCell>
            <S.VideosTableHeaderCell style={{ width: "120px" }}>
              날짜
            </S.VideosTableHeaderCell>
          </S.VideosTableHeader>
          <S.VideosTableBody>
            {videosWithThumbnails.length > 0 ? (
              videosWithThumbnails.map((video, index) => {
                // 페이지네이션을 고려한 번호 계산
                const no = total - (page - 1) * limit - index;
                return (
                  <S.VideosTableRow
                    key={video.id}
                    onClick={() => handleVideoClick(video.id)}
                  >
                    <S.VideosTableCell style={{ textAlign: "center" }}>
                      {no}
                    </S.VideosTableCell>
                    <S.VideosTableCell>
                      {video.thumbnailUrl ? (
                        <S.VideoThumbnailImg
                          src={video.thumbnailUrl}
                          alt={video.title}
                          onError={(e) => {
                            // 썸네일 로드 실패 시 플레이스홀더 표시
                            e.currentTarget.style.display = "none";
                            e.currentTarget.nextElementSibling?.classList.remove(
                              "hidden"
                            );
                          }}
                        />
                      ) : null}
                      <S.ThumbnailPlaceholder
                        className={video.thumbnailUrl ? "hidden" : ""}
                      >
                        <S.PlayIcon>▶</S.PlayIcon>
                      </S.ThumbnailPlaceholder>
                    </S.VideosTableCell>
                    <S.VideosTableCell>
                      <S.VideoTitleText>{video.title}</S.VideoTitleText>
                    </S.VideosTableCell>
                    <S.VideosTableCell>{video.speaker}</S.VideosTableCell>
                    <S.VideosTableCell>
                      {dayjs(video.date).format("YYYY.MM.DD")}
                    </S.VideosTableCell>
                  </S.VideosTableRow>
                );
              })
            ) : (
              <S.VideosTableRow>
                <S.VideosTableCell
                  colSpan={5}
                  style={{ textAlign: "center", color: "#999" }}
                >
                  등록된 설교 영상이 없습니다.
                </S.VideosTableCell>
              </S.VideosTableRow>
            )}
          </S.VideosTableBody>
        </S.VideosTable>

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
