import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./ResourcesPage.style";

interface SongItem {
  id: number;
  title: string;
  artist: string;
  category: string;
  downloadCount: number;
}

const SongsPage: React.FC = () => {
  const subMenuItems = [
    { title: "찬양 자료", path: "/resources/songs" },
    { title: "다운로드", path: "/resources/downloads" },
  ];

  const [songs] = useState<SongItem[]>([
    {
      id: 1,
      title: "주 예수보다 더 귀한 것은 없네",
      artist: "예수전도단",
      category: "찬양",
      downloadCount: 1234,
    },
    {
      id: 2,
      title: "주님의 마음을 본받아",
      artist: "나눔의 교회",
      category: "찬양",
      downloadCount: 987,
    },
    {
      id: 3,
      title: "주님의 손길",
      artist: "온누리교회",
      category: "찬양",
      downloadCount: 756,
    },
    {
      id: 4,
      title: "내게 주신 날",
      artist: "예수전도단",
      category: "찬양",
      downloadCount: 1123,
    },
    {
      id: 5,
      title: "주의 사랑이",
      artist: "온누리교회",
      category: "찬양",
      downloadCount: 654,
    },
    {
      id: 6,
      title: "주님 앞에",
      artist: "나눔의 교회",
      category: "찬양",
      downloadCount: 890,
    },
  ]);

  return (
    <SubMenuTemplate
      mainMenuTitle="자료실"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/resources/songs"
      pageTitle="찬양 자료"
      breadcrumb={["Home", "자료실", "찬양 자료"]}
    >
      <S.ContentWrapper>
        {/* 검색 및 필터 */}
        <S.Toolbar>
          <S.ViewMode>
            <S.ViewIcon $active={true}>■</S.ViewIcon>
            <S.ViewIcon>□</S.ViewIcon>
            <S.InfoText>전체 {songs.length}곡</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox>
              <option>전체</option>
              <option>찬양</option>
              <option>경배</option>
              <option>찬송</option>
            </S.SelectBox>
            <S.SelectBox>
              <option>제목</option>
              <option>가수</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 찬양 자료 목록 */}
        <S.ResourceList>
          {songs.map((song) => (
            <S.ResourceItem key={song.id}>
              <S.ResourceIcon>🎵</S.ResourceIcon>
              <S.ResourceInfo>
                <S.ResourceTitle>{song.title}</S.ResourceTitle>
                <S.ResourceMeta>
                  <S.ResourceArtist>{song.artist}</S.ResourceArtist>
                  <S.ResourceCategory>{song.category}</S.ResourceCategory>
                </S.ResourceMeta>
              </S.ResourceInfo>
              <S.ResourceStats>
                <S.DownloadCount>다운로드 {song.downloadCount}</S.DownloadCount>
                <S.DownloadButton>다운로드</S.DownloadButton>
              </S.ResourceStats>
            </S.ResourceItem>
          ))}
        </S.ResourceList>

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

export default SongsPage;
