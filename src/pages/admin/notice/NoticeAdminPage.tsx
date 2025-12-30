import React, { useState, useMemo, useRef, useEffect } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useNoticeList,
  useCreateNotice,
  useUpdateNotice,
  useDeleteNotice,
  type Notice,
} from "@/lib/hooks/useNotice";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { uploadImage } from "@/lib/utils/uploadImage";
import * as S from "./NoticeAdminPage.style";
import dayjs from "dayjs";

const NoticeAdminPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    isNew: false,
    isImportant: false,
  });

  // MD 에디터 초기화 추적
  const contentInitialized = useRef(false);
  const contentRef = useRef<string>("");

  const limit = 10;

  // 공지사항 목록 조회
  const { data, isLoading } = useNoticeList(page, limit, search);
  const notices = data?.data || [];
  const total = data?.total || 0;

  // Mutations
  const createNotice = useCreateNotice();
  const updateNotice = useUpdateNotice();
  const deleteNotice = useDeleteNotice();

  const totalPages = Math.ceil(total / limit);
  const newCount = notices.filter((n) => n.isNew).length;

  // 검색 핸들러
  const handleSearch = () => {
    setPage(1);
  };

  // 새 공지사항 작성 시작
  const handleCreateStart = () => {
    setIsCreating(true);
    setEditingId(null);
    contentInitialized.current = false;
    contentRef.current = "";
    setFormData({
      title: "",
      content: "",
      author: "",
      isNew: false,
      isImportant: false,
    });
  };

  // 이미지 업로드용 파일 입력 ref
  const imageInputRef = useRef<HTMLInputElement>(null);

  // 이미지 업로드 핸들러
  const handleImageUpload = async (file: File): Promise<string> => {
    const result = await uploadImage(file);
    return result.url;
  };

  // MD 에디터 옵션 (이미지 업로드 포함)
  const editorOptions = useMemo(
    () => ({
      placeholder: "Markdown 형식으로 입력하세요...",
      spellChecker: false,
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
      ] as const,
      imageUploadFunction: async (
        file: File,
        onSuccess: (url: string) => void,
        onError: (error: string) => void
      ) => {
        try {
          const url = await handleImageUpload(file);
          onSuccess(url);
        } catch (error: any) {
          onError(error?.response?.data?.message || "이미지 업로드 실패");
        }
      },
      imageTexts: {
        sbInit: "이미지를 드래그하거나 클릭하여 업로드",
        sbOnDragEnter: "이미지를 여기에 놓으세요",
        sbOnDrop: "이미지를 놓는 중...",
        sbProgress: "업로드 중...",
        sbOnUploaded: "업로드 완료",
      },
      uploadImage: true,
      imageAccept: "image/jpeg,image/jpg,image/png,image/gif,image/webp",
    }),
    []
  );

  // content 변경 시 formData 업데이트
  useEffect(() => {
    if (formData.content !== contentRef.current) {
      contentRef.current = formData.content;
    }
  }, [formData.content]);

  // SimpleMDE 이미지 버튼 클릭 이벤트 처리
  useEffect(() => {
    if (!isCreating && !editingId) return;

    let cleanup: (() => void) | undefined;

    // 약간의 지연을 두어 DOM이 완전히 렌더링된 후 이벤트 리스너 추가
    const timer = setTimeout(() => {
      const handleImageButtonClick = (e: Event) => {
        const target = e.target as HTMLElement;
        // SimpleMDE의 이미지 버튼 찾기
        const imageIcon = target.classList.contains("fa-image")
          ? target
          : (target.closest(".fa-image") as HTMLElement);

        if (imageIcon) {
          e.preventDefault();
          e.stopPropagation();
          imageInputRef.current?.click();
        }
      };

      const editorContainer = document.querySelector(".EasyMDEContainer");
      if (editorContainer) {
        editorContainer.addEventListener("click", handleImageButtonClick, true);
        cleanup = () => {
          editorContainer.removeEventListener(
            "click",
            handleImageButtonClick,
            true
          );
        };
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (cleanup) cleanup();
    };
  }, [isCreating, editingId, formData.content]);

  // 수정 시작
  const handleEditStart = (notice: Notice) => {
    setIsCreating(false);
    setEditingId(notice.id);
    contentInitialized.current = false;
    setFormData({
      title: notice.title,
      content: notice.content,
      author: notice.author || "",
      isNew: notice.isNew,
      isImportant: notice.isImportant,
    });
    contentRef.current = notice.content;
  };

  // 취소
  const handleCancel = () => {
    setIsCreating(false);
    setEditingId(null);
    contentInitialized.current = false;
    contentRef.current = "";
    setFormData({
      title: "",
      content: "",
      author: "",
      isNew: false,
      isImportant: false,
    });
  };

  // 저장
  const handleSave = async () => {
    try {
      if (editingId) {
        await updateNotice.mutateAsync({
          id: editingId,
          data: formData,
        });
        alert("공지사항이 성공적으로 수정되었습니다.");
      } else {
        await createNotice.mutateAsync(formData);
        alert("공지사항이 성공적으로 생성되었습니다.");
      }
      handleCancel();
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 삭제
  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteNotice.mutateAsync(id);
      alert("공지사항이 성공적으로 삭제되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
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
    <AdminMainTemplate
      containerType="standard"
      pageTitle="공지사항 관리"
      breadcrumb={["관리자", "공지사항 관리"]}
    >
      <S.Container>
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>공지사항 관리</S.SectionTitle>
            <S.AddButton onClick={handleCreateStart}>
              새 공지사항 작성
            </S.AddButton>
          </S.SectionHeader>

          {/* 검색 및 필터 */}
          <S.Toolbar>
            <S.ViewMode>
              <S.InfoText>
                새글 {newCount}/{total}
              </S.InfoText>
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
                  placeholder="공지사항 제목을 입력하세요"
                />
              </S.FormRow>
              <S.FormRow>
                <S.FormLabel>내용</S.FormLabel>
                <S.EditorWrapper
                  onDrop={async (e) => {
                    e.preventDefault();
                    const files = Array.from(e.dataTransfer.files);
                    const imageFiles = files.filter((file) =>
                      file.type.startsWith("image/")
                    );

                    if (imageFiles.length === 0) return;

                    const editor = document.querySelector(
                      ".CodeMirror" ? ".CodeMirror" : ".editor-toolbar"
                    ) as HTMLElement;
                    if (!editor) return;

                    for (const file of imageFiles) {
                      try {
                        const url = await handleImageUpload(file);
                        const markdown = `![${file.name}](${url})\n`;
                        setFormData({
                          ...formData,
                          content: formData.content + markdown,
                        });
                      } catch (error: any) {
                        alert(
                          error?.response?.data?.message || "이미지 업로드 실패"
                        );
                      }
                    }
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/webp"
                    style={{ display: "none" }}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      try {
                        const url = await handleImageUpload(file);
                        const markdown = `![${file.name}](${url})\n`;
                        setFormData({
                          ...formData,
                          content: formData.content + markdown,
                        });
                      } catch (error: any) {
                        alert(
                          error?.response?.data?.message || "이미지 업로드 실패"
                        );
                      } finally {
                        if (imageInputRef.current) {
                          imageInputRef.current.value = "";
                        }
                      }
                    }}
                  />
                  <SimpleMDE
                    value={formData.content}
                    onChange={(value) => {
                      setFormData({ ...formData, content: value });
                    }}
                    options={editorOptions}
                  />
                </S.EditorWrapper>
              </S.FormRow>
              <S.FormRow>
                <S.FormLabel>작성자</S.FormLabel>
                <S.FormInput
                  type="text"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  placeholder="작성자 이름 (선택사항)"
                />
              </S.FormRow>
              <S.FormRow>
                <S.CheckboxLabel>
                  <input
                    type="checkbox"
                    checked={formData.isNew}
                    onChange={(e) =>
                      setFormData({ ...formData, isNew: e.target.checked })
                    }
                  />
                  NEW 표시
                </S.CheckboxLabel>
                <S.CheckboxLabel>
                  <input
                    type="checkbox"
                    checked={formData.isImportant}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        isImportant: e.target.checked,
                      })
                    }
                  />
                  중요 공지
                </S.CheckboxLabel>
              </S.FormRow>
              <S.FormActions>
                <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
                <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              </S.FormActions>
            </S.FormSection>
          )}

          {/* 공지사항 목록 */}
          <S.NoticeList>
            {notices.map((notice) => (
              <S.NoticeItem key={notice.id}>
                <S.NoticeTitle>
                  {notice.isNew && <S.NewBadge>NEW</S.NewBadge>}
                  {notice.isImportant && (
                    <S.ImportantBadge>중요</S.ImportantBadge>
                  )}
                  {notice.title}
                </S.NoticeTitle>
                <S.NoticeMeta>
                  <S.NoticeDate>
                    {dayjs(notice.createdAt).format("YYYY.MM.DD")}
                  </S.NoticeDate>
                  <S.NoticeViews>조회 {notice.views}</S.NoticeViews>
                </S.NoticeMeta>
                <S.NoticeActions>
                  <S.EditButton onClick={() => handleEditStart(notice)}>
                    수정
                  </S.EditButton>
                  <S.DeleteButton onClick={() => handleDelete(notice.id)}>
                    삭제
                  </S.DeleteButton>
                </S.NoticeActions>
              </S.NoticeItem>
            ))}
          </S.NoticeList>

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

export default NoticeAdminPage;
