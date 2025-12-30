import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 공지사항 타입
 */
export interface Notice {
  id: number;
  title: string;
  content: string;
  views: number;
  isNew: boolean;
  isImportant: boolean;
  author?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 공지사항 생성 DTO
 */
export interface CreateNoticeDto {
  title: string;
  content: string;
  author?: string;
  isNew?: boolean;
  isImportant?: boolean;
  isActive?: boolean;
}

/**
 * 공지사항 수정 DTO
 */
export interface UpdateNoticeDto {
  title?: string;
  content?: string;
  author?: string;
  isNew?: boolean;
  isImportant?: boolean;
  isActive?: boolean;
}

/**
 * 공지사항 목록 조회
 */
export const useNoticeList = (
  page: number = 1,
  limit: number = 10,
  search?: string
) => {
  return useQuery<{ data: Notice[]; total: number }>({
    queryKey: ["notice", page, limit, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (search) params.append("search", search);

      const result = await request<{ data: Notice[]; total: number }>({
        method: "GET",
        url: `/notice?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 공지사항 상세 조회
 */
export const useNotice = (id: number) => {
  return useQuery<Notice>({
    queryKey: ["notice", id],
    queryFn: async () => {
      const result = await request<Notice>({
        method: "GET",
        url: `/notice/${id}`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 공지사항 생성
 */
export const useCreateNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateNoticeDto) => {
      return await request<Notice>({
        method: "POST",
        url: "/notice",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
    },
  });
};

/**
 * 공지사항 수정
 */
export const useUpdateNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateNoticeDto }) => {
      return await request<Notice>({
        method: "PUT",
        url: `/notice/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
    },
  });
};

/**
 * 공지사항 삭제 (소프트 딜리트)
 */
export const useDeleteNotice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      return await request({
        method: "PATCH",
        url: `/notice/${id}`,
        data: {
          deletedAt: new Date().toISOString(),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notice"] });
    },
  });
};

