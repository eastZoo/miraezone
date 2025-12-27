import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./WorshipPage.style";

interface VideoItem {
  id: number;
  title: string;
  date: string;
  speaker: string;
  thumbnail?: string;
  views: number;
}

const WorshipVideosPage: React.FC = () => {
  const subMenuItems = [
    { title: "예배 안내", path: "/worship/info" },
    { title: "설교 영상", path: "/worship/videos" },
  ];

  const [videos] = useState<VideoItem[]>([
    {
      id: 1,
      title: "새해를 향한 믿음의 출발",
      date: "2025.01.12",
      speaker: "나영호 담임목사",
      views: 1234,
    },
    {
      id: 2,
      title: "하나님의 약속을 신뢰하라",
      date: "2025.01.05",
      speaker: "나영호 담임목사",
      views: 987,
    },
    {
      id: 3,
      title: "2024년 연말 감사 예배",
      date: "2024.12.29",
      speaker: "나영호 담임목사",
      views: 1567,
    },
    {
      id: 4,
      title: "성탄절 특별 예배",
      date: "2024.12.25",
      speaker: "나영호 담임목사",
      views: 2341,
    },
    {
      id: 5,
      title: "하나님을 향한 감사",
      date: "2024.12.22",
      speaker: "김철수 부목사",
      views: 756,
    },
    {
      id: 6,
      title: "참된 복음의 능력",
      date: "2024.12.15",
      speaker: "나영호 담임목사",
      views: 1123,
    },
  ]);

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
            <S.InfoText>전체 {videos.length}건</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox>
              <option>전체</option>
              <option>나영호 목사</option>
              <option>김철수 목사</option>
            </S.SelectBox>
            <S.SelectBox>
              <option>제목</option>
              <option>설교자</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 설교 영상 그리드 */}
        <S.VideosGrid>
          {videos.map((video) => (
            <S.VideoCard key={video.id}>
              <S.VideoThumbnail>
                <S.ThumbnailPlaceholder>
                  <S.PlayIcon>▶</S.PlayIcon>
                </S.ThumbnailPlaceholder>
              </S.VideoThumbnail>
              <S.VideoInfo>
                <S.VideoDate>{video.date}</S.VideoDate>
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

export default WorshipVideosPage;

