import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { request } from "../api";
import {
  writeAccessToken,
  writeRefreshToken,
  readAccessToken,
  logout,
} from "../functions/authFunctions";

/**
 * 회원 타입
 */
export interface Member {
  id: number;
  email: string;
  name: string;
  phone?: string;
  role: string;
  isMaster: boolean;
  isApproved: boolean;
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * 회원가입 DTO
 */
export interface RegisterDto {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

/**
 * 로그인 DTO
 */
export interface LoginDto {
  email: string;
  password: string;
}

/**
 * 로그인 응답
 */
export interface LoginResponse {
  member: Member;
  accessToken: string;
  refreshToken: string;
}

/**
 * 회원가입
 */
export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: RegisterDto) => {
      const result = await request<Member>({
        method: "POST",
        url: "/auth/register",
        data,
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

/**
 * 로그인
 */
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: LoginDto) => {
      const result = await request<LoginResponse>({
        method: "POST",
        url: "/auth/login",
        data,
      });
      return result;
    },
    onSuccess: (data) => {
      writeAccessToken(data.accessToken);
      writeRefreshToken(data.refreshToken);
      queryClient.setQueryData(["auth", "member"], data.member);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
};

/**
 * 로그아웃
 */
export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      logout();
    },
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["auth"] });
    },
  });
};

/**
 * 현재 로그인된 회원 정보 조회
 */
export const useCurrentMember = () => {
  const queryClient = useQueryClient();
  const accessToken = readAccessToken();
  
  // 쿼리에서 멤버 정보 가져오기
  const member = queryClient.getQueryData<Member>(["auth", "member"]);
  
  // 멤버 정보가 없고 토큰이 있으면 API에서 가져오기
  const { data: memberData, isLoading } = useQuery<Member>({
    queryKey: ["auth", "member"],
    queryFn: async () => {
      const result = await request<Member>({
        method: "GET",
        url: "/auth/me",
      });
      return result;
    },
    enabled: !!accessToken && !member,
    staleTime: 5 * 60 * 1000, // 5분간 캐시 유지
  });

  return {
    member: member || memberData,
    isAuthenticated: !!accessToken,
    isLoading,
  };
};

