import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 다음세대 부서 타입
 */
export interface NextGenDepartment {
  id: number;
  type: string;
  heroImageUrl?: string;
  introduction?: string;
  worshipTime?: string;
  place?: string;
  target?: string;
  contact?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

/**
 * 부서 정보 조회
 */
export const useNextGenDepartment = (type: string) => {
  return useQuery<NextGenDepartment>({
    queryKey: ["nextgen", "department", type],
    queryFn: async () => {
      const result = await request<NextGenDepartment>({
        method: "GET",
        url: `/nextgen/departments/${type}`,
      });
      return result;
    },
    enabled: !!type,
  });
};

/**
 * 부서 정보 생성 또는 업데이트
 */
export const useUpsertNextGenDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      type: string;
      heroImageUrl?: string;
      introduction?: string;
      worshipTime?: string;
      place?: string;
      target?: string;
      contact?: string;
    }) => {
      return await request<NextGenDepartment>({
        method: "POST",
        url: "/nextgen/departments",
        data,
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["nextgen", "department", variables.type],
      });
    },
  });
};

/**
 * 부서 정보 수정
 */
export const useUpdateNextGenDepartment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      type,
      data,
    }: {
      type: string;
      data: {
        heroImageUrl?: string;
        introduction?: string;
        worshipTime?: string;
        place?: string;
        target?: string;
        contact?: string;
      };
    }) => {
      return await request<NextGenDepartment>({
        method: "PUT",
        url: `/nextgen/departments/${type}`,
        data,
      });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["nextgen", "department", variables.type],
      });
    },
  });
};

