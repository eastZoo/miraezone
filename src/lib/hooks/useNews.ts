import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 교회 소식 타입
 */
export interface News {
  id: number;
  title: string;
  content: string;
  category: string;
  views: number;
  isNew: boolean;
  thumbnailUrl?: string;
  author?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 교회 소식 생성 DTO
 */
export interface CreateNewsDto {
  title: string;
  content: string;
  category: string;
  thumbnailUrl?: string;
  author?: string;
  isNew?: boolean;
  isActive?: boolean;
}

/**
 * 교회 소식 수정 DTO
 */
export interface UpdateNewsDto {
  title?: string;
  content?: string;
  category?: string;
  thumbnailUrl?: string;
  author?: string;
  isNew?: boolean;
  isActive?: boolean;
}

/**
 * 교회 소식 목록 조회
 */
export const useNewsList = (
  page: number = 1,
  limit: number = 10,
  category?: string,
  search?: string
) => {
  return useQuery<{ data: News[]; total: number }>({
    queryKey: ["news", page, limit, category, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (category) params.append("category", category);
      if (search) params.append("search", search);

      const result = await request<{ data: News[]; total: number }>({
        method: "GET",
        url: `/news?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 교회 소식 상세 조회
 */
export const useNews = (id: number) => {
  return useQuery<News>({
    queryKey: ["news", id],
    queryFn: async () => {
      const result = await request<News>({
        method: "GET",
        url: `/news/${id}`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 이전/다음 글 정보 타입
 */
export interface NewsNavigation {
  prev: { id: number; title: string } | null;
  next: { id: number; title: string } | null;
}

/**
 * 교회 소식 이전/다음 글 조회
 */
export const useNewsNavigation = (id: number) => {
  return useQuery<NewsNavigation>({
    queryKey: ["news", id, "navigation"],
    queryFn: async () => {
      const result = await request<NewsNavigation>({
        method: "GET",
        url: `/news/${id}/navigation`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 교회 소식 생성
 */
export const useCreateNews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateNewsDto) => {
      return await request<News>({
        method: "POST",
        url: "/news",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};

/**
 * 교회 소식 수정
 */
export const useUpdateNews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateNewsDto }) => {
      return await request<News>({
        method: "PUT",
        url: `/news/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};

/**
 * 교회 소식 삭제 (소프트 딜리트)
 */
export const useDeleteNews = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      return await request({
        method: "PATCH",
        url: `/news/${id}`,
        data: {
          deletedAt: new Date().toISOString(),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });
};

