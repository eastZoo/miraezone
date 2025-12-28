import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 교회 정보 타입
 */
export interface ChurchInfo {
  id: number;
  type: string;
  title?: string;
  content: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 교회 연혁 타입
 */
export interface ChurchHistory {
  id: number;
  year: string;
  content: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 교회 정보 타입별 조회
 */
export const useChurchInfo = (type: string) => {
  return useQuery<ChurchInfo>({
    queryKey: ["church", "info", type],
    queryFn: async () => {
      const result = await request<ChurchInfo>({
        method: "GET",
        url: `/church/info?type=${type}`,
      });
      return result;
    },
    enabled: !!type,
  });
};

/**
 * 모든 교회 정보 조회
 */
export const useAllChurchInfo = () => {
  return useQuery<ChurchInfo[]>({
    queryKey: ["church", "info", "all"],
    queryFn: async () => {
      const result = await request<ChurchInfo[]>({
        method: "GET",
        url: "/church/info/all",
      });
      return result;
    },
  });
};

/**
 * 교회 연혁 목록 조회
 */
export const useChurchHistory = () => {
  return useQuery<ChurchHistory[]>({
    queryKey: ["church", "history"],
    queryFn: async () => {
      const result = await request<ChurchHistory[]>({
        method: "GET",
        url: "/church/history",
      });
      return result;
    },
  });
};

/**
 * 교회 정보 생성 또는 업데이트 Mutation
 */
export const useUpsertChurchInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      type: string;
      title?: string;
      content: string;
    }) => {
      return request<ChurchInfo>({
        method: "POST",
        url: "/church/info",
        data,
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["church", "info", variables.type],
      });
      queryClient.invalidateQueries({ queryKey: ["church", "info", "all"] });
    },
  });
};

/**
 * 교회 정보 수정 Mutation
 */
export const useUpdateChurchInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<ChurchInfo>;
    }) => {
      return request<ChurchInfo>({
        method: "PUT",
        url: `/church/info/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["church", "info"] });
    },
  });
};

/**
 * 교회 연혁 생성 Mutation
 */
export const useCreateChurchHistory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      year: string;
      content: string;
      order?: number;
    }) => {
      return request<ChurchHistory>({
        method: "POST",
        url: "/church/history",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["church", "history"] });
    },
  });
};

/**
 * 교회 연혁 수정 Mutation
 */
export const useUpdateChurchHistory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<ChurchHistory>;
    }) => {
      return request<ChurchHistory>({
        method: "PUT",
        url: `/church/history/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["church", "history"] });
    },
  });
};

/**
 * 교회 연혁 삭제 Mutation
 */
export const useDeleteChurchHistory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      return request({
        method: "DELETE",
        url: `/church/history/${id}`,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["church", "history"] });
    },
  });
};
