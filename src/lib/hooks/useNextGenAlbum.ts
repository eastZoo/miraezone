import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 다음세대 앨범 타입
 */
export interface NextGenAlbum {
  id: number;
  department: string;
  title: string;
  description?: string;
  thumbnailUrl?: string;
  views: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  images: NextGenAlbumImage[];
}

/**
 * 다음세대 앨범 이미지 타입
 */
export interface NextGenAlbumImage {
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
 * 앨범 목록 조회
 */
export const useNextGenAlbumList = (
  page: number = 1,
  limit: number = 10,
  department?: string,
  search?: string
) => {
  return useQuery<{ data: NextGenAlbum[]; total: number }>({
    queryKey: ["nextgen", "albums", page, limit, department, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (department) params.append("department", department);
      if (search) params.append("search", search);

      const result = await request<{ data: NextGenAlbum[]; total: number }>({
        method: "GET",
        url: `/nextgen/albums?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 앨범 상세 조회
 * @param id 앨범 ID
 * @param incrementViews 조회수 증가 여부 (기본값: true, 관리자 페이지에서는 false)
 */
export const useNextGenAlbum = (id: number, incrementViews: boolean = true) => {
  return useQuery<NextGenAlbum>({
    queryKey: ["nextgen", "albums", id, incrementViews],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (!incrementViews) {
        params.append("incrementViews", "false");
      }
      const result = await request<NextGenAlbum>({
        method: "GET",
        url: `/nextgen/albums/${id}${
          params.toString() ? `?${params.toString()}` : ""
        }`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 앨범 생성
 */
export const useCreateNextGenAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      department: string;
      title: string;
      description?: string;
    }) => {
      return await request<NextGenAlbum>({
        method: "POST",
        url: "/nextgen/albums",
        data,
      });
    },
    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["nextgen", "albums"] });
      // 생성된 앨범의 상세 정보도 무효화
      if (result?.id) {
        queryClient.invalidateQueries({
          queryKey: ["nextgen", "albums", result.id],
        });
      }
    },
  });
};

/**
 * 앨범 수정
 */
export const useUpdateNextGenAlbum = () => {
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
      };
    }) => {
      return await request<NextGenAlbum>({
        method: "PUT",
        url: `/nextgen/albums/${id}`,
        data,
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["nextgen", "albums"] });
      // 수정된 앨범의 상세 정보도 무효화
      queryClient.invalidateQueries({
        queryKey: ["nextgen", "albums", variables.id],
      });
    },
  });
};

/**
 * 앨범 삭제
 */
export const useDeleteNextGenAlbum = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      return await request<void>({
        method: "DELETE",
        url: `/nextgen/albums/${id}`,
      });
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["nextgen", "albums"] });
      // 삭제된 앨범의 상세 정보도 무효화
      queryClient.invalidateQueries({
        queryKey: ["nextgen", "albums", id],
      });
    },
  });
};

/**
 * 앨범 이미지 추가
 */
export const useAddNextGenAlbumImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      albumId: number;
      imageUrl: string;
      fileName: string;
      fileSize?: number;
    }) => {
      return await request<NextGenAlbumImage>({
        method: "POST",
        url: `/nextgen/albums/${data.albumId}/images`,
        data: {
          imageUrl: data.imageUrl,
          fileName: data.fileName,
          fileSize: data.fileSize,
        },
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["nextgen", "albums"] });
      // 선택된 앨범의 상세 정보도 무효화하여 이미지 목록 갱신
      queryClient.invalidateQueries({
        queryKey: ["nextgen", "albums", variables.albumId],
      });
    },
  });
};

/**
 * 앨범 이미지 삭제
 */
export const useDeleteNextGenAlbumImage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (imageId: number) => {
      const result = await request<{ albumId: number }>({
        method: "DELETE",
        url: `/nextgen/albums/images/${imageId}`,
      });
      return result.albumId;
    },
    onSuccess: (albumId) => {
      queryClient.invalidateQueries({ queryKey: ["nextgen", "albums"] });
      // 앨범 ID가 있으면 해당 앨범의 상세 정보도 무효화
      if (albumId) {
        queryClient.invalidateQueries({
          queryKey: ["nextgen", "albums", albumId],
        });
      }
    },
  });
};
