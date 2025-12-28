import { useQuery } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 주보 타입
 */
export interface Bulletin {
  id: number;
  title: string;
  date: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  fileSize?: number;
  downloadCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 주보 목록 조회
 */
export const useBulletinList = (
  page: number = 1,
  limit: number = 10,
  search?: string
) => {
  return useQuery<{ data: Bulletin[]; total: number }>({
    queryKey: ["bulletins", page, limit, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (search) params.append("search", search);

      const result = await request<{ data: Bulletin[]; total: number }>({
        method: "GET",
        url: `/bulletins?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 주보 상세 조회
 */
export const useBulletin = (id: number) => {
  return useQuery<Bulletin>({
    queryKey: ["bulletins", id],
    queryFn: async () => {
      const result = await request<Bulletin>({
        method: "GET",
        url: `/bulletins/${id}`,
      });
      return result;
    },
    enabled: !!id,
  });
};

