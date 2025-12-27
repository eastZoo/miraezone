import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./BulletinsPage.style";

interface BulletinItem {
  id: number;
  title: string;
  date: string;
  thumbnail?: string;
}

const BulletinsPage: React.FC = () => {
  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const [bulletins] = useState<BulletinItem[]>([
    { id: 1, title: "25.02.09 교회주보", date: "2025.02.09" },
    { id: 2, title: "25.02.02 교회주보", date: "2025.02.02" },
    { id: 3, title: "25.01.26 교회주보", date: "2025.01.26" },
    { id: 4, title: "25.01.19 교회주보", date: "2025.01.19" },
    { id: 5, title: "25.01.12 교회주보", date: "2025.01.12" },
    { id: 6, title: "25.01.05 교회주보", date: "2025.01.05" },
  ]);

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
            <S.ViewIcon $active={true}>■</S.ViewIcon>
            <S.ViewIcon>□</S.ViewIcon>
            <S.InfoText>전체 {bulletins.length}건</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox>
              <option>제목</option>
              <option>날짜</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 주보 목록 - 그리드 형태 */}
        <S.BulletinsGrid>
          {bulletins.map((bulletin) => (
            <S.BulletinCard key={bulletin.id}>
              <S.BulletinThumbnail>
                <S.ThumbnailPlaceholder>
                  <p>주보</p>
                  <p style={{ fontSize: "1.2rem", marginTop: "8px" }}>
                    {bulletin.date}
                  </p>
                </S.ThumbnailPlaceholder>
              </S.BulletinThumbnail>
              <S.BulletinInfo>
                <S.BulletinDate>{bulletin.date}</S.BulletinDate>
                <S.BulletinTitle>{bulletin.title}</S.BulletinTitle>
              </S.BulletinInfo>
            </S.BulletinCard>
          ))}
        </S.BulletinsGrid>

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

export default BulletinsPage;

