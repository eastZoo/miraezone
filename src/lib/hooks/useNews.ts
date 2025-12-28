import { useQuery } from "@tanstack/react-query";
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

