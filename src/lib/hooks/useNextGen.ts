import { useQuery } from "@tanstack/react-query";
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
  thumbnailUrl?: string;
  author?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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

