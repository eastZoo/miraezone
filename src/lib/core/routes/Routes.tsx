import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// lazy 로딩 페이지들 (필요한 페이지만 추가)
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/404/NotFoundPage"));
// 교회소개
const IntroducePage = lazy(() => import("@/pages/church/IntroducePage"));
const OrganizationPage = lazy(() => import("@/pages/church/OrganizationPage"));
const LocationPage = lazy(() => import("@/pages/church/LocationPage"));
// 안내/소식
const NoticePage = lazy(() => import("@/pages/notice/NoticePage"));
const NewsPage = lazy(() => import("@/pages/news/NewsPage"));
const BulletinsPage = lazy(() => import("@/pages/bulletins/BulletinsPage"));
// 예배/찬양
const WorshipInfoPage = lazy(() => import("@/pages/worship/WorshipInfoPage"));
const WorshipVideosPage = lazy(
  () => import("@/pages/worship/WorshipVideosPage")
);
// 다음세대
const ElementaryPage = lazy(() => import("@/pages/nextgen/ElementaryPage"));
const YouthPage = lazy(() => import("@/pages/nextgen/YouthPage"));
const YoungAdultPage = lazy(() => import("@/pages/nextgen/YoungAdultPage"));
const NextGenNewsPage = lazy(() => import("@/pages/nextgen/NextGenNewsPage"));
// 자료실
const SongsPage = lazy(() => import("@/pages/resources/SongsPage"));
const DownloadsPage = lazy(() => import("@/pages/resources/DownloadsPage"));
// 관리자
const ChurchAdminPage = lazy(() => import("@/pages/admin/church/ChurchAdminPage"));
const OrganizationAdminPage = lazy(() => import("@/pages/admin/church/OrganizationAdminPage"));
const LocationAdminPage = lazy(() => import("@/pages/admin/church/LocationAdminPage"));
const NoticeAdminPage = lazy(() => import("@/pages/admin/notice/NoticeAdminPage"));
const NewsAdminPage = lazy(() => import("@/pages/admin/news/NewsAdminPage"));
const BulletinsAdminPage = lazy(() => import("@/pages/admin/bulletins/BulletinsAdminPage"));

export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    // 교회소개
    { path: "/church/introduce", element: <IntroducePage /> },
    { path: "/church/organization", element: <OrganizationPage /> },
    { path: "/church/location", element: <LocationPage /> },
    // 안내/소식
    { path: "/notice", element: <NoticePage /> },
    { path: "/news", element: <NewsPage /> },
    { path: "/bulletins", element: <BulletinsPage /> },
    // 예배/찬양
    { path: "/worship/info", element: <WorshipInfoPage /> },
    { path: "/worship/videos", element: <WorshipVideosPage /> },
    // 다음세대
    { path: "/nextgen/elementary", element: <ElementaryPage /> },
    { path: "/nextgen/youth", element: <YouthPage /> },
    { path: "/nextgen/youngadult", element: <YoungAdultPage /> },
    { path: "/nextgen/news", element: <NextGenNewsPage /> },
    // 자료실
    { path: "/resources/songs", element: <SongsPage /> },
    { path: "/resources/downloads", element: <DownloadsPage /> },
    // 관리자
    { path: "/admin/church", element: <ChurchAdminPage /> },
    { path: "/admin/church/organization", element: <OrganizationAdminPage /> },
    { path: "/admin/church/location", element: <LocationAdminPage /> },
    { path: "/admin/notice", element: <NoticeAdminPage /> },
    { path: "/admin/news", element: <NewsAdminPage /> },
    { path: "/admin/bulletins", element: <BulletinsAdminPage /> },
    { path: "/404", element: <NotFoundPage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ];

  const element = useRoutes(routes);

  return (
    <Suspense fallback={<div style={{ padding: 24 }}>로딩중…</div>}>
      {element}
    </Suspense>
  );
}
