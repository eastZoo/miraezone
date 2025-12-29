import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNextGen } from "@/lib/hooks/useNextGen";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import * as S from "./NextGenNewsDetailPage.style";
import dayjs from "dayjs";

const NextGenNewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const newsId = id ? parseInt(id) : 0;

  const subMenuItems = [
    { title: "유초등부", path: "/nextgen/elementary" },
    { title: "중고등부", path: "/nextgen/youth" },
    { title: "청년부", path: "/nextgen/youngadult" },
    { title: "다음세대 소식", path: "/nextgen/news" },
  ];

  const { data: news, isLoading } = useNextGen(newsId);

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="다음세대"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/nextgen/news"
        pageTitle="다음세대 소식"
        breadcrumb={["Home", "다음세대", "다음세대 소식", "상세보기"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  if (!news) {
    return (
      <SubMenuTemplate
        mainMenuTitle="다음세대"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/nextgen/news"
        pageTitle="다음세대 소식"
        breadcrumb={["Home", "다음세대", "다음세대 소식", "상세보기"]}
      >
        <S.ContentWrapper>
          <S.NotFound>소식을 찾을 수 없습니다.</S.NotFound>
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="다음세대"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/nextgen/news"
      pageTitle="다음세대 소식"
      breadcrumb={["Home", "다음세대", "다음세대 소식", news.title]}
    >
      <S.ContentWrapper>
        <S.DetailContainer>
          {/* 헤더 */}
          <S.DetailHeader>
            <S.TitleSection>
              <S.Title>
                {news.isNotice && <S.NoticeBadge>공지</S.NoticeBadge>}
                {news.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {news.title}
              </S.Title>
              <S.MetaInfo>
                <S.Department>{news.department}</S.Department>
                {news.author && <S.Author>작성자: {news.author}</S.Author>}
                <S.Date>{dayjs(news.createdAt).format("YYYY.MM.DD")}</S.Date>
                <S.Views>조회 {news.views}</S.Views>
              </S.MetaInfo>
            </S.TitleSection>
            <S.BackButton onClick={() => navigate("/nextgen/news")}>
              목록으로
            </S.BackButton>
          </S.DetailHeader>

          {/* 내용 */}
          {news.content && (
            <S.ContentSection>
              <ReactMarkdown remarkPlugins={[remarkBreaks]}>
                {news.content}
              </ReactMarkdown>
            </S.ContentSection>
          )}
        </S.DetailContainer>
      </S.ContentWrapper>
    </SubMenuTemplate>
  );
};

export default NextGenNewsDetailPage;

