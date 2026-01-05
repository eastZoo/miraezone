import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * RSS 피드 페이지
 * 백엔드 API를 호출하여 RSS XML을 반환
 */
const RSSPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 백엔드 API에서 RSS를 가져와서 표시
    const fetchRSS = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
        const response = await fetch(`${apiUrl}/seo/rss`, {
          headers: {
            'Accept': 'application/rss+xml',
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
        console.error('RSS 피드를 가져오는 중 오류 발생:', error);
        navigate('/404');
      }
    };

    fetchRSS();
  }, [navigate]);

  return null;
};

export default RSSPage;

