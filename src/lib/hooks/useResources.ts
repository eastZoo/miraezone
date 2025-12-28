import { useQuery } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 찬양 자료 타입
 */
export interface Song {
  id: number;
  title: string;
  artist: string;
  category: string;
  fileUrl?: string;
  fileSize?: number;
  downloadCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 다운로드 파일 타입
 */
export interface Download {
  id: number;
  title: string;
  description?: string;
  fileType: string;
  fileUrl: string;
  fileSize: number;
  downloadCount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 찬양 자료 목록 조회
 */
export const useSongs = (
  page: number = 1,
  limit: number = 10,
  category?: string,
  search?: string
) => {
  return useQuery<{ data: Song[]; total: number }>({
    queryKey: ["resources", "songs", page, limit, category, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (category) params.append("category", category);
      if (search) params.append("search", search);

      const result = await request<{ data: Song[]; total: number }>({
        method: "GET",
        url: `/resources/songs?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 다운로드 파일 목록 조회
 */
export const useDownloads = (
  page: number = 1,
  limit: number = 10,
  fileType?: string,
  search?: string
) => {
  return useQuery<{ data: Download[]; total: number }>({
    queryKey: ["resources", "downloads", page, limit, fileType, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (fileType) params.append("fileType", fileType);
      if (search) params.append("search", search);

      const result = await request<{ data: Download[]; total: number }>({
        method: "GET",
        url: `/resources/downloads?${params.toString()}`,
      });
      return result;
    },
  });
};

