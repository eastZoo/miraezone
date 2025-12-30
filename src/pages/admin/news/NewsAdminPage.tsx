import React, { useState, useMemo, useRef, useEffect } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useNewsList,
  useCreateNews,
  useUpdateNews,
  useDeleteNews,
  type News,
} from "@/lib/hooks/useNews";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { uploadImage } from "@/lib/utils/uploadImage";
import * as S from "./NewsAdminPage.style";
import dayjs from "dayjs";

const NewsAdminPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "소식",
    author: "",
    isNew: false,
  });

  // MD 에디터 초기화 추적
  const contentInitialized = useRef(false);
  const contentRef = useRef<string>("");

  const limit = 10;

  // 교회 소식 목록 조회
  const { data, isLoading } = useNewsList(page, limit, category, search);
  const news = data?.data || [];
  const total = data?.total || 0;

  // Mutations
  const createNews = useCreateNews();
  const updateNews = useUpdateNews();
  const deleteNews = useDeleteNews();

  const totalPages = Math.ceil(total / limit);
  const newCount = news.filter((n) => n.isNew).length;

  // 검색 핸들러
  const handleSearch = () => {
    setPage(1);
  };

  // 새 소식 작성 시작
  const handleCreateStart = () => {
    setIsCreating(true);
    setEditingId(null);
    contentInitialized.current = false;
    contentRef.current = "";
    setFormData({
      title: "",
      content: "",
      category: "소식",
      author: "",
      isNew: false,
    });
  };

  // 수정 시작
  const handleEditStart = (item: News) => {
    setIsCreating(false);
    setEditingId(item.id);
    contentInitialized.current = false;
    setFormData({
      title: item.title,
      content: item.content,
      category: item.category,
      author: item.author || "",
      isNew: item.isNew,
    });
    contentRef.current = item.content;
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
      category: "소식",
      author: "",
      isNew: false,
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

  // 저장
  const handleSave = async () => {
    try {
      if (editingId) {
        await updateNews.mutateAsync({
          id: editingId,
          data: formData,
        });
        alert("교회 소식이 성공적으로 수정되었습니다.");
      } else {
        await createNews.mutateAsync(formData);
        alert("교회 소식이 성공적으로 생성되었습니다.");
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
      await deleteNews.mutateAsync(id);
      alert("교회 소식이 성공적으로 삭제되었습니다.");
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
      pageTitle="교회 소식 관리"
      breadcrumb={["관리자", "교회 소식 관리"]}
    >
      <S.Container>
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 소식 관리</S.SectionTitle>
            <S.AddButton onClick={handleCreateStart}>새 소식 작성</S.AddButton>
          </S.SectionHeader>

          {/* 검색 및 필터 */}
          <S.Toolbar>
            <S.ViewMode>
              <S.InfoText>
                새글 {newCount}/{total}
              </S.InfoText>
            </S.ViewMode>
            <S.SearchArea>
              <S.SelectBox
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">전체</option>
                <option value="예배">예배</option>
                <option value="행사">행사</option>
                <option value="선교">선교</option>
                <option value="소식">소식</option>
              </S.SelectBox>
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
                  placeholder="소식 제목을 입력하세요"
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
                <S.FormLabel>카테고리</S.FormLabel>
                <S.SelectBox
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="예배">예배</option>
                  <option value="행사">행사</option>
                  <option value="선교">선교</option>
                  <option value="소식">소식</option>
                </S.SelectBox>
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
              </S.FormRow>
              <S.FormActions>
                <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
                <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              </S.FormActions>
            </S.FormSection>
          )}

          {/* 소식 목록 */}
          <S.NewsList>
            {news.map((item) => (
              <S.NewsItem key={item.id}>
                <S.NewsCategory>{item.category}</S.NewsCategory>
                <S.NewsTitle>
                  {item.isNew && <S.NewBadge>NEW</S.NewBadge>}
                  {item.title}
                </S.NewsTitle>
                <S.NewsMeta>
                  <S.NewsDate>
                    {dayjs(item.createdAt).format("YYYY.MM.DD")}
                  </S.NewsDate>
                  <S.NewsViews>조회 {item.views}</S.NewsViews>
                </S.NewsMeta>
                <S.NewsActions>
                  <S.EditButton onClick={() => handleEditStart(item)}>
                    수정
                  </S.EditButton>
                  <S.DeleteButton onClick={() => handleDelete(item.id)}>
                    삭제
                  </S.DeleteButton>
                </S.NewsActions>
              </S.NewsItem>
            ))}
          </S.NewsList>

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

export default NewsAdminPage;
