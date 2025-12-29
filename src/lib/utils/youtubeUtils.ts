/**
 * 유튜브 URL에서 비디오 ID를 추출하는 함수
 * @param url 유튜브 URL (다양한 형식 지원)
 * @returns 비디오 ID 또는 null
 */
export const extractYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;

  // 다양한 유튜브 URL 형식 지원
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

/**
 * 유튜브 비디오 ID로 썸네일 URL 생성
 * @param videoId 유튜브 비디오 ID
 * @returns 썸네일 URL
 */
export const getYouTubeThumbnailUrl = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

/**
 * 유튜브 URL에서 썸네일 URL 추출
 * @param url 유튜브 URL
 * @returns 썸네일 URL 또는 null
 */
export const extractYouTubeThumbnail = (url: string): string | null => {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return null;
  return getYouTubeThumbnailUrl(videoId);
};

/**
 * 유튜브 URL을 임베디드 URL로 변환
 * @param url 유튜브 URL
 * @returns 임베디드 URL 또는 null
 */
export const convertToEmbedUrl = (url: string): string | null => {
  const videoId = extractYouTubeVideoId(url);
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}`;
};

