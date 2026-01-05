import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 사이트맵 페이지
 * 백엔드 API를 호출하여 사이트맵 XML을 반환
 */
const SitemapPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드 API에서 사이트맵을 가져와서 표시
    const fetchSitemap = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
        const response = await fetch(`${apiUrl}/seo/sitemap`, {
          headers: {
            'Accept': 'application/xml',
          },
        });
        
        if (response.ok) {
          const xml = await response.text();
          // XML을 직접 표시
          document.open();
          document.write(xml);
          document.close();
        } else {
          navigate('/404');
        }
      } catch (error) {
        console.error('사이트맵을 가져오는 중 오류 발생:', error);
        navigate('/404');
      }
    };

    fetchSitemap();
  }, [navigate]);

  return null;
};

export default SitemapPage;

