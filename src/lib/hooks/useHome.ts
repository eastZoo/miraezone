import { useQuery } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 홈페이지 콘텐츠 타입
 */
export interface HomeContent {
  id: number;
  contentType: string;
  title?: string;
  content?: string;
  imageUrl?: string;
  linkUrl?: string;
  bibleVerse?: string;
  speaker?: string;
  date?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 주간 말씀 조회
 */
export const useWeeklyMessage = () => {
  return useQuery<HomeContent>({
    queryKey: ["home", "weekly-message"],
    queryFn: async () => {
      const result = await request<HomeContent>({
        method: "GET",
        url: "/home/weekly-message",
      });
      return result;
    },
  });
};

/**
 * 사진 갤러리 조회
 */
export const usePhotoGallery = (limit: number = 8) => {
  return useQuery<HomeContent[]>({
    queryKey: ["home", "photo-gallery", limit],
    queryFn: async () => {
      const result = await request<HomeContent[]>({
        method: "GET",
        url: `/home/photo-gallery?limit=${limit}`,
      });
      return result;
    },
  });
};

/**
 * 배너 이미지 조회
 */
export const useBanners = () => {
  return useQuery<HomeContent[]>({
    queryKey: ["home", "banners"],
    queryFn: async () => {
      const result = await request<HomeContent[]>({
        method: "GET",
        url: "/home/banners",
      });
      return result;
    },
  });
};

