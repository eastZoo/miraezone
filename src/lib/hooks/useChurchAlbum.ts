import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 교회 앨범 타입
 */
export interface ChurchAlbum {
  id: number;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  views: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  images?: ChurchAlbumImage[];
}

/**
 * 교회 앨범 이미지 타입
 */
export interface ChurchAlbumImage {
  id: number;
  albumId: number;
  imageUrl: string;
  fileName: string;
  fileSize?: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * 교회 앨범 목록 조회
 */
export const useChurchAlbumList = (
  page: number = 1,
  limit: number = 10,
  search?: string
) => {
  return useQuery<{ data: ChurchAlbum[]; total: number }>({
    queryKey: ["church-albums", page, limit, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (search) params.append("search", search);

      const result = await request<{ data: ChurchAlbum[]; total: number }>({
        method: "GET",
        url: `/church-albums?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 교회 앨범 상세 조회
 * @param id 앨범 ID
 * @param incrementViews 조회수 증가 여부 (기본값: true, 관리자 페이지에서는 false)
 */
export const useChurchAlbum = (id: number, incrementViews: boolean = true) => {
  return useQuery<ChurchAlbum>({
    queryKey: ["church-albums", id, incrementViews],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (!incrementViews) {
        params.append("incrementViews", "false");
      }
      const result = await request<ChurchAlbum>({
        method: "GET",
        url: `/church-albums/${id}${params.toString() ? `?${params.toString()}` : ""}`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 교회 앨범 생성
 */
export const useCreateChurchAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      title: string;
      description?: string;
      isActive?: boolean;
    }) => {
      const result = await request<ChurchAlbum>({
        method: "POST",
        url: "/church-albums",
        data,
      });
      return result;
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["church-albums"] });
      // 생성된 앨범의 상세 정보도 무효화
      queryClient.invalidateQueries({
        queryKey: ["church-albums", result.id],
      });
    },
  });
};

/**
 * 교회 앨범 수정
 */
export const useUpdateChurchAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: {
        title?: string;
        description?: string;
        isActive?: boolean;
      };
    }) => {
      const result = await request<ChurchAlbum>({
        method: "PUT",
        url: `/church-albums/${id}`,
        data,
      });
      return result;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["church-albums"] });
      queryClient.invalidateQueries({
        queryKey: ["church-albums", variables.id],
      });
    },
  });
};

/**
 * 교회 앨범 삭제
 */
export const useDeleteChurchAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await request({
        method: "DELETE",
        url: `/church-albums/${id}`,
      });
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["church-albums"] });
      queryClient.invalidateQueries({
        queryKey: ["church-albums", id],
      });
    },
  });
};

/**
 * 교회 앨범 이미지 추가
 */
export const useAddChurchAlbumImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      albumId: number;
      imageUrl: string;
      fileName: string;
      fileSize?: number;
    }) => {
      const result = await request<ChurchAlbumImage>({
        method: "POST",
        url: `/church-albums/${data.albumId}/images`,
        data: {
          imageUrl: data.imageUrl,
          fileName: data.fileName,
          fileSize: data.fileSize,
        },
      });
      return result;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["church-albums"] });
      queryClient.invalidateQueries({
        queryKey: ["church-albums", data.albumId],
      });
    },
  });
};

/**
 * 교회 앨범 이미지 삭제
 */
export const useDeleteChurchAlbumImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const result = await request<{ albumId: number }>({
        method: "DELETE",
        url: `/church-albums/images/${id}`,
      });
      return result;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["church-albums"] });
      queryClient.invalidateQueries({
        queryKey: ["church-albums", data.albumId],
      });
    },
  });
};

