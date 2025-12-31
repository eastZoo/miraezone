import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import SubMenuTemplate from "@/components/template/SubMenuTemplate";
import {
  useChurchAlbum,
  useChurchAlbumNavigation,
} from "@/lib/hooks/useChurchAlbum";
import JSZip from "jszip";
import * as S from "./ChurchAlbumDetailPage.style";
import dayjs from "dayjs";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";

const ChurchAlbumDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const albumId = id ? parseInt(id) : 0;

  const subMenuItems = [
    { title: "교회 앨범", path: "/resources/church-albums" },
    // { title: "찬양 자료", path: "/resources/songs" },
    // { title: "다운로드", path: "/resources/downloads" },
  ];

  const { data: album, isLoading } = useChurchAlbum(albumId);
  const { data: navigation } = useChurchAlbumNavigation(albumId);

  // 이미지 뷰어 상태
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 이미지 클릭 핸들러
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
    document.body.style.overflow = "hidden";
  };

  // 이미지 뷰어 닫기
  const handleCloseViewer = () => {
    setViewerOpen(false);
    document.body.style.overflow = "";
  };

  // 이전 이미지
  const handlePrevImage = () => {
    if (album && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // 다음 이미지
  const handleNextImage = () => {
    if (album && currentImageIndex < (album.images?.length || 0) - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // 개별 이미지 다운로드 핸들러
  const handleDownloadImage = async (
    e: React.MouseEvent,
    imageUrl: string,
    fileName: string
  ) => {
    e.stopPropagation();

    try {
      const response = await fetch(imageUrl, {
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
    if (!album || !album.images || album.images.length === 0) {
      alert("다운로드할 이미지가 없습니다.");
      return;
    }

    try {
      const zip = new JSZip();

      for (const image of album.images) {
        try {
          const response = await fetch(image.imageUrl, {
            mode: "cors",
          });
          if (!response.ok) {
            console.error(
              `이미지 다운로드 실패: ${image.fileName}`,
              response.statusText
            );
            continue;
          }
          const blob = await response.blob();
          zip.file(image.fileName, blob);
        } catch (error) {
          console.error(`이미지 다운로드 실패: ${image.fileName}`, error);
        }
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${album.title}_${dayjs(album.createdAt).format(
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

  // 키보드 이벤트 처리
  useEffect(() => {
    if (!viewerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseViewer();
      } else if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (
        e.key === "ArrowRight" &&
        album &&
        currentImageIndex < (album.images?.length || 0) - 1
      ) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewerOpen, currentImageIndex, album]);

  // 컴포넌트 언마운트 시 body 스크롤 복원
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (isLoading) {
    return (
      <SubMenuTemplate
        mainMenuTitle="자료실"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/resources/church-albums"
        pageTitle="교회 앨범"
        breadcrumb={["Home", "자료실", "교회 앨범", "상세보기"]}
      >
        <S.ContentWrapper>
          <LoadingSpinner size="medium" />
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  if (!album) {
    return (
      <SubMenuTemplate
        mainMenuTitle="자료실"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/resources/church-albums"
        pageTitle="교회 앨범"
        breadcrumb={["Home", "자료실", "교회 앨범", "상세보기"]}
      >
        <S.ContentWrapper>
          <S.NotFound>앨범을 찾을 수 없습니다.</S.NotFound>
        </S.ContentWrapper>
      </SubMenuTemplate>
    );
  }

  const images = album.images || [];
  const currentImage = images[currentImageIndex];

  return (
    <>
      <SubMenuTemplate
        mainMenuTitle="자료실"
        subMenuItems={subMenuItems}
        currentSubMenuPath="/resources/church-albums"
        pageTitle="교회 앨범"
        breadcrumb={["Home", "자료실", "교회 앨범", album.title]}
      >
        <S.ContentWrapper>
          <S.DetailContainer>
            {/* 헤더 */}
            <S.DetailHeader>
              <S.TitleSection>
                <S.Title>{album.title}</S.Title>
                <S.MetaInfo>
                  <S.Date>{dayjs(album.createdAt).format("YYYY.MM.DD")}</S.Date>
                  <S.Views>조회 {album.views}</S.Views>
                </S.MetaInfo>
              </S.TitleSection>
              <S.BackButton
                onClick={() => navigate("/resources/church-albums")}
              >
                목록으로
              </S.BackButton>
            </S.DetailHeader>

            {/* 설명 */}
            {album.description && (
              <S.Description>{album.description}</S.Description>
            )}

            {/* 첨부파일 다운로드 섹션 */}
            {images.length > 0 && (
              <S.AttachmentSection>
                <S.AttachmentInfo>
                  <S.AttachmentText>
                    첨부파일 {images.length}개
                  </S.AttachmentText>
                  <S.BulkDownloadButton onClick={handleBulkDownload}>
                    [첨부파일 일괄 다운로드]
                  </S.BulkDownloadButton>
                </S.AttachmentInfo>
              </S.AttachmentSection>
            )}

            {/* 이미지 그리드 */}
            {images.length > 0 ? (
              <S.ImagesGrid>
                {images.map((image, index) => (
                  <S.ImageItem
                    key={image.id}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image.imageUrl}
                      alt={`${album.title} - ${index + 1}`}
                    />
                  </S.ImageItem>
                ))}
              </S.ImagesGrid>
            ) : (
              <S.NoImages>등록된 이미지가 없습니다.</S.NoImages>
            )}

            {/* 이전/다음 글 */}
            <S.NavigationSection>
              {navigation?.prev ? (
                <S.NavigationItem
                  onClick={() =>
                    navigate(`/resources/church-albums/${navigation.prev!.id}`)
                  }
                >
                  <S.NavigationLeft>
                    <S.NavigationArrow>^</S.NavigationArrow>
                    <S.NavigationLabel>이전</S.NavigationLabel>
                  </S.NavigationLeft>
                  <S.NavigationRight>
                    <S.NavigationTitle>{navigation.prev.title}</S.NavigationTitle>
                    {album && (
                      <S.NavigationDate>
                        {dayjs(album.createdAt).format("YYYY-MM-DD")}
                      </S.NavigationDate>
                    )}
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
                    navigate(`/resources/church-albums/${navigation.next!.id}`)
                  }
                >
                  <S.NavigationLeft>
                    <S.NavigationArrow>v</S.NavigationArrow>
                    <S.NavigationLabel>다음</S.NavigationLabel>
                  </S.NavigationLeft>
                  <S.NavigationRight>
                    <S.NavigationTitle>{navigation.next.title}</S.NavigationTitle>
                    {album && (
                      <S.NavigationDate>
                        {dayjs(album.createdAt).format("YYYY-MM-DD")}
                      </S.NavigationDate>
                    )}
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

      {/* 이미지 뷰어 */}
      {viewerOpen &&
        currentImage &&
        typeof window !== "undefined" &&
        createPortal(
          <S.ImageViewerOverlay onClick={handleCloseViewer}>
            <S.ImageViewerContainer onClick={(e) => e.stopPropagation()}>
              <S.ImageViewerCloseButton onClick={handleCloseViewer}>
                ×
              </S.ImageViewerCloseButton>
              <S.ImageViewerDownloadButton
                onClick={(e: React.MouseEvent) =>
                  handleDownloadImage(
                    e,
                    currentImage.imageUrl,
                    currentImage.fileName
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
                src={currentImage.imageUrl}
                alt={`${album.title} - ${currentImageIndex + 1}`}
              />
              <S.ImageViewerNavButton
                $direction="next"
                onClick={handleNextImage}
                disabled={currentImageIndex === images.length - 1}
              >
                ›
              </S.ImageViewerNavButton>
              <S.ImageViewerCounter>
                {currentImageIndex + 1} / {images.length}
              </S.ImageViewerCounter>
            </S.ImageViewerContainer>
          </S.ImageViewerOverlay>,
          document.body
        )}
    </>
  );
};

export default ChurchAlbumDetailPage;
