import React, { useState, useRef } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useBulletinList,
  useBulletinFiles,
  useCreateBulletin,
  useUpdateBulletin,
  useDeleteBulletin,
  useAddBulletinFile,
  useDeleteBulletinFile,
  uploadImage,
  type Bulletin,
  type BulletinFile,
} from "@/lib/hooks/useBulletin";
import JSZip from "jszip";
import * as S from "./BulletinsAdminPage.style";
import dayjs from "dayjs";

const BulletinsAdminPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedBulletinId, setSelectedBulletinId] = useState<number | null>(
    null
  );
  const [formData, setFormData] = useState({
    title: "",
    date: dayjs().format("YYYY-MM-DD"),
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const limit = 10;

  // 주보 목록 조회
  const { data, isLoading } = useBulletinList(page, limit, search);
  const bulletins = data?.data || [];
  const total = data?.total || 0;

  // 선택된 주보의 파일 목록 조회
  const { data: files = [] } = useBulletinFiles(selectedBulletinId || 0);

  // Mutations
  const createBulletin = useCreateBulletin();
  const updateBulletin = useUpdateBulletin();
  const deleteBulletin = useDeleteBulletin();
  const addBulletinFile = useAddBulletinFile();
  const deleteBulletinFile = useDeleteBulletinFile();

  const totalPages = Math.ceil(total / limit);

  // 검색 핸들러
  const handleSearch = () => {
    setPage(1);
  };

  // 새 주보 작성 시작
  const handleCreateStart = () => {
    setIsCreating(true);
    setEditingId(null);
    setSelectedBulletinId(null);
    setFormData({
      title: "",
      date: dayjs().format("YYYY-MM-DD"),
    });
  };

  // 수정 시작
  const handleEditStart = (bulletin: Bulletin) => {
    setIsCreating(false);
    setEditingId(bulletin.id);
    setSelectedBulletinId(bulletin.id);
    setFormData({
      title: bulletin.title,
      date: dayjs(bulletin.date).format("YYYY-MM-DD"),
    });
  };

  // 취소
  const handleCancel = () => {
    setIsCreating(false);
    setEditingId(null);
    setSelectedBulletinId(null);
    setFormData({
      title: "",
      date: dayjs().format("YYYY-MM-DD"),
    });
  };

  // 주보 저장
  const handleSaveBulletin = async () => {
    try {
      if (editingId) {
        await updateBulletin.mutateAsync({
          id: editingId,
          data: formData,
        });
        alert("주보가 성공적으로 수정되었습니다.");
      } else {
        const result = await createBulletin.mutateAsync(formData);
        setSelectedBulletinId(result.id);
        alert(
          "주보가 성공적으로 생성되었습니다. 이제 파일을 업로드할 수 있습니다."
        );
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 파일 선택
  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  // 파일 변경
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // JPG 파일만 필터링
    const jpgFiles = selectedFiles.filter(
      (file) =>
        file.type === "image/jpeg" || file.name.toLowerCase().endsWith(".jpg")
    );

    if (jpgFiles.length === 0) {
      alert("JPG 파일만 업로드할 수 있습니다.");
      return;
    }

    if (!selectedBulletinId) {
      alert("먼저 주보를 저장해주세요.");
      return;
    }

    try {
      // 파일 업로드
      for (const file of jpgFiles) {
        const uploadResult = await uploadImage(file);
        await addBulletinFile.mutateAsync({
          bulletinId: selectedBulletinId,
          fileUrl: uploadResult.url,
          fileName: file.name,
          fileSize: uploadResult.size,
        });
      }
      alert(`${jpgFiles.length}개의 파일이 성공적으로 업로드되었습니다.`);

      // 파일 입력 초기화
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error: any) {
      alert(
        error?.response?.data?.message || "파일 업로드 중 오류가 발생했습니다."
      );
    }
  };

  // 파일 삭제
  const handleDeleteFile = async (fileId: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteBulletinFile.mutateAsync(fileId);
      alert("파일이 성공적으로 삭제되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  // 주보 삭제
  const handleDeleteBulletin = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteBulletin.mutateAsync(id);
      alert("주보가 성공적으로 삭제되었습니다.");
      if (selectedBulletinId === id) {
        handleCancel();
      }
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  // 일괄 다운로드
  const handleDownloadAll = async (bulletin: Bulletin) => {
    try {
      // 주보 파일 목록 조회
      const { request } = await import("@/lib/api");
      const filesResponse = await request<BulletinFile[]>({
        method: "GET",
        url: `/bulletins/${bulletin.id}/files`,
      });

      const filesToDownload = filesResponse || [];

      if (filesToDownload.length === 0) {
        alert("다운로드할 파일이 없습니다.");
        return;
      }

      // ZIP 파일 생성
      const zip = new JSZip();

      // 각 파일 다운로드 및 ZIP에 추가
      for (const file of filesToDownload) {
        try {
          // CORS 문제를 피하기 위해 프록시 또는 직접 fetch 사용
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

  if (isLoading) {
    return (
      <AdminMainTemplate>
        <S.Container>로딩 중...</S.Container>
      </AdminMainTemplate>
    );
  }

  return (
    <AdminMainTemplate>
      <S.Container>
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>주보 관리</S.SectionTitle>
            <S.AddButton onClick={handleCreateStart}>새 주보 작성</S.AddButton>
          </S.SectionHeader>

          {/* 검색 */}
          <S.Toolbar>
            <S.ViewMode>
              <S.InfoText>전체 {total}건</S.InfoText>
            </S.ViewMode>
            <S.SearchArea>
              <S.SearchInput
                type="text"
                placeholder="검색어를 입력하세요"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <S.SearchButton onClick={handleSearch}>검색</S.SearchButton>
            </S.SearchArea>
          </S.Toolbar>

          {/* 작성/수정 폼 */}
          {(isCreating || editingId) && (
            <S.FormSection>
              <S.FormRow>
                <S.FormLabel>제목</S.FormLabel>
                <S.FormInput
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="주보 제목을 입력하세요"
                />
              </S.FormRow>
              <S.FormRow>
                <S.FormLabel>날짜</S.FormLabel>
                <S.FormInput
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </S.FormRow>
              <S.FormActions>
                <S.SaveButton onClick={handleSaveBulletin}>저장</S.SaveButton>
                <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              </S.FormActions>

              {/* 파일 업로드 섹션 (주보 저장 후) */}
              {selectedBulletinId && (
                <S.FileSection>
                  <S.FileSectionHeader>
                    <S.FileSectionTitle>
                      주보 파일 업로드 (JPG)
                    </S.FileSectionTitle>
                    <S.UploadButton onClick={handleFileSelect}>
                      파일 선택
                    </S.UploadButton>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/jpeg,.jpg"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </S.FileSectionHeader>
                  <S.FileList>
                    {files.map((file) => (
                      <S.FileItem key={file.id}>
                        <S.FileName>{file.fileName}</S.FileName>
                        <S.FileActions>
                          <S.DeleteFileButton
                            onClick={() => handleDeleteFile(file.id)}
                          >
                            삭제
                          </S.DeleteFileButton>
                        </S.FileActions>
                      </S.FileItem>
                    ))}
                  </S.FileList>
                </S.FileSection>
              )}
            </S.FormSection>
          )}

          {/* 주보 목록 */}
          <S.BulletinsGrid>
            {bulletins.map((bulletin) => (
              <S.BulletinCard key={bulletin.id}>
                <S.BulletinThumbnail>
                  {bulletin.thumbnailUrl ? (
                    <img
                      src={bulletin.thumbnailUrl}
                      alt={bulletin.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <S.ThumbnailPlaceholder>
                      <p>주보</p>
                      <p style={{ fontSize: "1.2rem", marginTop: "8px" }}>
                        {dayjs(bulletin.date).format("YYYY.MM.DD")}
                      </p>
                    </S.ThumbnailPlaceholder>
                  )}
                </S.BulletinThumbnail>
                <S.BulletinInfo>
                  <S.BulletinDate>
                    {dayjs(bulletin.date).format("YYYY.MM.DD")}
                  </S.BulletinDate>
                  <S.BulletinTitle>{bulletin.title}</S.BulletinTitle>
                </S.BulletinInfo>
                <S.BulletinActions>
                  <S.EditButton onClick={() => handleEditStart(bulletin)}>
                    수정
                  </S.EditButton>
                  <S.DownloadButton onClick={() => handleDownloadAll(bulletin)}>
                    일괄 다운로드
                  </S.DownloadButton>
                  <S.DeleteButton
                    onClick={() => handleDeleteBulletin(bulletin.id)}
                  >
                    삭제
                  </S.DeleteButton>
                </S.BulletinActions>
              </S.BulletinCard>
            ))}
          </S.BulletinsGrid>

          {/* 페이지네이션 */}
          <S.Pagination>
            <S.PaginationButton
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              이전
            </S.PaginationButton>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <S.PaginationNumber
                key={num}
                $active={num === page}
                onClick={() => setPage(num)}
              >
                {num}
              </S.PaginationNumber>
            ))}
            <S.PaginationButton
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              다음
            </S.PaginationButton>
          </S.Pagination>
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default BulletinsAdminPage;
