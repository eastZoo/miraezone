import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import { useNotice, useNoticeNavigation } from "@/lib/hooks/useNotice";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import * as S from "./NoticeDetailPage.style";
import dayjs from "dayjs";

const NoticeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const noticeId = id ? parseInt(id) : 0;

  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const { data: notice, isLoading } = useNotice(noticeId);
  const { data: navigation } = useNoticeNavigation(noticeId);

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/notice"
        pageTitle="공지사항"
        breadcrumb={["Home", "안내/소식", "공지사항", "상세보기"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  if (!notice) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/notice"
        pageTitle="공지사항"
        breadcrumb={["Home", "안내/소식", "공지사항", "상세보기"]}
      >
        <S.ContentWrapper>
          <S.NotFound>공지사항을 찾을 수 없습니다.</S.NotFound>
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
      breadcrumb={["Home", "안내/소식", "공지사항", notice.title]}
    >
      <S.ContentWrapper>
        <S.DetailContainer>
          {/* 헤더 */}
          <S.DetailHeader>
            <S.TitleSection>
              <S.Title>
                {notice.isNew && <S.NewBadge>NEW</S.NewBadge>}
                {notice.isImportant && <S.ImportantBadge>중요</S.ImportantBadge>}
                {notice.title}
              </S.Title>
              <S.MetaInfo>
                {notice.author && <S.Author>작성자: {notice.author}</S.Author>}
                <S.Date>{dayjs(notice.createdAt).format("YYYY.MM.DD")}</S.Date>
                <S.Views>조회 {notice.views}</S.Views>
              </S.MetaInfo>
            </S.TitleSection>
            <S.BackButton onClick={() => navigate("/notice")}>
              목록으로
            </S.BackButton>
          </S.DetailHeader>

          {/* 내용 */}
          <S.ContentSection>
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {notice.content}
            </ReactMarkdown>
          </S.ContentSection>

          {/* 이전/다음 글 */}
          <S.NavigationSection>
            {navigation?.prev ? (
              <S.NavigationItem
                onClick={() => navigate(`/notice/${navigation.prev!.id}`)}
              >
                <S.NavigationLeft>
                  <S.NavigationArrow>^</S.NavigationArrow>
                  <S.NavigationLabel>이전</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationRight>
                  <S.NavigationTitle>{navigation.prev.title}</S.NavigationTitle>
                  {notice.author && (
                    <S.NavigationAuthor>{notice.author}</S.NavigationAuthor>
                  )}
                  <S.NavigationDate>
                    {dayjs(notice.createdAt).format("YYYY-MM-DD")}
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
                onClick={() => navigate(`/notice/${navigation.next!.id}`)}
              >
                <S.NavigationLeft>
                  <S.NavigationArrow>v</S.NavigationArrow>
                  <S.NavigationLabel>다음</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationRight>
                  <S.NavigationTitle>{navigation.next.title}</S.NavigationTitle>
                  {notice.author && (
                    <S.NavigationAuthor>{notice.author}</S.NavigationAuthor>
                  )}
                  <S.NavigationDate>
                    {dayjs(notice.createdAt).format("YYYY-MM-DD")}
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

export default NoticeDetailPage;

