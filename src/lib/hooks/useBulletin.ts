import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
  files?: BulletinFile[];
}

/**
 * 주보 파일 타입
 */
export interface BulletinFile {
  id: number;
  bulletinId: number;
  fileUrl: string;
  fileName: string;
  fileSize?: number;
  order: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * 주보 생성 DTO
 */
export interface CreateBulletinDto {
  title: string;
  date: string;
  thumbnailUrl?: string;
  isActive?: boolean;
}

/**
 * 주보 수정 DTO
 */
export interface UpdateBulletinDto {
  title?: string;
  date?: string;
  thumbnailUrl?: string;
  isActive?: boolean;
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

/**
 * 주보 생성
 */
export const useCreateBulletin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateBulletinDto) => {
      return await request<Bulletin>({
        method: "POST",
        url: "/bulletins",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletins"] });
    },
  });
};

/**
 * 주보 수정
 */
export const useUpdateBulletin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateBulletinDto }) => {
      return await request<Bulletin>({
        method: "PUT",
        url: `/bulletins/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletins"] });
    },
  });
};

/**
 * 주보 삭제 (소프트 딜리트)
 */
export const useDeleteBulletin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      return await request({
        method: "PATCH",
        url: `/bulletins/${id}`,
        data: {
          deletedAt: new Date().toISOString(),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletins"] });
    },
  });
};

/**
 * 주보 파일 목록 조회
 */
export const useBulletinFiles = (bulletinId: number) => {
  return useQuery<BulletinFile[]>({
    queryKey: ["bulletins", bulletinId, "files"],
    queryFn: async () => {
      const result = await request<BulletinFile[]>({
        method: "GET",
        url: `/bulletins/${bulletinId}/files`,
      });
      return result;
    },
    enabled: !!bulletinId,
  });
};

/**
 * 주보 파일 추가
 */
export const useAddBulletinFile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      bulletinId,
      fileUrl,
      fileName,
      fileSize,
    }: {
      bulletinId: number;
      fileUrl: string;
      fileName: string;
      fileSize?: number;
    }) => {
      return await request<BulletinFile>({
        method: "POST",
        url: `/bulletins/${bulletinId}/files`,
        data: { fileUrl, fileName, fileSize },
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["bulletins", variables.bulletinId] });
      queryClient.invalidateQueries({ queryKey: ["bulletins", variables.bulletinId, "files"] });
    },
  });
};

/**
 * 주보 파일 삭제 (소프트 딜리트)
 */
export const useDeleteBulletinFile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (fileId: number) => {
      return await request({
        method: "PATCH",
        url: `/bulletins/files/${fileId}`,
        data: {
          deletedAt: new Date().toISOString(),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bulletins"] });
    },
  });
};

/**
 * 이미지 업로드 (useBulletin에서 사용)
 * @deprecated useBulletin에서만 사용. 다른 곳에서는 @/lib/utils/uploadImage 사용
 */
export { uploadImage } from "../utils/uploadImage";

