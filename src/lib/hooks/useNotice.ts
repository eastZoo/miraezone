import { useQuery } from "@tanstack/react-query";
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

