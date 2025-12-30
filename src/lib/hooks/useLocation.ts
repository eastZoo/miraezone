import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 교회 위치 정보 타입
 */
export interface ChurchLocation {
  id: number;
  address: string;
  addressDetail?: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * 대중교통 안내 정보 타입
 */
export interface TransportInfo {
  id: number;
  type: string;
  title: string;
  description: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 교회 위치 정보 조회
 */
export const useChurchLocation = () => {
  return useQuery<ChurchLocation | null>({
    queryKey: ["location"],
    queryFn: async () => {
      const result = await request<ChurchLocation | null>({
        method: "GET",
        url: "/location",
      });
      return result;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * 대중교통 안내 목록 조회
 */
export const useTransportInfoList = () => {
  return useQuery<TransportInfo[]>({
    queryKey: ["location", "transport"],
    queryFn: async () => {
      const result = await request<TransportInfo[]>({
        method: "GET",
        url: "/location/transport",
      });
      return result;
    },
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * 교회 위치 정보 생성 또는 업데이트 Mutation
 */
export const useUpsertChurchLocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      address: string;
      addressDetail?: string;
      latitude?: number;
      longitude?: number;
      phone?: string;
      email?: string;
    }) => {
      return request<ChurchLocation>({
        method: "POST",
        url: "/location",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["location"] });
    },
  });
};

/**
 * 교회 위치 정보 수정 Mutation
 */
export const useUpdateChurchLocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<ChurchLocation>;
    }) => {
      return request<ChurchLocation>({
        method: "PUT",
        url: `/location/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["location"] });
    },
  });
};

/**
 * 대중교통 안내 생성 Mutation
 */
export const useCreateTransportInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      type: string;
      title: string;
      description: string;
      order?: number;
    }) => {
      return request<TransportInfo>({
        method: "POST",
        url: "/location/transport",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["location", "transport"] });
    },
  });
};

/**
 * 대중교통 안내 수정 Mutation
 */
export const useUpdateTransportInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<TransportInfo>;
    }) => {
      return request<TransportInfo>({
        method: "PUT",
        url: `/location/transport/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["location", "transport"] });
    },
  });
};

/**
 * 대중교통 안내 삭제 Mutation
 */
export const useDeleteTransportInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      return request({
        method: "DELETE",
        url: `/location/transport/${id}`,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["location", "transport"] });
    },
  });
};
