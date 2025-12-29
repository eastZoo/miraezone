import axios from "axios";

/**
 * 이미지 업로드 유틸리티 함수
 * @param file 업로드할 이미지 파일
 * @returns 업로드된 이미지 정보 (url, filename, size)
 */
export const uploadImage = async (
  file: File
): Promise<{ url: string; filename: string; size: number }> => {
  const formData = new FormData();
  formData.append("file", file);

  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const response = await axios.post(`${baseURL}/upload/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.data;
};

