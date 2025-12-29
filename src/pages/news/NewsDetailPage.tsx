import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNews } from "@/lib/hooks/useNews";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import * as S from "./NewsDetailPage.style";
import dayjs from "dayjs";

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const newsId = id ? parseInt(id) : 0;

  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const { data: news, isLoading } = useNews(newsId);

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/news"
        pageTitle="교회 소식"
        breadcrumb={["Home", "안내/소식", "교회 소식", "상세보기"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  if (!news) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/news"
        pageTitle="교회 소식"
        breadcrumb={["Home", "안내/소식", "교회 소식", "상세보기"]}
      >
        <S.ContentWrapper>
          <S.NotFound>교회 소식을 찾을 수 없습니다.</S.NotFound>
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="안내/소식"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/news"
      pageTitle="교회 소식"
      breadcrumb={["Home", "안내/소식", "교회 소식", news.title]}
    >
      <S.ContentWrapper>
        <S.DetailContainer>
          {/* 헤더 */}
          <S.DetailHeader>
            <S.TitleSection>
              <S.Title>
                <S.CategoryBadge>{news.category}</S.CategoryBadge>
                {news.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {news.title}
              </S.Title>
              <S.MetaInfo>
                {news.author && <S.Author>작성자: {news.author}</S.Author>}
                <S.Date>{dayjs(news.createdAt).format("YYYY.MM.DD")}</S.Date>
                <S.Views>조회 {news.views}</S.Views>
              </S.MetaInfo>
            </S.TitleSection>
            <S.BackButton onClick={() => navigate("/news")}>
              목록으로
            </S.BackButton>
          </S.DetailHeader>

          {/* 썸네일 이미지 */}
          {news.thumbnailUrl && (
            <S.ThumbnailSection>
              <img src={news.thumbnailUrl} alt={news.title} />
            </S.ThumbnailSection>
          )}

          {/* 내용 */}
          <S.ContentSection>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {news.content}
            </ReactMarkdown>
          </S.ContentSection>
        </S.DetailContainer>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default NewsDetailPage;

