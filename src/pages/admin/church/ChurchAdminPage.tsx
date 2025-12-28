import React, { useState, useMemo, useRef, useEffect } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useChurchInfo,
  useChurchHistory,
  useUpsertChurchInfo,
  useCreateChurchHistory,
  useUpdateChurchHistory,
  useDeleteChurchHistory,
} from "@/lib/hooks/useChurch";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import * as S from "./ChurchAdminPage.style";

const ChurchAdminPage: React.FC = () => {
  // 교회 비전, 교회 소개 조회
  const { data: vision } = useChurchInfo("vision");
  const { data: introduction } = useChurchInfo("introduction");
  const { data: history = [] } = useChurchHistory();

  // Mutations
  const upsertChurchInfo = useUpsertChurchInfo();
  const createHistory = useCreateChurchHistory();
  const updateHistory = useUpdateChurchHistory();
  const deleteHistory = useDeleteChurchHistory();

  // 초기 로드 여부 추적
  const visionInitialized = useRef(false);
  const introInitialized = useRef(false);

  // 상태 관리
  const [visionContent, setVisionContent] = useState("");
  const [introContent, setIntroContent] = useState("");
  const [isSavingVision, setIsSavingVision] = useState(false);
  const [isSavingIntro, setIsSavingIntro] = useState(false);

  // 연혁 관리 상태
  const [editingHistory, setEditingHistory] = useState<number | null>(null);
  const [editingHistoryData, setEditingHistoryData] = useState<{
    year: string;
    content: string;
    order: number;
  } | null>(null);
  const [newHistory, setNewHistory] = useState({
    year: "",
    content: "",
    order: 0,
  });

  // 교회 비전 저장
  const handleSaveVision = async () => {
    if (!visionContent.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    setIsSavingVision(true);
    try {
      const result = await upsertChurchInfo.mutateAsync({
        type: "vision",
        title: "교회 비전",
        content: visionContent,
      });

      console.log("저장 성공:", result);
      alert("교회 비전이 저장되었습니다.");
    } catch (error: any) {
      console.error("저장 오류:", error);

      let errorMessage = "저장 중 오류가 발생했습니다.";

      // Axios 에러 처리
      if (error?.response) {
        const status = error.response.status;
        if (status === 0 || !error.response.data) {
          errorMessage =
            "CORS 에러 또는 네트워크 연결 오류가 발생했습니다. 서버 설정을 확인해주세요.";
        } else {
          errorMessage =
            error.response.data?.message || `서버 오류 (${status})`;
        }
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      alert(errorMessage);
    } finally {
      setIsSavingVision(false);
    }
  };

  // 교회 소개 저장
  const handleSaveIntro = async () => {
    if (!introContent.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }
    setIsSavingIntro(true);
    try {
      const result = await upsertChurchInfo.mutateAsync({
        type: "introduction",
        title: "교회 소개",
        content: introContent,
      });

      console.log("저장 성공:", result);
      alert("교회 소개가 저장되었습니다.");
    } catch (error: any) {
      console.error("저장 오류:", error);

      let errorMessage = "저장 중 오류가 발생했습니다.";

      // Axios 에러 처리
      if (error?.response) {
        const status = error.response.status;
        if (status === 0 || !error.response.data) {
          errorMessage =
            "CORS 에러 또는 네트워크 연결 오류가 발생했습니다. 서버 설정을 확인해주세요.";
        } else {
          errorMessage =
            error.response.data?.message || `서버 오류 (${status})`;
        }
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      alert(errorMessage);
    } finally {
      setIsSavingIntro(false);
    }
  };

  // 연혁 추가
  const handleAddHistory = async () => {
    if (!newHistory.year || !newHistory.content) {
      alert("연도와 내용을 입력해주세요.");
      return;
    }
    try {
      await createHistory.mutateAsync(newHistory);
      setNewHistory({ year: "", content: "", order: 0 });
      alert("연혁이 추가되었습니다.");
    } catch (error) {
      alert("추가 중 오류가 발생했습니다.");
    }
  };

  // 연혁 수정 시작
  const handleStartEditHistory = (item: (typeof history)[0]) => {
    setEditingHistory(item.id);
    setEditingHistoryData({
      year: item.year,
      content: item.content,
      order: item.order,
    });
  };

  // 연혁 수정 취소
  const handleCancelEditHistory = () => {
    setEditingHistory(null);
    setEditingHistoryData(null);
  };

  // 연혁 수정 저장
  const handleUpdateHistory = async (id: number) => {
    if (!editingHistoryData) return;
    try {
      await updateHistory.mutateAsync({ id, data: editingHistoryData });
      setEditingHistory(null);
      setEditingHistoryData(null);
      alert("연혁이 수정되었습니다.");
    } catch (error) {
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  // 연혁 삭제
  const handleDeleteHistory = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    try {
      await deleteHistory.mutateAsync(id);
      alert("연혁이 삭제되었습니다.");
    } catch (error) {
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  // MD 에디터 옵션 메모이제이션
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
    }),
    []
  );

  // vision 데이터가 로드되면 초기값 설정 (한 번만)
  useEffect(() => {
    if (vision && !visionInitialized.current) {
      setVisionContent(vision.content || "");
      visionInitialized.current = true;
    }
  }, [vision]);

  // introduction 데이터가 로드되면 초기값 설정 (한 번만)
  useEffect(() => {
    if (introduction && !introInitialized.current) {
      setIntroContent(introduction.content || "");
      introInitialized.current = true;
    }
  }, [introduction]);

  return (
    <AdminMainTemplate
      containerType="standard"
      pageTitle="교회 정보 관리"
      breadcrumb={["관리자", "교회 정보 관리"]}
    >
      <S.Container>
        {/* 교회 비전 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 비전</S.SectionTitle>
            <S.SaveButton onClick={handleSaveVision} disabled={isSavingVision}>
              {isSavingVision ? "저장 중..." : "저장"}
            </S.SaveButton>
          </S.SectionHeader>
          <S.EditorWrapper>
            <SimpleMDE
              value={visionContent}
              onChange={setVisionContent}
              options={{
                ...editorOptions,
                placeholder: "교회 비전을 Markdown 형식으로 입력하세요...",
              }}
            />
          </S.EditorWrapper>
        </S.Section>

        {/* 교회 소개 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 소개</S.SectionTitle>
            <S.SaveButton onClick={handleSaveIntro} disabled={isSavingIntro}>
              {isSavingIntro ? "저장 중..." : "저장"}
            </S.SaveButton>
          </S.SectionHeader>
          <S.EditorWrapper>
            <SimpleMDE
              value={introContent}
              onChange={setIntroContent}
              options={{
                ...editorOptions,
                placeholder: "교회 소개를 Markdown 형식으로 입력하세요...",
              }}
            />
          </S.EditorWrapper>
        </S.Section>

        {/* 교회 연혁 섹션 */}
        <S.Section>
          <S.SectionHeader>
            <S.SectionTitle>교회 연혁</S.SectionTitle>
          </S.SectionHeader>

          {/* 연혁 목록 */}
          <S.HistoryList>
            {history.map((item) => (
              <S.HistoryItem key={item.id}>
                {editingHistory === item.id && editingHistoryData ? (
                  <S.HistoryEditForm>
                    <S.Input
                      type="text"
                      value={editingHistoryData.year}
                      onChange={(e) =>
                        setEditingHistoryData({
                          ...editingHistoryData,
                          year: e.target.value,
                        })
                      }
                      placeholder="연도"
                    />
                    <S.Input
                      type="text"
                      value={editingHistoryData.content}
                      onChange={(e) =>
                        setEditingHistoryData({
                          ...editingHistoryData,
                          content: e.target.value,
                        })
                      }
                      placeholder="내용"
                      style={{ flex: 1 }}
                    />
                    <S.Input
                      type="number"
                      value={editingHistoryData.order}
                      onChange={(e) =>
                        setEditingHistoryData({
                          ...editingHistoryData,
                          order: parseInt(e.target.value) || 0,
                        })
                      }
                      placeholder="순서"
                      style={{ width: "100px" }}
                    />
                    <S.ButtonGroup>
                      <S.Button onClick={() => handleUpdateHistory(item.id)}>
                        저장
                      </S.Button>
                      <S.Button onClick={handleCancelEditHistory}>
                        취소
                      </S.Button>
                    </S.ButtonGroup>
                  </S.HistoryEditForm>
                ) : (
                  <>
                    <S.HistoryContent>
                      <S.HistoryYear>{item.year}</S.HistoryYear>
                      <S.HistoryText>{item.content}</S.HistoryText>
                    </S.HistoryContent>
                    <S.ButtonGroup>
                      <S.Button onClick={() => handleStartEditHistory(item)}>
                        수정
                      </S.Button>
                      <S.Button
                        onClick={() => handleDeleteHistory(item.id)}
                        $danger
                      >
                        삭제
                      </S.Button>
                    </S.ButtonGroup>
                  </>
                )}
              </S.HistoryItem>
            ))}
          </S.HistoryList>

          {/* 연혁 추가 폼 */}
          <S.AddHistoryForm>
            <S.FormRow>
              <S.Input
                type="text"
                value={newHistory.year}
                onChange={(e) =>
                  setNewHistory({ ...newHistory, year: e.target.value })
                }
                placeholder="연도 (예: 2020)"
                style={{ width: "150px" }}
              />
              <S.Input
                type="text"
                value={newHistory.content}
                onChange={(e) =>
                  setNewHistory({ ...newHistory, content: e.target.value })
                }
                placeholder="연혁 내용"
                style={{ flex: 1 }}
              />
              <S.Input
                type="number"
                value={newHistory.order}
                onChange={(e) =>
                  setNewHistory({
                    ...newHistory,
                    order: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="순서"
                style={{ width: "100px" }}
              />
              <S.Button onClick={handleAddHistory}>추가</S.Button>
            </S.FormRow>
          </S.AddHistoryForm>
        </S.Section>
      </S.Container>
    </AdminMainTemplate>
  );
};

export default ChurchAdminPage;
