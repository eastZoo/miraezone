import { useEffect } from 'react';

/**
 * RSS 피드 페이지
 * 백엔드 API를 호출하여 RSS XML을 반환
 */
const RSSPage = () => {
  useEffect(() => {
    // 백엔드 API에서 RSS를 가져와서 표시
    const fetchRSS = async () => {
      try {
        // API URL 결정: 환경변수 > 같은 도메인 API > 기본값
        const getApiUrl = () => {
          // 환경변수가 있으면 사용
          if (import.meta.env.VITE_API_BASE_URL) {
            return import.meta.env.VITE_API_BASE_URL;
          }
          
          // 프로덕션 환경에서 같은 도메인 API 시도
          if (import.meta.env.PROD) {
            // api.miraezone.org 또는 miraezone.org:3001 등 시도
            const hostname = window.location.hostname;
            if (hostname === 'miraezone.org') {
              return 'https://api.miraezone.org';
            }
            // 포트가 다른 경우
            return `${window.location.protocol}//${hostname}:3001`;
          }
          
          // 개발 환경 기본값
          return 'http://localhost:3001';
        };
        
        const apiUrl = getApiUrl();
        const fullUrl = `${apiUrl}/seo/rss`;
        
        console.log('RSS 피드 요청 URL:', fullUrl);
        
        const response = await fetch(fullUrl, {
          headers: {
            'Accept': 'application/rss+xml',
          },
          mode: 'cors', // CORS 명시
        });
        
        if (response.ok) {
          const xml = await response.text();
          // XML을 직접 표시 (Content-Type은 서버에서 이미 설정됨)
          document.open();
          document.write(xml);
          document.close();
        } else {
          console.error('RSS 피드 응답 오류:', response.status, response.statusText);
          // 에러가 발생해도 빈 RSS를 반환 (404로 리다이렉트하지 않음)
          const errorRSS = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>미래존교회</title>
    <description>RSS 피드를 불러올 수 없습니다.</description>
  </channel>
</rss>`;
          document.open();
          document.write(errorRSS);
          document.close();
        }
      } catch (error) {
        console.error('RSS 피드를 가져오는 중 오류 발생:', error);
        // 에러가 발생해도 빈 RSS를 반환
        const errorRSS = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>미래존교회</title>
    <description>RSS 피드를 불러올 수 없습니다.</description>
  </channel>
</rss>`;
        document.open();
        document.write(errorRSS);
        document.close();
      }
    };

    fetchRSS();
  }, []);

  return null;
};

export default RSSPage;

