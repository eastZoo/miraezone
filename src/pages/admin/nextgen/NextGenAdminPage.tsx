import React, { useState, useMemo, useRef, useEffect } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useNextGenDepartment,
  useUpsertNextGenDepartment,
} from "@/lib/hooks/useNextGenDepartment";
import {
  useNextGenAlbumList,
  useNextGenAlbum,
  useCreateNextGenAlbum,
  useUpdateNextGenAlbum,
  useDeleteNextGenAlbum,
  useAddNextGenAlbumImage,
  useDeleteNextGenAlbumImage,
  type NextGenAlbum,
} from "@/lib/hooks/useNextGenAlbum";
import {
  useNextGenListAdmin,
  useCreateNextGen,
  useUpdateNextGen,
  useDeleteNextGen,
  type NextGen,
} from "@/lib/hooks/useNextGen";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { uploadImage } from "@/lib/utils/uploadImage";
import * as S from "./NextGenAdminPage.style";
import dayjs from "dayjs";

const NextGenAdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "department" | "elementary" | "youth" | "youngadult" | "news"
  >("department");
  const [selectedDepartment, setSelectedDepartment] =
    useState<string>("유초등부");

  // 부서 정보 관리 상태
  const [deptFormData, setDeptFormData] = useState({
    heroImageUrl: "",
    introduction: "",
    worshipTime: "",
    place: "",
    target: "",
    contact: "",
  });

  // 앨범 관리 상태
  const [isCreatingAlbum, setIsCreatingAlbum] = useState(false);
  const [editingAlbumId, setEditingAlbumId] = useState<number | null>(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
  const [albumFormData, setAlbumFormData] = useState({
    title: "",
    description: "",
  });

  // 다음세대 소식 관리 상태
  const [newsPage, setNewsPage] = useState(1);
  const [newsSearch, setNewsSearch] = useState<string>("");
  const [newsDepartment, setNewsDepartment] = useState<string>("");
  const [isCreatingNews, setIsCreatingNews] = useState(false);
  const [editingNewsId, setEditingNewsId] = useState<number | null>(null);
  const [newsFormData, setNewsFormData] = useState({
    department: "유초등부",
    title: "",
    content: "",
    author: "",
    type: "",
    isNew: false,
    isNotice: false,
  });
  const newsContentInitialized = useRef(false);
  const newsContentRef = useRef<string>("");
  const newsImageInputRef = useRef<HTMLInputElement>(null);

  // 부서 정보 조회
  const { data: department, isLoading: deptLoading } =
    useNextGenDepartment(selectedDepartment);

  // 앨범 목록 조회 (관리자용 - 모든 앨범)
  const { data: albumsData, isLoading: albumsLoading } = useNextGenAlbumList(
    1,
    100,
    activeTab === "elementary"
      ? "유초등부"
      : activeTab === "youth"
      ? "중고등부"
      : activeTab === "youngadult"
      ? "청년부"
      : undefined
  );
  const albums = albumsData?.data || [];

  // 선택된 앨범의 상세 정보 조회 (이미지 목록 포함)
  // 관리자 페이지에서는 조회수를 증가시키지 않음
  const { data: selectedAlbum } = useNextGenAlbum(selectedAlbumId || 0, false);

  // 다음세대 소식 목록 조회
  const { data: newsData, isLoading: newsLoading } = useNextGenListAdmin(
    newsPage,
    10,
    newsDepartment || undefined,
    newsSearch || undefined
  );
  const newsList = newsData?.data || [];
  const newsTotal = newsData?.total || 0;

  // Mutations
  const upsertDepartment = useUpsertNextGenDepartment();
  const createAlbum = useCreateNextGenAlbum();
  const updateAlbum = useUpdateNextGenAlbum();
  const deleteAlbum = useDeleteNextGenAlbum();
  const addAlbumImage = useAddNextGenAlbumImage();
  const deleteAlbumImage = useDeleteNextGenAlbumImage();
  const createNews = useCreateNextGen();
  const updateNews = useUpdateNextGen();
  const deleteNews = useDeleteNextGen();

  const albumImageInputRef = React.useRef<HTMLInputElement>(null);

  // 부서 정보 로드
  React.useEffect(() => {
    if (department) {
      setDeptFormData({
        heroImageUrl: department.heroImageUrl || "",
        introduction: department.introduction || "",
        worshipTime: department.worshipTime || "",
        place: department.place || "",
        target: department.target || "",
        contact: department.contact || "",
      });
    }
  }, [department]);

  // 부서 정보 저장
  const handleSaveDepartment = async () => {
    try {
      await upsertDepartment.mutateAsync({
        type: selectedDepartment,
        ...deptFormData,
      });
      alert("부서 정보가 성공적으로 저장되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 히어로 이미지 업로드
  const handleHeroImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadImage(file);
      setDeptFormData({ ...deptFormData, heroImageUrl: result.url });
      alert("이미지가 성공적으로 업로드되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "이미지 업로드 실패");
    }
  };

  // 앨범 저장
  const handleSaveAlbum = async () => {
    if (!albumFormData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    const deptType =
      activeTab === "elementary"
        ? "유초등부"
        : activeTab === "youth"
        ? "중고등부"
        : "청년부";

    try {
      if (editingAlbumId) {
        await updateAlbum.mutateAsync({
          id: editingAlbumId,
          data: albumFormData,
        });
        // 수정 시에도 selectedAlbumId를 유지하여 이미지 목록을 계속 볼 수 있게 함
        alert("앨범이 성공적으로 수정되었습니다.");
      } else {
        const result = await createAlbum.mutateAsync({
          department: deptType,
          ...albumFormData,
        });
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
  const handleEditAlbum = (album: NextGenAlbum) => {
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

  // 다음세대 소식 이미지 업로드 핸들러
  const handleNewsImageUpload = async (file: File): Promise<string> => {
    const result = await uploadImage(file);
    return result.url;
  };

  // 다음세대 소식 MD 에디터 옵션
  const newsEditorOptions = useMemo(
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
          const url = await handleNewsImageUpload(file);
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

  // 다음세대 소식 content 변경 시 formData 업데이트
  useEffect(() => {
    if (newsFormData.content !== newsContentRef.current) {
      newsContentRef.current = newsFormData.content;
    }
  }, [newsFormData.content]);

  // 다음세대 소식 SimpleMDE 이미지 버튼 클릭 이벤트 처리
  useEffect(() => {
    if (!isCreatingNews && !editingNewsId) return;

    let cleanup: (() => void) | undefined;

    const timer = setTimeout(() => {
      const handleImageButtonClick = (e: Event) => {
        const target = e.target as HTMLElement;
        const imageIcon = target.classList.contains("fa-image")
          ? target
          : (target.closest(".fa-image") as HTMLElement);

        if (imageIcon) {
          e.preventDefault();
          e.stopPropagation();
          newsImageInputRef.current?.click();
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
  }, [isCreatingNews, editingNewsId, newsFormData.content]);

  // 다음세대 소식 작성 시작
  const handleCreateNewsStart = () => {
    setIsCreatingNews(true);
    setEditingNewsId(null);
    newsContentInitialized.current = false;
    newsContentRef.current = "";
    setNewsFormData({
      department: "유초등부",
      title: "",
      content: "",
      author: "",
      type: "",
      isNew: false,
      isNotice: false,
    });
  };

  // 다음세대 소식 수정 시작
  const handleEditNewsStart = (news: NextGen) => {
    setIsCreatingNews(false);
    setEditingNewsId(news.id);
    newsContentInitialized.current = false;
    setNewsFormData({
      department: news.department,
      title: news.title,
      content: news.content || "",
      author: news.author || "",
      type: news.type || "",
      isNew: news.isNew,
      isNotice: news.isNotice,
    });
    newsContentRef.current = news.content || "";
  };

  // 다음세대 소식 취소
  const handleCancelNews = () => {
    setIsCreatingNews(false);
    setEditingNewsId(null);
    newsContentInitialized.current = false;
    newsContentRef.current = "";
    setNewsFormData({
      department: "유초등부",
      title: "",
      content: "",
      author: "",
      type: "",
      isNew: false,
      isNotice: false,
    });
  };

  // 다음세대 소식 저장
  const handleSaveNews = async () => {
    try {
      if (editingNewsId) {
        await updateNews.mutateAsync({
          id: editingNewsId,
          data: newsFormData,
        });
        alert("다음세대 소식이 성공적으로 수정되었습니다.");
      } else {
        await createNews.mutateAsync(newsFormData);
        alert("다음세대 소식이 성공적으로 생성되었습니다.");
      }
      handleCancelNews();
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 다음세대 소식 삭제
  const handleDeleteNews = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteNews.mutateAsync(id);
      alert("다음세대 소식이 성공적으로 삭제되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  // 다음세대 소식 검색
  const handleNewsSearch = () => {
    setNewsPage(1);
  };

  if (deptLoading || albumsLoading || newsLoading) {
    return (
      <AdminMainTemplate>
        <S.Container>로딩 중...</S.Container>
      </AdminMainTemplate>
    );
  }

  return (
    <AdminMainTemplate>
      <S.Container>
        {/* 탭 메뉴 */}
        <S.TabContainer>
          <S.TabButton
            $active={activeTab === "department"}
            onClick={() => setActiveTab("department")}
          >
            부서 정보 관리
          </S.TabButton>
          <S.TabButton
            $active={activeTab === "elementary"}
            onClick={() => setActiveTab("elementary")}
          >
            유초등부 앨범
          </S.TabButton>
          <S.TabButton
            $active={activeTab === "youth"}
            onClick={() => setActiveTab("youth")}
          >
            중고등부 앨범
          </S.TabButton>
          <S.TabButton
            $active={activeTab === "youngadult"}
            onClick={() => setActiveTab("youngadult")}
          >
            청년부 앨범
          </S.TabButton>
          <S.TabButton
            $active={activeTab === "news"}
            onClick={() => setActiveTab("news")}
          >
            다음세대 소식 관리
          </S.TabButton>
        </S.TabContainer>

        {/* 부서 정보 관리 */}
        {activeTab === "department" && (
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>부서 정보 관리</S.SectionTitle>
            </S.SectionHeader>

            <S.FormSection>
              <S.FormRow>
                <S.FormLabel>부서 선택</S.FormLabel>
                <S.SelectBox
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="유초등부">유초등부</option>
                  <option value="중고등부">중고등부</option>
                  <option value="청년부">청년부</option>
                </S.SelectBox>
              </S.FormRow>

              <S.FormRow>
                <S.FormLabel>히어로 이미지</S.FormLabel>
                <S.ImageUploadArea>
                  {deptFormData.heroImageUrl ? (
                    <S.PreviewImage
                      src={deptFormData.heroImageUrl}
                      alt="히어로 이미지"
                    />
                  ) : (
                    <S.PreviewPlaceholder>이미지 없음</S.PreviewPlaceholder>
                  )}
                  <S.UploadButton
                    onClick={() =>
                      document.getElementById("heroImageInput")?.click()
                    }
                  >
                    이미지 업로드
                  </S.UploadButton>
                  <input
                    id="heroImageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleHeroImageUpload}
                  />
                </S.ImageUploadArea>
              </S.FormRow>

              <S.FormRow>
                <S.FormLabel>부서 소개</S.FormLabel>
                <S.TextArea
                  value={deptFormData.introduction}
                  onChange={(e) =>
                    setDeptFormData({
                      ...deptFormData,
                      introduction: e.target.value,
                    })
                  }
                  placeholder="부서 소개를 입력하세요 (줄바꿈은 Enter로 구분)"
                  rows={6}
                />
              </S.FormRow>

              <S.FormRow>
                <S.FormLabel>예배 시간</S.FormLabel>
                <S.FormInput
                  type="text"
                  value={deptFormData.worshipTime}
                  onChange={(e) =>
                    setDeptFormData({
                      ...deptFormData,
                      worshipTime: e.target.value,
                    })
                  }
                  placeholder="예: 주일 오전 11:00"
                />
              </S.FormRow>

              <S.FormRow>
                <S.FormLabel>장소</S.FormLabel>
                <S.FormInput
                  type="text"
                  value={deptFormData.place}
                  onChange={(e) =>
                    setDeptFormData({
                      ...deptFormData,
                      place: e.target.value,
                    })
                  }
                  placeholder="예: 유초등부실"
                />
              </S.FormRow>

              <S.FormRow>
                <S.FormLabel>대상</S.FormLabel>
                <S.FormInput
                  type="text"
                  value={deptFormData.target}
                  onChange={(e) =>
                    setDeptFormData({
                      ...deptFormData,
                      target: e.target.value,
                    })
                  }
                  placeholder="예: 만 5세 ~ 초등학생"
                />
              </S.FormRow>

              <S.FormRow>
                <S.FormLabel>담당자 연락처</S.FormLabel>
                <S.FormInput
                  type="text"
                  value={deptFormData.contact}
                  onChange={(e) =>
                    setDeptFormData({
                      ...deptFormData,
                      contact: e.target.value,
                    })
                  }
                  placeholder="예: 010-1234-5678"
                />
              </S.FormRow>

              <S.FormActions>
                <S.SaveButton onClick={handleSaveDepartment}>저장</S.SaveButton>
              </S.FormActions>
            </S.FormSection>
          </S.Section>
        )}

        {/* 앨범 관리 */}
        {(activeTab === "elementary" ||
          activeTab === "youth" ||
          activeTab === "youngadult") && (
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>
                {activeTab === "elementary"
                  ? "유초등부"
                  : activeTab === "youth"
                  ? "중고등부"
                  : "청년부"}{" "}
                앨범 관리
              </S.SectionTitle>
              <S.AddButton
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
              </S.AddButton>
            </S.SectionHeader>

            {/* 작성/수정 폼 */}
            {(isCreatingAlbum || editingAlbumId) && (
              <S.FormSection>
                <S.FormRow>
                  <S.FormLabel>제목</S.FormLabel>
                  <S.FormInput
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
                  <S.FormLabel>설명</S.FormLabel>
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
                            <S.AlbumImageName>
                              {image.fileName}
                            </S.AlbumImageName>
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
          </S.Section>
        )}

        {/* 다음세대 소식 관리 */}
        {activeTab === "news" && (
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>다음세대 소식 관리</S.SectionTitle>
              <S.AddButton onClick={handleCreateNewsStart}>
                새 소식 작성
              </S.AddButton>
            </S.SectionHeader>

            {/* 검색 및 필터 */}
            <S.Toolbar>
              <S.ViewMode>
                <S.InfoText>전체 {newsTotal}개</S.InfoText>
              </S.ViewMode>
              <S.SearchArea>
                <S.SelectBox
                  value={newsDepartment}
                  onChange={(e) => setNewsDepartment(e.target.value)}
                >
                  <option value="">전체 부서</option>
                  <option value="유초등부">유초등부</option>
                  <option value="중고등부">중고등부</option>
                  <option value="청년부">청년부</option>
                </S.SelectBox>
                <S.SearchInput
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={newsSearch}
                  onChange={(e) => setNewsSearch(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleNewsSearch()}
                />
                <S.SearchButton onClick={handleNewsSearch}>검색</S.SearchButton>
              </S.SearchArea>
            </S.Toolbar>

            {/* 작성/수정 폼 */}
            {(isCreatingNews || editingNewsId) && (
              <S.FormSection>
                <S.FormRow>
                  <S.FormLabel>부서</S.FormLabel>
                  <S.SelectBox
                    value={newsFormData.department}
                    onChange={(e) =>
                      setNewsFormData({
                        ...newsFormData,
                        department: e.target.value,
                      })
                    }
                  >
                    <option value="유초등부">유초등부</option>
                    <option value="중고등부">중고등부</option>
                    <option value="청년부">청년부</option>
                  </S.SelectBox>
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>제목</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={newsFormData.title}
                    onChange={(e) =>
                      setNewsFormData({
                        ...newsFormData,
                        title: e.target.value,
                      })
                    }
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>작성자</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={newsFormData.author}
                    onChange={(e) =>
                      setNewsFormData({
                        ...newsFormData,
                        author: e.target.value,
                      })
                    }
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>타입</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={newsFormData.type}
                    onChange={(e) =>
                      setNewsFormData({ ...newsFormData, type: e.target.value })
                    }
                    placeholder="소식, 안내 등"
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>
                    <input
                      type="checkbox"
                      checked={newsFormData.isNew}
                      onChange={(e) =>
                        setNewsFormData({
                          ...newsFormData,
                          isNew: e.target.checked,
                        })
                      }
                    />
                    새글
                  </S.FormLabel>
                  <S.FormLabel>
                    <input
                      type="checkbox"
                      checked={newsFormData.isNotice}
                      onChange={(e) =>
                        setNewsFormData({
                          ...newsFormData,
                          isNotice: e.target.checked,
                        })
                      }
                    />
                    공지
                  </S.FormLabel>
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>내용</S.FormLabel>
                  <S.EditorWrapper>
                    <SimpleMDE
                      value={newsFormData.content}
                      onChange={(value) => {
                        if (!newsContentInitialized.current) {
                          newsContentInitialized.current = true;
                        }
                        setNewsFormData({ ...newsFormData, content: value });
                      }}
                      options={newsEditorOptions}
                    />
                  </S.EditorWrapper>
                  <input
                    ref={newsImageInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        try {
                          const url = await handleNewsImageUpload(file);
                          const currentContent = newsFormData.content || "";
                          const imageMarkdown = `![${file.name}](${url})`;
                          setNewsFormData({
                            ...newsFormData,
                            content: currentContent + "\n" + imageMarkdown,
                          });
                        } catch (error: any) {
                          alert(
                            error?.response?.data?.message ||
                              "이미지 업로드에 실패했습니다."
                          );
                        }
                      }
                      if (newsImageInputRef.current) {
                        newsImageInputRef.current.value = "";
                      }
                    }}
                  />
                </S.FormRow>
                <S.FormActions>
                  <S.SaveButton onClick={handleSaveNews}>저장</S.SaveButton>
                  <S.CancelButton onClick={handleCancelNews}>
                    취소
                  </S.CancelButton>
                </S.FormActions>
              </S.FormSection>
            )}

            {/* 소식 목록 */}
            <S.NewsList>
              {newsList.map((news) => (
                <S.NewsItem key={news.id}>
                  <S.NewsInfo>
                    <S.NewsTitle>
                      {news.isNotice && <S.NoticeBadge>공지</S.NoticeBadge>}
                      {news.isNew && <S.NewBadge>NEW</S.NewBadge>}
                      {news.title}
                    </S.NewsTitle>
                    <S.NewsMeta>
                      <S.NewsDepartment>{news.department}</S.NewsDepartment>
                      <S.NewsDate>
                        {dayjs(news.createdAt).format("YYYY.MM.DD")}
                      </S.NewsDate>
                      <S.NewsViews>조회 {news.views}</S.NewsViews>
                    </S.NewsMeta>
                  </S.NewsInfo>
                  <S.NewsActions>
                    <S.EditButton onClick={() => handleEditNewsStart(news)}>
                      수정
                    </S.EditButton>
                    <S.DeleteButton onClick={() => handleDeleteNews(news.id)}>
                      삭제
                    </S.DeleteButton>
                  </S.NewsActions>
                </S.NewsItem>
              ))}
            </S.NewsList>

            {/* 페이지네이션 */}
            {Math.ceil(newsTotal / 10) > 1 && (
              <S.Pagination>
                <S.PaginationButton
                  disabled={newsPage === 1}
                  onClick={() => setNewsPage(newsPage - 1)}
                >
                  이전
                </S.PaginationButton>
                {Array.from(
                  { length: Math.ceil(newsTotal / 10) },
                  (_, i) => i + 1
                ).map((num) => (
                  <S.PaginationNumber
                    key={num}
                    $active={num === newsPage}
                    onClick={() => setNewsPage(num)}
                  >
                    {num}
                  </S.PaginationNumber>
                ))}
                <S.PaginationButton
                  disabled={newsPage >= Math.ceil(newsTotal / 10)}
                  onClick={() => setNewsPage(newsPage + 1)}
                >
                  다음
                </S.PaginationButton>
              </S.Pagination>
            )}
          </S.Section>
        )}
      </S.Container>
    </AdminMainTemplate>
  );
};

export default NextGenAdminPage;
