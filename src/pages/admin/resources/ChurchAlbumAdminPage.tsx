import React, { useState, useRef } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
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
  const { data: albumsData, isLoading: albumsLoading } = useChurchAlbumList(1, 100);
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

  // 앨범 생성 시작
  const handleCreateAlbumStart = () => {
    setIsCreatingAlbum(true);
    setEditingAlbumId(null);
    setSelectedAlbumId(null);
    setAlbumFormData({
      title: "",
      description: "",
    });
  };

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
        alert("앨범이 성공적으로 수정되었습니다.");
      } else {
        // 생성
        const result = await createAlbum.mutateAsync(albumFormData);
        alert("앨범이 성공적으로 생성되었습니다.");
        setSelectedAlbumId(result.id);
      }
      setIsCreatingAlbum(false);
      setEditingAlbumId(null);
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
    <AdminMainTemplate>
      <S.Container>
        <S.Header>
          <S.Title>교회 앨범 관리</S.Title>
          <S.CreateButton onClick={handleCreateAlbumStart}>
            + 앨범 추가
          </S.CreateButton>
        </S.Header>

        {/* 앨범 생성/수정 폼 */}
        {(isCreatingAlbum || editingAlbumId) && (
          <S.FormSection>
            <S.FormTitle>
              {editingAlbumId ? "앨범 수정" : "새 앨범 추가"}
            </S.FormTitle>
            <S.Form>
              <S.FormGroup>
                <S.Label>제목 *</S.Label>
                <S.Input
                  type="text"
                  value={albumFormData.title}
                  onChange={(e) =>
                    setAlbumFormData({ ...albumFormData, title: e.target.value })
                  }
                  placeholder="앨범 제목을 입력하세요"
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label>설명</S.Label>
                <S.TextArea
                  value={albumFormData.description}
                  onChange={(e) =>
                    setAlbumFormData({
                      ...albumFormData,
                      description: e.target.value,
                    })
                  }
                  placeholder="앨범 설명을 입력하세요"
                  rows={4}
                />
              </S.FormGroup>
              <S.FormActions>
                <S.SaveButton onClick={handleSaveAlbum}>저장</S.SaveButton>
                <S.CancelButton onClick={handleCancelAlbum}>취소</S.CancelButton>
              </S.FormActions>
            </S.Form>
          </S.FormSection>
        )}

        {/* 앨범 목록 */}
        <S.AlbumsSection>
          <S.SectionTitle>앨범 목록</S.SectionTitle>
          {albumsLoading ? (
            <S.LoadingText>로딩 중...</S.LoadingText>
          ) : albums.length === 0 ? (
            <S.EmptyText>등록된 앨범이 없습니다.</S.EmptyText>
          ) : (
            <S.AlbumsList>
              {albums.map((album) => (
                <S.AlbumItem key={album.id}>
                  <S.AlbumInfo>
                    <S.AlbumTitle>{album.title}</S.AlbumTitle>
                    <S.AlbumMeta>
                      <S.AlbumDate>
                        {dayjs(album.createdAt).format("YYYY.MM.DD")}
                      </S.AlbumDate>
                      <S.AlbumViews>조회 {album.views}</S.AlbumViews>
                    </S.AlbumMeta>
                  </S.AlbumInfo>
                  <S.AlbumActions>
                    <S.EditButton onClick={() => handleEditAlbum(album)}>
                      수정
                    </S.EditButton>
                    <S.DeleteButton onClick={() => handleDeleteAlbum(album.id)}>
                      삭제
                    </S.DeleteButton>
                    <S.SelectButton
                      onClick={() => setSelectedAlbumId(album.id)}
                      $active={selectedAlbumId === album.id}
                    >
                      {selectedAlbumId === album.id ? "선택됨" : "선택"}
                    </S.SelectButton>
                  </S.AlbumActions>
                </S.AlbumItem>
              ))}
            </S.AlbumsList>
          )}
        </S.AlbumsSection>

        {/* 이미지 관리 */}
        {selectedAlbum && (
          <S.ImagesSection>
            <S.SectionTitle>이미지 관리 - {selectedAlbum.title}</S.SectionTitle>
            <S.ImageUploadArea>
              <S.ImageUploadButton
                onClick={() => albumImageInputRef.current?.click()}
              >
                + 이미지 추가
              </S.ImageUploadButton>
              <input
                ref={albumImageInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleAlbumImageUpload}
                style={{ display: "none" }}
              />
            </S.ImageUploadArea>
            {selectedAlbum.images && selectedAlbum.images.length > 0 ? (
              <S.ImagesGrid>
                {selectedAlbum.images.map((image) => (
                  <S.ImageItem key={image.id}>
                    <S.ImageThumbnail>
                      <img src={image.imageUrl} alt={image.fileName} />
                    </S.ImageThumbnail>
                    <S.ImageInfo>
                      <S.ImageFileName>{image.fileName}</S.ImageFileName>
                      <S.ImageDeleteButton
                        onClick={() => handleDeleteAlbumImage(image.id)}
                      >
                        삭제
                      </S.ImageDeleteButton>
                    </S.ImageInfo>
                  </S.ImageItem>
                ))}
              </S.ImagesGrid>
            ) : (
              <S.EmptyText>등록된 이미지가 없습니다.</S.EmptyText>
            )}
          </S.ImagesSection>
        )}
      </S.Container>
    </AdminMainTemplate>
  );
};

export default ChurchAlbumAdminPage;

