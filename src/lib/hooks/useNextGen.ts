import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 다음세대 타입
 */
export interface NextGen {
  id: number;
  department: string;
  title: string;
  content?: string;
  type?: string;
  views: number;
  isNew: boolean;
  isNotice: boolean;
  thumbnailUrl?: string;
  author?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 다음세대 생성 DTO
 */
export interface CreateNextGenDto {
  department: string;
  title: string;
  content?: string;
  type?: string;
  author?: string;
  isNew?: boolean;
  isNotice?: boolean;
  isActive?: boolean;
}

/**
 * 다음세대 수정 DTO
 */
export interface UpdateNextGenDto {
  department?: string;
  title?: string;
  content?: string;
  type?: string;
  author?: string;
  isNew?: boolean;
  isNotice?: boolean;
  isActive?: boolean;
}

/**
 * 다음세대 목록 조회
 */
export const useNextGenList = (
  page: number = 1,
  limit: number = 10,
  department?: string,
  search?: string
) => {
  return useQuery<{ data: NextGen[]; total: number }>({
    queryKey: ["nextgen", page, limit, department, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (department) params.append("department", department);
      if (search) params.append("search", search);

      const result = await request<{ data: NextGen[]; total: number }>({
        method: "GET",
        url: `/nextgen?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 다음세대 상세 조회
 */
export const useNextGen = (id: number) => {
  return useQuery<NextGen>({
    queryKey: ["nextgen", id],
    queryFn: async () => {
      const result = await request<NextGen>({
        method: "GET",
        url: `/nextgen/${id}`,
      });
      return result;
    },
    enabled: !!id,
  });
};

/**
 * 다음세대 목록 조회 (관리자용)
 */
export const useNextGenListAdmin = (
  page: number = 1,
  limit: number = 10,
  department?: string,
  search?: string
) => {
  return useQuery<{ data: NextGen[]; total: number }>({
    queryKey: ["nextgen", "admin", page, limit, department, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (department) params.append("department", department);
      if (search) params.append("search", search);

      const result = await request<{ data: NextGen[]; total: number }>({
        method: "GET",
        url: `/nextgen?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 다음세대 생성
 */
export const useCreateNextGen = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateNextGenDto) => {
      const result = await request<NextGen>({
        method: "POST",
        url: "/nextgen",
        data,
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nextgen"] });
    },
  });
};

/**
 * 다음세대 수정
 */
export const useUpdateNextGen = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateNextGenDto }) => {
      const result = await request<NextGen>({
        method: "PUT",
        url: `/nextgen/${id}`,
        data,
      });
      return result;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["nextgen"] });
      queryClient.invalidateQueries({ queryKey: ["nextgen", variables.id] });
    },
  });
};

/**
 * 다음세대 삭제 (소프트 딜리트)
 */
export const useDeleteNextGen = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await request({
        method: "PATCH",
        url: `/nextgen/${id}`,
        data: {
          deletedAt: new Date().toISOString(),
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nextgen"] });
    },
  });
};

