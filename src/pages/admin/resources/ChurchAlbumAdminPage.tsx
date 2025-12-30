import React, { useState, useRef } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import {
  useChurchAlbumList,
  useChurchAlbum,
  useCreateChurchAlbum,
  useUpdateChurchAlbum,
  useDeleteChurchAlbum,
  useAddChurchAlbumImage,
  useDeleteChurchAlbumImage,
  type ChurchAlbum,
} from "@/lib/hooks/useChurchAlbum";
import { uploadImage } from "@/lib/utils/uploadImage";
import * as S from "./ChurchAlbumAdminPage.style";
import dayjs from "dayjs";

const ChurchAlbumAdminPage: React.FC = () => {
  // 앨범 관리 상태
  const [isCreatingAlbum, setIsCreatingAlbum] = useState(false);
  const [editingAlbumId, setEditingAlbumId] = useState<number | null>(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
  const [albumFormData, setAlbumFormData] = useState({
    title: "",
    description: "",
  });
  const albumImageInputRef = useRef<HTMLInputElement>(null);

  // 앨범 목록 조회
  const { data: albumsData, isLoading: albumsLoading } = useChurchAlbumList(
    1,
    100
  );
  const albums = albumsData?.data || [];

  // 선택된 앨범의 상세 정보 조회 (이미지 목록 포함)
  // 관리자 페이지에서는 조회수를 증가시키지 않음
  const { data: selectedAlbum } = useChurchAlbum(selectedAlbumId || 0, false);

  // 앨범 CRUD 훅
  const createAlbum = useCreateChurchAlbum();
  const updateAlbum = useUpdateChurchAlbum();
  const deleteAlbum = useDeleteChurchAlbum();
  const addAlbumImage = useAddChurchAlbumImage();
  const deleteAlbumImage = useDeleteChurchAlbumImage();

  // 앨범 저장
  const handleSaveAlbum = async () => {
    if (!albumFormData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    try {
      if (editingAlbumId) {
        // 수정
        await updateAlbum.mutateAsync({
          id: editingAlbumId,
          data: albumFormData,
        });
        // 수정 시에도 selectedAlbumId를 유지하여 이미지 목록을 계속 볼 수 있게 함
        alert("앨범이 성공적으로 수정되었습니다.");
      } else {
        // 생성
        const result = await createAlbum.mutateAsync(albumFormData);
        setSelectedAlbumId(result.id);
        // 앨범 생성 후 즉시 상세 정보를 다시 조회하여 이미지 목록을 가져옴
        // React Query가 자동으로 refetch하지만, 명시적으로 기다림
        await new Promise((resolve) => setTimeout(resolve, 100));
        alert(
          "앨범이 성공적으로 생성되었습니다. 이제 이미지를 업로드할 수 있습니다."
        );
      }
      // 수정 시에는 폼을 닫지 않음 (이미지 관리 계속 가능)
      if (!editingAlbumId) {
        // 폼은 닫지 않고 유지 (이미지 업로드를 위해)
        setIsCreatingAlbum(false);
        setEditingAlbumId(null);
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 앨범 취소
  const handleCancelAlbum = () => {
    setIsCreatingAlbum(false);
    setEditingAlbumId(null);
    setSelectedAlbumId(null);
    setAlbumFormData({
      title: "",
      description: "",
    });
  };

  // 앨범 수정 시작
  const handleEditAlbum = (album: ChurchAlbum) => {
    setIsCreatingAlbum(false);
    setEditingAlbumId(album.id);
    setSelectedAlbumId(album.id);
    setAlbumFormData({
      title: album.title,
      description: album.description || "",
    });
  };

  // 앨범 삭제
  const handleDeleteAlbum = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteAlbum.mutateAsync(id);
      alert("앨범이 성공적으로 삭제되었습니다.");
      if (selectedAlbumId === id) {
        setSelectedAlbumId(null);
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  // 앨범 이미지 업로드
  const handleAlbumImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    if (!selectedAlbumId) {
      alert("먼저 앨범을 저장해주세요.");
      return;
    }

    try {
      for (const file of files) {
        const result = await uploadImage(file);
        await addAlbumImage.mutateAsync({
          albumId: selectedAlbumId,
          imageUrl: result.url,
          fileName: file.name,
          fileSize: result.size,
        });
      }
      alert(`${files.length}개의 이미지가 성공적으로 업로드되었습니다.`);

      if (albumImageInputRef.current) {
        albumImageInputRef.current.value = "";
      }
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "이미지 업로드 중 오류가 발생했습니다."
      );
    }
  };

  // 앨범 이미지 삭제
  const handleDeleteAlbumImage = async (imageId: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteAlbumImage.mutateAsync(imageId);
      alert("이미지가 성공적으로 삭제되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  return (
    <AdminMainTemplate
      containerType="standard"
      pageTitle="교회 앨범 관리"
      breadcrumb={["관리자", "교회 앨범 관리"]}
    >
      <S.Container>
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 앨범 관리</S.SectionTitle>
            <S.CreateButton
              onClick={() => {
                setIsCreatingAlbum(true);
                setEditingAlbumId(null);
                setSelectedAlbumId(null);
                setAlbumFormData({
                  title: "",
                  description: "",
                });
              }}
            >
              새 앨범 추가
            </S.CreateButton>
          </S.SectionHeader>

          {/* 앨범 생성/수정 폼 */}
          {(isCreatingAlbum || editingAlbumId) && (
            <S.FormSection>
              <S.FormRow>
                <S.Label>제목</S.Label>
                <S.Input
                  type="text"
                  value={albumFormData.title}
                  onChange={(e) =>
                    setAlbumFormData({
                      ...albumFormData,
                      title: e.target.value,
                    })
                  }
                  placeholder="앨범 제목을 입력하세요"
                />
              </S.FormRow>
              <S.FormRow>
                <S.Label>설명</S.Label>
                <S.TextArea
                  value={albumFormData.description}
                  onChange={(e) =>
                    setAlbumFormData({
                      ...albumFormData,
                      description: e.target.value,
                    })
                  }
                  placeholder="앨범 설명을 입력하세요 (선택사항)"
                  rows={4}
                />
              </S.FormRow>
              <S.FormActions>
                <S.SaveButton onClick={handleSaveAlbum}>저장</S.SaveButton>
                <S.CancelButton onClick={handleCancelAlbum}>
                  취소
                </S.CancelButton>
              </S.FormActions>

              {/* 이미지 업로드 섹션 (앨범 저장 후) */}
              {selectedAlbumId && (
                <S.ImageUploadSection>
                  <S.ImageUploadSectionHeader>
                    <S.ImageUploadSectionTitle>
                      앨범 이미지 업로드
                    </S.ImageUploadSectionTitle>
                    <S.UploadButton
                      onClick={() => albumImageInputRef.current?.click()}
                    >
                      이미지 선택
                    </S.UploadButton>
                    <input
                      type="file"
                      ref={albumImageInputRef}
                      multiple
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleAlbumImageUpload}
                    />
                  </S.ImageUploadSectionHeader>
                  <S.AlbumImagesList>
                    {selectedAlbum?.images &&
                    selectedAlbum.images.length > 0 ? (
                      selectedAlbum.images.map((image) => (
                        <S.AlbumImageItem key={image.id}>
                          <S.AlbumImagePreview
                            src={image.imageUrl}
                            alt={image.fileName}
                          />
                          <S.AlbumImageName>{image.fileName}</S.AlbumImageName>
                          <S.DeleteImageButton
                            onClick={() => handleDeleteAlbumImage(image.id)}
                          >
                            삭제
                          </S.DeleteImageButton>
                        </S.AlbumImageItem>
                      ))
                    ) : (
                      <S.NoImagesText>
                        업로드된 이미지가 없습니다.
                      </S.NoImagesText>
                    )}
                  </S.AlbumImagesList>
                </S.ImageUploadSection>
              )}
            </S.FormSection>
          )}

          {/* 앨범 목록 */}
          {albumsLoading ? (
            <S.LoadingText>
              <LoadingSpinner size="small" text="" />
            </S.LoadingText>
          ) : albums.length === 0 ? (
            <S.EmptyText>등록된 앨범이 없습니다.</S.EmptyText>
          ) : (
            <S.AlbumsList>
              {albums.map((album) => (
                <S.AlbumItem key={album.id}>
                  <S.AlbumThumbnail>
                    {album.thumbnailUrl ? (
                      <img src={album.thumbnailUrl} alt={album.title} />
                    ) : (
                      <S.ThumbnailPlaceholder>앨범</S.ThumbnailPlaceholder>
                    )}
                  </S.AlbumThumbnail>
                  <S.AlbumInfo>
                    <S.AlbumTitle>{album.title}</S.AlbumTitle>
                    <S.AlbumMeta>
                      <span>{dayjs(album.createdAt).format("YYYY.MM.DD")}</span>
                      <span>조회 {album.views}</span>
                      <span>이미지 {album.images?.length || 0}개</span>
                    </S.AlbumMeta>
                  </S.AlbumInfo>
                  <S.AlbumActions>
                    <S.EditButton onClick={() => handleEditAlbum(album)}>
                      수정
                    </S.EditButton>
                    <S.DeleteButton onClick={() => handleDeleteAlbum(album.id)}>
                      삭제
                    </S.DeleteButton>
                  </S.AlbumActions>
                </S.AlbumItem>
              ))}
            </S.AlbumsList>
          )}
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default ChurchAlbumAdminPage;
