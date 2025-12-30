import React, { useState } from "react";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import * as S from "./ResourcesPage.style";

interface DownloadItem {
  id: number;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloadCount: number;
  uploadDate: string;
}

const DownloadsPage: React.FC = () => {
  const subMenuItems = [
    { title: "교회 앨범", path: "/resources/church-albums" },
    // { title: "찬양 자료", path: "/resources/songs" },
    // { title: "다운로드", path: "/resources/downloads" },
  ];

  const [downloads] = useState<DownloadItem[]>([
    {
      id: 1,
      title: "2025년 교회 행사 일정표",
      description: "2025년 교회 주요 행사 및 예배 일정",
      fileType: "PDF",
      fileSize: "2.3 MB",
      downloadCount: 456,
      uploadDate: "2025.01.01",
    },
    {
      id: 2,
      title: "신앙 고백서 양식",
      description: "신앙 고백서 작성용 양식 파일",
      fileType: "DOCX",
      fileSize: "0.5 MB",
      downloadCount: 234,
      uploadDate: "2024.12.20",
    },
    {
      id: 3,
      title: "교회 소개 브로슈어",
      description: "교회 소개 및 비전 자료",
      fileType: "PDF",
      fileSize: "5.1 MB",
      downloadCount: 678,
      uploadDate: "2024.12.15",
    },
    {
      id: 4,
      title: "선교지 소식지",
      description: "2024년 12월 선교지 소식",
      fileType: "PDF",
      fileSize: "3.2 MB",
      downloadCount: 345,
      uploadDate: "2024.12.10",
    },
    {
      id: 5,
      title: "예배 안내 PPT 템플릿",
      description: "예배 안내용 PowerPoint 템플릿",
      fileType: "PPTX",
      fileSize: "1.8 MB",
      downloadCount: 567,
      uploadDate: "2024.12.05",
    },
  ]);

  return (
    <SubMenuTemplate
      mainMenuTitle="자료실"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/resources/downloads"
      pageTitle="다운로드"
      breadcrumb={["Home", "자료실", "다운로드"]}
    >
      <S.ContentWrapper>
        {/* 검색 및 필터 */}
        <S.Toolbar>
          <S.ViewMode>
            <S.InfoText>전체 {downloads.length}개</S.InfoText>
          </S.ViewMode>
          <S.SearchArea>
            <S.SelectBox>
              <option>전체</option>
              <option>PDF</option>
              <option>DOCX</option>
              <option>PPTX</option>
            </S.SelectBox>
            <S.SelectBox>
              <option>제목</option>
              <option>내용</option>
            </S.SelectBox>
            <S.SearchInput type="text" placeholder="검색어를 입력하세요" />
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchArea>
        </S.Toolbar>

        {/* 다운로드 목록 */}
        <S.DownloadList>
          {downloads.map((item) => (
            <S.DownloadItem key={item.id}>
              <S.FileIcon $fileType={item.fileType}>
                {item.fileType === "PDF" && "📄"}
                {item.fileType === "DOCX" && "📝"}
                {item.fileType === "PPTX" && "📊"}
                {!["PDF", "DOCX", "PPTX"].includes(item.fileType) && "📎"}
              </S.FileIcon>
              <S.DownloadInfo>
                <S.DownloadTitle>{item.title}</S.DownloadTitle>
                <S.DownloadDesc>{item.description}</S.DownloadDesc>
                <S.DownloadMeta>
                  <S.MetaItem>
                    <S.MetaLabel>파일 형식:</S.MetaLabel>
                    <S.MetaValue>{item.fileType}</S.MetaValue>
                  </S.MetaItem>
                  <S.MetaItem>
                    <S.MetaLabel>파일 크기:</S.MetaLabel>
                    <S.MetaValue>{item.fileSize}</S.MetaValue>
                  </S.MetaItem>
                  <S.MetaItem>
                    <S.MetaLabel>업로드:</S.MetaLabel>
                    <S.MetaValue>{item.uploadDate}</S.MetaValue>
                  </S.MetaItem>
                  <S.MetaItem>
                    <S.MetaLabel>다운로드:</S.MetaLabel>
                    <S.MetaValue>{item.downloadCount}회</S.MetaValue>
                  </S.MetaItem>
                </S.DownloadMeta>
              </S.DownloadInfo>
              <S.DownloadButton>다운로드</S.DownloadButton>
            </S.DownloadItem>
          ))}
        </S.DownloadList>

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

export default DownloadsPage;
