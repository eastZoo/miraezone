import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";
import type { Member } from "./useAuth";

/**
 * 회원 목록 조회
 */
export const useMemberList = (
  page: number = 1,
  limit: number = 10,
  search?: string
) => {
  return useQuery<{ data: Member[]; total: number }>({
    queryKey: ["members", page, limit, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append("page", page.toString());
      params.append("limit", limit.toString());
      if (search) params.append("search", search);

      const result = await request<{ data: Member[]; total: number }>({
        method: "GET",
        url: `/members?${params.toString()}`,
      });
      return result;
    },
  });
};

/**
 * 회원 승인/비승인
 */
export const useApproveMember = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      isApproved,
    }: {
      id: number;
      isApproved: boolean;
    }) => {
      const result = await request<Member>({
        method: "PATCH",
        url: `/members/${id}/approve`,
        data: { isApproved },
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
  });
};

/**
 * 회원 활성화/비활성화
 */
export const useToggleMemberActive = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, isActive }: { id: number; isActive: boolean }) => {
      const result = await request<Member>({
        method: "PATCH",
        url: `/members/${id}/active`,
        data: { isActive },
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
    },
  });
};
