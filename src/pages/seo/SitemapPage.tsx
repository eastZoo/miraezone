import { useEffect } from 'react';

/**
 * 사이트맵 페이지
 * 백엔드 API를 호출하여 사이트맵 XML을 반환
 */
const SitemapPage = () => {
  useEffect(() => {
    // 백엔드 API에서 사이트맵을 가져와서 표시
    const fetchSitemap = async () => {
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
        const fullUrl = `${apiUrl}/seo/sitemap`;
        
        console.log('사이트맵 요청 URL:', fullUrl);
        
        const response = await fetch(fullUrl, {
          headers: {
            'Accept': 'application/xml',
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
          console.error('사이트맵 응답 오류:', response.status, response.statusText);
          // 에러가 발생해도 빈 사이트맵을 반환 (404로 리다이렉트하지 않음)
          const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${window.location.origin}</loc>
  </url>
</urlset>`;
          document.open();
          document.write(errorSitemap);
          document.close();
        }
      } catch (error) {
        console.error('사이트맵을 가져오는 중 오류 발생:', error);
        // 에러가 발생해도 빈 사이트맵을 반환
        const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${window.location.origin}</loc>
  </url>
</urlset>`;
        document.open();
        document.write(errorSitemap);
        document.close();
      }
    };

    fetchSitemap();
  }, []);

  return null;
};

export default SitemapPage;

