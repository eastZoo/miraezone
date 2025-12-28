import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../api";

/**
 * 조직 구성원 타입
 */
export interface OrganizationMember {
  id: number;
  position: string;
  name: string;
  parentId?: number;
  isActive: boolean;
  parent?: OrganizationMember;
  createdAt: string;
  updatedAt: string;
}

/**
 * 부서 타입
 */
export interface Department {
  id: number;
  name: string;
  description: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}


/**
 * 조직 구성원 목록 조회
 */
export const useOrganizationMembers = () => {
  return useQuery<OrganizationMember[]>({
    queryKey: ["organization", "members"],
    queryFn: async () => {
      const result = await request<OrganizationMember[]>({
        method: "GET",
        url: "/organization/members",
      });
      return result;
    },
  });
};

/**
 * 부서 목록 조회
 */
export const useDepartments = () => {
  return useQuery<Department[]>({
    queryKey: ["organization", "departments"],
    queryFn: async () => {
      const result = await request<Department[]>({
        method: "GET",
        url: "/organization/departments",
      });
      return result;
    },
  });
};


/**
 * 조직 구성원 생성 Mutation
 */
export const useCreateOrganizationMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      position: string;
      name: string;
      parentId?: number;
    }) => {
      return request<OrganizationMember>({
        method: "POST",
        url: "/organization/members",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization", "members"] });
    },
  });
};

/**
 * 조직 구성원 수정 Mutation
 */
export const useUpdateOrganizationMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: Partial<OrganizationMember>;
    }) => {
      return request<OrganizationMember>({
        method: "PUT",
        url: `/organization/members/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization", "members"] });
    },
  });
};

/**
 * 조직 구성원 삭제 Mutation
 */
export const useDeleteOrganizationMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      return request({
        method: "DELETE",
        url: `/organization/members/${id}`,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization", "members"] });
    },
  });
};

/**
 * 부서 생성 Mutation
 */
export const useCreateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { name: string; description: string; order?: number }) => {
      return request<Department>({
        method: "POST",
        url: "/organization/departments",
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization", "departments"] });
    },
  });
};

/**
 * 부서 수정 Mutation
 */
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<Department> }) => {
      return request<Department>({
        method: "PUT",
        url: `/organization/departments/${id}`,
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization", "departments"] });
    },
  });
};

/**
 * 부서 삭제 Mutation
 */
export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      return request({
        method: "DELETE",
        url: `/organization/departments/${id}`,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["organization", "departments"] });
    },
  });
};


