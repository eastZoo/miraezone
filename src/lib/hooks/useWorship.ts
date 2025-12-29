import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 예배 일정 타입
 */
export interface WorshipSchedule {
  id: number;
  type: string;
  time: string;
  name: string;
  place: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 설교 영상 타입
 */
export interface WorshipVideo {
  id: number;
  title: string;
  date: string;
  speaker: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  views: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 예배 안내 타입
 */
export interface WorshipNotice {
  id: number;
  title?: string;
  content: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 예배 일정 목록 조회
 */
export const useWorshipSchedules = (type?: string) => {
  return useQuery<WorshipSchedule[]>({
    queryKey: ["worship", "schedules", type],
    queryFn: async () => {
      const result = await request<WorshipSchedule[]>({
        method: "GET",
        url: `/worship/schedules${type ? `?type=${type}` : ""}`,
      });
      return result;
    },
  });
};

/**
 * 설교 영상 목록 조회
 */
export const useWorshipVideos = (
  page: number = 1,
  limit: number = 10,
  speaker?: string,
  search?: string
) => {
  return useQuery<{ data: WorshipVideo[]; total: number }>({
    queryKey: ["worship", "videos", page, limit, speaker, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (speaker) params.append("speaker", speaker);
      if (search) params.append("search", search);

      const result = await request<{ data: WorshipVideo[]; total: number }>({
        method: "GET",
        url: `/worship/videos?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 설교 영상 상세 조회
 */
export const useWorshipVideo = (id: number) => {
  return useQuery<WorshipVideo>({
    queryKey: ["worship", "videos", id],
    queryFn: async () => {
      const result = await request<WorshipVideo>({
        method: "GET",
        url: `/worship/videos/${id}`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 예배 안내 목록 조회
 */
export const useWorshipNotices = () => {
  return useQuery<WorshipNotice[]>({
    queryKey: ["worship", "notices"],
    queryFn: async () => {
      const result = await request<WorshipNotice[]>({
        method: "GET",
        url: "/worship/notices",
      });
      return result;
    },
  });
};

/**
 * 예배 일정 생성 DTO
 */
interface CreateWorshipScheduleDto {
  type: string;
  time: string;
  name: string;
  place: string;
  order?: number;
  isActive?: boolean;
}

/**
 * 예배 일정 수정 DTO
 */
interface UpdateWorshipScheduleDto {
  type?: string;
  time?: string;
  name?: string;
  place?: string;
  order?: number;
  isActive?: boolean;
}

/**
 * 설교 영상 생성 DTO
 */
interface CreateWorshipVideoDto {
  title: string;
  date: string;
  speaker: string;
  videoUrl: string;
  isActive?: boolean;
}

/**
 * 설교 영상 수정 DTO
 */
interface UpdateWorshipVideoDto {
  title?: string;
  date?: string;
  speaker?: string;
  videoUrl?: string;
  isActive?: boolean;
}

/**
 * 예배 일정 생성
 */
export const useCreateWorshipSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateWorshipScheduleDto) => {
      return await request<WorshipSchedule>({
        method: "POST",
        url: "/worship/schedules",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worship", "schedules"] });
    },
  });
};

/**
 * 예배 일정 수정
 */
export const useUpdateWorshipSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: UpdateWorshipScheduleDto;
    }) => {
      return await request<WorshipSchedule>({
        method: "PUT",
        url: `/worship/schedules/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worship", "schedules"] });
    },
  });
};

/**
 * 예배 일정 삭제
 */
export const useDeleteWorshipSchedule = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      return await request<void>({
        method: "DELETE",
        url: `/worship/schedules/${id}`,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worship", "schedules"] });
    },
  });
};

/**
 * 설교 영상 생성
 */
export const useCreateWorshipVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateWorshipVideoDto) => {
      return await request<WorshipVideo>({
        method: "POST",
        url: "/worship/videos",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worship", "videos"] });
    },
  });
};

/**
 * 설교 영상 수정
 */
export const useUpdateWorshipVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: UpdateWorshipVideoDto;
    }) => {
      return await request<WorshipVideo>({
        method: "PUT",
        url: `/worship/videos/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worship", "videos"] });
    },
  });
};

/**
 * 설교 영상 삭제
 */
export const useDeleteWorshipVideo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      return await request<void>({
        method: "DELETE",
        url: `/worship/videos/${id}`,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["worship", "videos"] });
    },
  });
};

