import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";
import {
  logout,
  readAccessToken,
  readRefreshToken,
  writeAccessToken,
  writeRefreshToken,
} from "./functions/authFunctions";

// _retry 속성을 추가한 확장 타입
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Axios 인스턴스 생성 및 기본 설정
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 600000, // 파일 다운 관련 지연으로 인한 timeout 설정
});

// 요청 인터셉터: 모든 요청에 Access Token 포함
api.interceptors.request.use(
  async (config) => {
    const accessToken = readAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: Access Token 만료 시 자동 갱신 및 재요청
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;

    // 401 에러(Unauthorized)이고, 재시도한 적이 없는 경우
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // 재시도 플래그 설정

      const refreshToken = readRefreshToken();

      // Refresh Token이 없는 경우, 로그인 페이지로 리디렉션
      if (!refreshToken) {
        logout();
        // 에러를 던져 호출자에게 알림
        return Promise.reject(new Error("로그인이 필요합니다."));
      }

      try {
        // 토큰 갱신 요청
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/auth/refresh-token`,
          { refreshToken }
        );

        const { accessToken, refreshToken: newRefreshToken } =
          response.data.data;
        writeAccessToken(accessToken);
        writeRefreshToken(newRefreshToken);

        // Access Token을 갱신하고, 기존 요청을 다시 수행
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (e) {
        // 토큰 갱신 실패 시, 로그아웃 처리
        logout();
        return Promise.reject(e);
      }
    }

    return Promise.reject(error); // 401 외 다른 에러는 그대로 반환
  }
);

/**
 * API 요청을 수행하는 함수
 * @param config - Axios 요청 설정
 * @param isShowError - 에러 발생시 alert 띄울지 여부
 * @returns 응답 데이터
 */
// API 응답 타입 정의
interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  statusCode?: number;
  error?: string;
  metadata?: {
    timestamp: string;
    path?: string;
    version?: string;
    requestId?: string;
  };
}

const request = async <T>(
  config: AxiosRequestConfig,
  isShowError: boolean = true
): Promise<T> => {
  const { method } = config;
  const isGetRequest = method?.toUpperCase() === "GET";

  try {
    const { data } = await api.request<ApiResponse<T>>({ ...config });

    // responseObj 형식 확인
    if (data && typeof data === 'object' && 'success' in data) {
      // 실패 응답인 경우
      if (data.success === false) {
        const error = new Error(data.message || '요청 처리 중 오류가 발생했습니다.');
        (error as any).response = {
          status: data.statusCode || 500,
          data: data,
        };
        throw error;
      }
      // 성공 응답인 경우 data 필드 반환
      return data.data as T;
    }

    // 기존 형식 호환성 유지
    return data as T;
  } catch (error: any) {
    let message = "서버요청 에러!";

    console.log(error);
    if (error instanceof AxiosError) {
      const { response }: any = error;

      // responseObj 형식의 에러 응답 처리
      if (response?.data && typeof response.data === 'object' && 'success' in response.data) {
        if (response.data.success === false) {
          message = response.data.message || message;
        }
      } else if (response?.data?.message) {
        message = response.data.message;
      }

      if (isGetRequest) {
        if (error?.response?.status === 403) {
          // showAlert("조회 권한이 없습니다");
        }

        return [] as any;
      }
    }

    if (isShowError && !isGetRequest) {
      console.log(error);
      /** POST 요청 */
      if (error?.response?.status === 500) {
        // showAlert("서버요청 에러!");
      } else if (error?.response?.status === 404) {
        // showAlert("파일을 찾을 수 없습니다.");
      } else if (error?.response?.status === 415) {
        // showAlert(error?.response.data.message);
      } else if (error?.response?.status === 403) {
        // showAlert("권한이 없습니다.");
      } else {
        // showAlert(message);
      }
    }

    throw error;
  }
};

export { request };

