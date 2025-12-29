import React, { useState } from "react";
import AdminMainTemplate from "@/components/template/AdminMainTemplate";
import {
  useWorshipSchedules,
  useWorshipVideos,
  useCreateWorshipSchedule,
  useUpdateWorshipSchedule,
  useDeleteWorshipSchedule,
  useCreateWorshipVideo,
  useUpdateWorshipVideo,
  useDeleteWorshipVideo,
  type WorshipSchedule,
  type WorshipVideo,
} from "@/lib/hooks/useWorship";
import { extractYouTubeThumbnail } from "@/lib/utils/youtubeUtils";
import * as S from "./WorshipAdminPage.style";
import dayjs from "dayjs";

const WorshipAdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"schedules" | "videos">("schedules");

  // 예배 일정 조회
  const { data: schedules = [], isLoading: schedulesLoading } =
    useWorshipSchedules();
  // 설교 영상 조회 (관리자용 - 모든 영상)
  const { data: videosData, isLoading: videosLoading } = useWorshipVideos(1, 100);
  const videos = videosData?.data || [];

  // Mutations
  const createSchedule = useCreateWorshipSchedule();
  const updateSchedule = useUpdateWorshipSchedule();
  const deleteSchedule = useDeleteWorshipSchedule();
  const createVideo = useCreateWorshipVideo();
  const updateVideo = useUpdateWorshipVideo();
  const deleteVideo = useDeleteWorshipVideo();

  // 예배 일정 관리 상태
  const [isCreatingSchedule, setIsCreatingSchedule] = useState(false);
  const [editingScheduleId, setEditingScheduleId] = useState<number | null>(null);
  const [scheduleFormData, setScheduleFormData] = useState({
    name: "",
    time: "",
    place: "",
    order: 0,
  });

  // 설교 영상 관리 상태
  const [isCreatingVideo, setIsCreatingVideo] = useState(false);
  const [editingVideoId, setEditingVideoId] = useState<number | null>(null);
  const [videoFormData, setVideoFormData] = useState({
    title: "",
    date: dayjs().format("YYYY-MM-DD"),
    speaker: "",
    videoUrl: "",
  });

  // 예배 일정 저장
  const handleSaveSchedule = async () => {
    if (!scheduleFormData.name.trim()) {
      alert("예배명을 입력해주세요.");
      return;
    }

    try {
      // 예배명이 예배 타입이 됨
      const scheduleData = {
        type: scheduleFormData.name, // 예배명을 타입으로 사용
        name: scheduleFormData.name,
        time: scheduleFormData.time,
        place: scheduleFormData.place,
        order: scheduleFormData.order,
      };

      if (editingScheduleId) {
        await updateSchedule.mutateAsync({
          id: editingScheduleId,
          data: scheduleData,
        });
        alert("예배 일정이 성공적으로 수정되었습니다.");
      } else {
        await createSchedule.mutateAsync(scheduleData);
        alert("예배 일정이 성공적으로 생성되었습니다.");
      }
      handleCancelSchedule();
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 예배 일정 취소
  const handleCancelSchedule = () => {
    setIsCreatingSchedule(false);
    setEditingScheduleId(null);
    setScheduleFormData({
      name: "",
      time: "",
      place: "",
      order: 0,
    });
  };

  // 예배 일정 수정 시작
  const handleEditSchedule = (schedule: WorshipSchedule) => {
    setIsCreatingSchedule(false);
    setEditingScheduleId(schedule.id);
    setScheduleFormData({
      name: schedule.name,
      time: schedule.time,
      place: schedule.place,
      order: schedule.order,
    });
  };

  // 예배 일정 삭제
  const handleDeleteSchedule = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteSchedule.mutateAsync(id);
      alert("예배 일정이 성공적으로 삭제되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  // 설교 영상 저장
  const handleSaveVideo = async () => {
    if (!videoFormData.videoUrl.trim()) {
      alert("유튜브 링크를 입력해주세요.");
      return;
    }

    if (!videoFormData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!videoFormData.speaker.trim()) {
      alert("설교자 이름을 입력해주세요.");
      return;
    }

    try {
      // 백엔드에서 자동으로 썸네일을 추출하므로 videoUrl만 전송
      if (editingVideoId) {
        await updateVideo.mutateAsync({
          id: editingVideoId,
          data: {
            title: videoFormData.title,
            date: videoFormData.date,
            speaker: videoFormData.speaker,
            videoUrl: videoFormData.videoUrl,
          },
        });
        alert("설교 영상이 성공적으로 수정되었습니다.");
      } else {
        await createVideo.mutateAsync({
          title: videoFormData.title,
          date: videoFormData.date,
          speaker: videoFormData.speaker,
          videoUrl: videoFormData.videoUrl,
        });
        alert("설교 영상이 성공적으로 생성되었습니다.");
      }
      handleCancelVideo();
    } catch (error: any) {
      alert(error?.response?.data?.message || "저장 중 오류가 발생했습니다.");
    }
  };

  // 설교 영상 취소
  const handleCancelVideo = () => {
    setIsCreatingVideo(false);
    setEditingVideoId(null);
    setVideoFormData({
      title: "",
      date: dayjs().format("YYYY-MM-DD"),
      speaker: "",
      videoUrl: "",
    });
  };

  // 설교 영상 수정 시작
  const handleEditVideo = (video: WorshipVideo) => {
    setIsCreatingVideo(false);
    setEditingVideoId(video.id);
    setVideoFormData({
      title: video.title,
      date: dayjs(video.date).format("YYYY-MM-DD"),
      speaker: video.speaker,
      videoUrl: video.videoUrl || "",
    });
  };

  // 설교 영상 삭제
  const handleDeleteVideo = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await deleteVideo.mutateAsync(id);
      alert("설교 영상이 성공적으로 삭제되었습니다.");
    } catch (error: any) {
      alert(error?.response?.data?.message || "삭제 중 오류가 발생했습니다.");
    }
  };

  if (schedulesLoading || videosLoading) {
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
            $active={activeTab === "schedules"}
            onClick={() => setActiveTab("schedules")}
          >
            예배 일정 관리
          </S.TabButton>
          <S.TabButton
            $active={activeTab === "videos"}
            onClick={() => setActiveTab("videos")}
          >
            설교 영상 관리
          </S.TabButton>
        </S.TabContainer>

        {/* 예배 일정 관리 */}
        {activeTab === "schedules" && (
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>예배 일정 관리</S.SectionTitle>
              <S.AddButton
                onClick={() => {
                  setIsCreatingSchedule(true);
                  setEditingScheduleId(null);
                  setScheduleFormData({
                    name: "",
                    time: "",
                    place: "",
                    order: 0,
                  });
                }}
              >
                새 예배 일정 추가
              </S.AddButton>
            </S.SectionHeader>

            {/* 작성/수정 폼 */}
            {(isCreatingSchedule || editingScheduleId) && (
              <S.FormSection>
                <S.FormRow>
                  <S.FormLabel>예배명</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={scheduleFormData.name}
                    onChange={(e) =>
                      setScheduleFormData({
                        ...scheduleFormData,
                        name: e.target.value,
                      })
                    }
                    placeholder="예: 주일오전예배, 주일오후예배, 수요부흥기도회 등"
                  />
                  <S.HelpText>
                    예배명이 예배 타입으로 자동 설정됩니다.
                  </S.HelpText>
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>시간</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={scheduleFormData.time}
                    onChange={(e) =>
                      setScheduleFormData({
                        ...scheduleFormData,
                        time: e.target.value,
                      })
                    }
                    placeholder="예: 주일 오전 11:00"
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>장소</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={scheduleFormData.place}
                    onChange={(e) =>
                      setScheduleFormData({
                        ...scheduleFormData,
                        place: e.target.value,
                      })
                    }
                    placeholder="예: 대예배실"
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>정렬 순서</S.FormLabel>
                  <S.FormInput
                    type="number"
                    value={scheduleFormData.order}
                    onChange={(e) =>
                      setScheduleFormData({
                        ...scheduleFormData,
                        order: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                </S.FormRow>
                <S.FormActions>
                  <S.SaveButton onClick={handleSaveSchedule}>저장</S.SaveButton>
                  <S.CancelButton onClick={handleCancelSchedule}>취소</S.CancelButton>
                </S.FormActions>
              </S.FormSection>
            )}

            {/* 예배 일정 목록 */}
            <S.ScheduleList>
              {schedules.map((schedule) => (
                <S.ScheduleItem key={schedule.id}>
                  <S.ScheduleInfo>
                    <S.ScheduleType>{schedule.type}</S.ScheduleType>
                    <S.ScheduleName>{schedule.name}</S.ScheduleName>
                    <S.ScheduleTime>{schedule.time}</S.ScheduleTime>
                    <S.SchedulePlace>{schedule.place}</S.SchedulePlace>
                  </S.ScheduleInfo>
                  <S.ScheduleActions>
                    <S.EditButton onClick={() => handleEditSchedule(schedule)}>
                      수정
                    </S.EditButton>
                    <S.DeleteButton onClick={() => handleDeleteSchedule(schedule.id)}>
                      삭제
                    </S.DeleteButton>
                  </S.ScheduleActions>
                </S.ScheduleItem>
              ))}
            </S.ScheduleList>
          </S.Section>
        )}

        {/* 설교 영상 관리 */}
        {activeTab === "videos" && (
          <S.Section>
            <S.SectionHeader>
              <S.SectionTitle>설교 영상 관리</S.SectionTitle>
              <S.AddButton
                onClick={() => {
                  setIsCreatingVideo(true);
                  setEditingVideoId(null);
                  setVideoFormData({
                    title: "",
                    date: dayjs().format("YYYY-MM-DD"),
                    speaker: "",
                    videoUrl: "",
                  });
                }}
              >
                새 설교 영상 추가
              </S.AddButton>
            </S.SectionHeader>

            {/* 작성/수정 폼 */}
            {(isCreatingVideo || editingVideoId) && (
              <S.FormSection>
                <S.FormRow>
                  <S.FormLabel>제목</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={videoFormData.title}
                    onChange={(e) =>
                      setVideoFormData({ ...videoFormData, title: e.target.value })
                    }
                    placeholder="설교 제목을 입력하세요"
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>설교 날짜</S.FormLabel>
                  <S.FormInput
                    type="date"
                    value={videoFormData.date}
                    onChange={(e) =>
                      setVideoFormData({ ...videoFormData, date: e.target.value })
                    }
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>설교자</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={videoFormData.speaker}
                    onChange={(e) =>
                      setVideoFormData({ ...videoFormData, speaker: e.target.value })
                    }
                    placeholder="설교자 이름을 입력하세요"
                  />
                </S.FormRow>
                <S.FormRow>
                  <S.FormLabel>유튜브 링크</S.FormLabel>
                  <S.FormInput
                    type="text"
                    value={videoFormData.videoUrl}
                    onChange={(e) =>
                      setVideoFormData({ ...videoFormData, videoUrl: e.target.value })
                    }
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                  <S.HelpText>
                    유튜브 링크만 입력하면 썸네일이 자동으로 추출됩니다.
                  </S.HelpText>
                </S.FormRow>
                <S.FormActions>
                  <S.SaveButton onClick={handleSaveVideo}>저장</S.SaveButton>
                  <S.CancelButton onClick={handleCancelVideo}>취소</S.CancelButton>
                </S.FormActions>
              </S.FormSection>
            )}

            {/* 설교 영상 목록 */}
            <S.VideoList>
              {videos.map((video) => {
                const thumbnailUrl =
                  video.thumbnailUrl ||
                  (video.videoUrl ? extractYouTubeThumbnail(video.videoUrl) : null);
                return (
                  <S.VideoItem key={video.id}>
                    <S.VideoThumbnail>
                      {thumbnailUrl ? (
                        <img src={thumbnailUrl} alt={video.title} />
                      ) : (
                        <S.ThumbnailPlaceholder>영상</S.ThumbnailPlaceholder>
                      )}
                    </S.VideoThumbnail>
                    <S.VideoInfo>
                      <S.VideoTitle>{video.title}</S.VideoTitle>
                      <S.VideoMeta>
                        <span>설교자: {video.speaker}</span>
                        <span>{dayjs(video.date).format("YYYY.MM.DD")}</span>
                        <span>조회 {video.views}</span>
                      </S.VideoMeta>
                    </S.VideoInfo>
                    <S.VideoActions>
                      <S.EditButton onClick={() => handleEditVideo(video)}>
                        수정
                      </S.EditButton>
                      <S.DeleteButton onClick={() => handleDeleteVideo(video.id)}>
                        삭제
                      </S.DeleteButton>
                    </S.VideoActions>
                  </S.VideoItem>
                );
              })}
            </S.VideoList>
          </S.Section>
        )}
      </S.Container>
    </AdminMainTemplate>
  );
};

export default WorshipAdminPage;

