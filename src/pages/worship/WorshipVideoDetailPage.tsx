import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import {
  useWorshipVideo,
  useWorshipVideoNavigation,
} from "@/lib/hooks/useWorship";
import { convertToEmbedUrl } from "@/lib/utils/youtubeUtils";
import * as S from "./WorshipVideoDetailPage.style";
import dayjs from "dayjs";

const WorshipVideoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const videoId = id ? parseInt(id) : 0;

  const subMenuItems = [
    { title: "예배 안내", path: "/worship/info" },
    { title: "설교 영상", path: "/worship/videos" },
  ];

  const { data: video, isLoading } = useWorshipVideo(videoId);
  const { data: navigation } = useWorshipVideoNavigation(videoId);

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="예배/찬양"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/worship/videos"
        pageTitle="설교 영상"
        breadcrumb={["Home", "예배/찬양", "설교 영상", "상세보기"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  if (!video) {
    return (
      <SubMenuTemplate
        mainMenuTitle="예배/찬양"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/worship/videos"
        pageTitle="설교 영상"
        breadcrumb={["Home", "예배/찬양", "설교 영상", "상세보기"]}
      >
        <S.ContentWrapper>
          <S.NotFound>설교 영상을 찾을 수 없습니다.</S.NotFound>
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  const embedUrl = video.videoUrl ? convertToEmbedUrl(video.videoUrl) : null;

  return (
    <SubMenuTemplate
      mainMenuTitle="예배/찬양"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/worship/videos"
      pageTitle="설교 영상"
      breadcrumb={["Home", "예배/찬양", "설교 영상", video.title]}
    >
      <S.ContentWrapper>
        <S.DetailContainer>
          {/* 헤더 */}
          <S.DetailHeader>
            <S.TitleSection>
              <S.Title>{video.title}</S.Title>
              <S.MetaInfo>
                <S.Speaker>설교자: {video.speaker}</S.Speaker>
                <S.Date>{dayjs(video.date).format("YYYY.MM.DD")}</S.Date>
                <S.Views>조회 {video.views}</S.Views>
              </S.MetaInfo>
            </S.TitleSection>
            <S.BackButton onClick={() => navigate("/worship/videos")}>
              목록으로
            </S.BackButton>
          </S.DetailHeader>

          {/* 유튜브 영상 임베드 */}
          {embedUrl ? (
            <S.VideoContainer>
              <S.VideoIframe
                src={embedUrl}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </S.VideoContainer>
          ) : (
            <S.NoVideo>영상 URL이 없습니다.</S.NoVideo>
          )}

          {/* 이전/다음 글 */}
          <S.NavigationSection>
            {navigation?.prev ? (
              <S.NavigationItem
                onClick={() =>
                  navigate(`/worship/videos/${navigation.prev!.id}`)
                }
              >
                <S.NavigationLeft>
                  <S.NavigationArrow>^</S.NavigationArrow>
                  <S.NavigationLabel>이전</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationRight>
                  <S.NavigationTitle>{navigation.prev.title}</S.NavigationTitle>
                  <S.NavigationAuthor>{video.speaker}</S.NavigationAuthor>
                  <S.NavigationDate>
                    {dayjs(video.date).format("YYYY-MM-DD")}
                  </S.NavigationDate>
                </S.NavigationRight>
              </S.NavigationItem>
            ) : (
              <S.NavigationEmpty>
                <S.NavigationLeft>
                  <S.NavigationArrow>^</S.NavigationArrow>
                  <S.NavigationLabel>이전</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationEmptyText>이전글이 없습니다.</S.NavigationEmptyText>
              </S.NavigationEmpty>
            )}
            {navigation?.next ? (
              <S.NavigationItem
                onClick={() =>
                  navigate(`/worship/videos/${navigation.next!.id}`)
                }
              >
                <S.NavigationLeft>
                  <S.NavigationArrow>v</S.NavigationArrow>
                  <S.NavigationLabel>다음</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationRight>
                  <S.NavigationTitle>{navigation.next.title}</S.NavigationTitle>
                  <S.NavigationAuthor>{video.speaker}</S.NavigationAuthor>
                  <S.NavigationDate>
                    {dayjs(video.date).format("YYYY-MM-DD")}
                  </S.NavigationDate>
                </S.NavigationRight>
              </S.NavigationItem>
            ) : (
              <S.NavigationEmpty>
                <S.NavigationLeft>
                  <S.NavigationArrow>v</S.NavigationArrow>
                  <S.NavigationLabel>다음</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationEmptyText>다음글이 없습니다.</S.NavigationEmptyText>
              </S.NavigationEmpty>
            )}
          </S.NavigationSection>
        </S.DetailContainer>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default WorshipVideoDetailPage;

