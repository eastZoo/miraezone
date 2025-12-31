import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import {
  useBulletin,
  useBulletinFiles,
  useBulletinNavigation,
} from "@/lib/hooks/useBulletin";
import JSZip from "jszip";
import * as S from "./BulletinDetailPage.style";
import dayjs from "dayjs";

const BulletinDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const bulletinId = id ? parseInt(id) : 0;

  const subMenuItems = [
    { title: "공지사항", path: "/notice" },
    { title: "교회 소식", path: "/news" },
    { title: "주보", path: "/bulletins" },
  ];

  const { data: bulletin, isLoading } = useBulletin(bulletinId);
  const { data: files = [] } = useBulletinFiles(bulletinId);
  const { data: navigation } = useBulletinNavigation(bulletinId);

  // 이미지 뷰어 상태
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 클릭 핸들러
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
    // body 스크롤 막기
    document.body.style.overflow = "hidden";
  };

  // 이미지 뷰어 닫기
  const handleCloseViewer = () => {
    setViewerOpen(false);
    // body 스크롤 복원
    document.body.style.overflow = "";
  };

  // 이전 이미지
  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // 다음 이미지
  const handleNextImage = () => {
    if (currentImageIndex < files.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // 개별 이미지 다운로드 핸들러
  const handleDownloadImage = async (
    e: React.MouseEvent,
    fileUrl: string,
    fileName: string
  ) => {
    e.stopPropagation(); // 오버레이 클릭 이벤트 방지

    try {
      const response = await fetch(fileUrl, {
        mode: "cors",
      });
      if (!response.ok) {
        alert("파일 다운로드에 실패했습니다.");
        return;
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("파일 다운로드 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  // 일괄 다운로드 핸들러
  const handleBulkDownload = async () => {
    if (files.length === 0) {
      alert("다운로드할 파일이 없습니다.");
      return;
    }

    try {
      // ZIP 파일 생성
      const zip = new JSZip();

      // 각 파일 다운로드 및 ZIP에 추가
      for (const file of files) {
        try {
          const response = await fetch(file.fileUrl, {
            mode: "cors",
          });
          if (!response.ok) {
            console.error(
              `파일 다운로드 실패: ${file.fileName}`,
              response.statusText
            );
            continue;
          }
          const blob = await response.blob();
          zip.file(file.fileName, blob);
        } catch (error) {
          console.error(`파일 다운로드 실패: ${file.fileName}`, error);
        }
      }

      // ZIP 파일 생성 및 다운로드
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${bulletin.title}_${dayjs(bulletin.date).format(
        "YYYYMMDD"
      )}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      alert("파일이 성공적으로 다운로드되었습니다.");
    } catch (error: any) {
      alert("다운로드 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  // 키보드 이벤트 처리 (ESC, 좌우 화살표)
  useEffect(() => {
    if (!viewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseViewer();
      } else if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (
        e.key === "ArrowRight" &&
        currentImageIndex < files.length - 1
      ) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewerOpen, currentImageIndex, files.length]);

  // 컴포넌트 언마운트 시 body 스크롤 복원
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/bulletins"
        pageTitle="주보"
        breadcrumb={["Home", "안내/소식", "주보", "상세보기"]}
      >
        <S.ContentWrapper>로딩 중...</S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  if (!bulletin) {
    return (
      <SubMenuTemplate
        mainMenuTitle="안내/소식"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/bulletins"
        pageTitle="주보"
        breadcrumb={["Home", "안내/소식", "주보", "상세보기"]}
      >
        <S.ContentWrapper>
          <S.NotFound>주보를 찾을 수 없습니다.</S.NotFound>
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  return (
    <SubMenuTemplate
      mainMenuTitle="안내/소식"
      subMenuItems={subMenuItems}
      currentSubMenuPath="/bulletins"
      pageTitle="주보"
      breadcrumb={["Home", "안내/소식", "주보", bulletin.title]}
    >
      <S.ContentWrapper>
        <S.DetailContainer>
          {/* 헤더 */}
          <S.DetailHeader>
            <S.TitleSection>
              <S.Title>{bulletin.title}</S.Title>
              <S.MetaInfo>
                <S.Date>
                  {dayjs(bulletin.date).format("YYYY.MM.DD")}
                </S.Date>
                <S.DownloadCount>다운로드 {bulletin.downloadCount}</S.DownloadCount>
              </S.MetaInfo>
            </S.TitleSection>
            <S.BackButton onClick={() => navigate("/bulletins")}>
              목록으로
            </S.BackButton>
          </S.DetailHeader>

          {/* 첨부파일 다운로드 섹션 */}
          {files.length > 0 && (
            <S.AttachmentSection>
              <S.AttachmentInfo>
                <S.AttachmentText>
                  첨부파일 {files.length}개
                </S.AttachmentText>
                <S.BulkDownloadButton onClick={handleBulkDownload}>
                  [첨부파일 일괄 다운로드]
                </S.BulkDownloadButton>
              </S.AttachmentInfo>
            </S.AttachmentSection>
          )}

          {/* 주보 이미지 목록 */}
          {files.length > 0 ? (
            <S.ImagesSection>
              {files.map((file, index) => (
                <S.ImageItem
                  key={file.id}
                  onClick={() => handleImageClick(index)}
                >
                  <img src={file.fileUrl} alt={file.fileName} />
                </S.ImageItem>
              ))}
            </S.ImagesSection>
          ) : (
            <S.NoImages>등록된 주보 이미지가 없습니다.</S.NoImages>
          )}

          {/* 이전/다음 글 */}
          <S.NavigationSection>
            {navigation?.prev ? (
              <S.NavigationItem
                onClick={() => navigate(`/bulletins/${navigation.prev!.id}`)}
              >
                <S.NavigationLeft>
                  <S.NavigationArrow>^</S.NavigationArrow>
                  <S.NavigationLabel>이전</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationRight>
                  <S.NavigationTitle>{navigation.prev.title}</S.NavigationTitle>
                  <S.NavigationDate>
                    {dayjs(bulletin.date).format("YYYY-MM-DD")}
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
                onClick={() => navigate(`/bulletins/${navigation.next!.id}`)}
              >
                <S.NavigationLeft>
                  <S.NavigationArrow>v</S.NavigationArrow>
                  <S.NavigationLabel>다음</S.NavigationLabel>
                </S.NavigationLeft>
                <S.NavigationRight>
                  <S.NavigationTitle>{navigation.next.title}</S.NavigationTitle>
                  <S.NavigationDate>
                    {dayjs(bulletin.date).format("YYYY-MM-DD")}
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

      {/* 이미지 뷰어 모달 - Portal을 사용하여 body에 직접 렌더링 */}
      {viewerOpen &&
        files.length > 0 &&
        typeof window !== "undefined" &&
        createPortal(
          <S.ImageViewerOverlay onClick={handleCloseViewer}>
            <S.ImageViewerContainer onClick={(e) => e.stopPropagation()}>
              <S.ImageViewerCloseButton onClick={handleCloseViewer}>
                ×
              </S.ImageViewerCloseButton>
              <S.ImageViewerDownloadButton
                onClick={(e) =>
                  handleDownloadImage(
                    e,
                    files[currentImageIndex].fileUrl,
                    files[currentImageIndex].fileName
                  )
                }
              >
                다운로드
              </S.ImageViewerDownloadButton>
              <S.ImageViewerNavButton
                $direction="prev"
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
              >
                ‹
              </S.ImageViewerNavButton>
              <S.ImageViewerImage
                src={files[currentImageIndex].fileUrl}
                alt={files[currentImageIndex].fileName}
              />
              <S.ImageViewerNavButton
                $direction="next"
                onClick={handleNextImage}
                disabled={currentImageIndex === files.length - 1}
              >
                ›
              </S.ImageViewerNavButton>
              <S.ImageViewerCounter>
                {currentImageIndex + 1} / {files.length}
              </S.ImageViewerCounter>
            </S.ImageViewerContainer>
          </S.ImageViewerOverlay>,
          document.body
        )}
    </SubMenuTemplate>
  );
};

export default BulletinDetailPage;

