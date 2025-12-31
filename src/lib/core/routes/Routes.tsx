import LoadingSpinner from "@/components/atoms/LoadingSpinner";
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
const NoticeDetailPage = lazy(() => import("@/pages/notice/NoticeDetailPage"));
const NewsPage = lazy(() => import("@/pages/news/NewsPage"));
const NewsDetailPage = lazy(() => import("@/pages/news/NewsDetailPage"));
const BulletinsPage = lazy(() => import("@/pages/bulletins/BulletinsPage"));
const BulletinDetailPage = lazy(
  () => import("@/pages/bulletins/BulletinDetailPage")
);
// 예배/찬양
const WorshipInfoPage = lazy(() => import("@/pages/worship/WorshipInfoPage"));
const WorshipVideosPage = lazy(
  () => import("@/pages/worship/WorshipVideosPage")
);
const WorshipVideoDetailPage = lazy(
  () => import("@/pages/worship/WorshipVideoDetailPage")
);
// 다음세대
const ElementaryPage = lazy(() => import("@/pages/nextgen/ElementaryPage"));
const ElementaryAlbumPage = lazy(
  () => import("@/pages/nextgen/ElementaryAlbumPage")
);
const YouthPage = lazy(() => import("@/pages/nextgen/YouthPage"));
const YouthAlbumPage = lazy(() => import("@/pages/nextgen/YouthAlbumPage"));
const YoungAdultPage = lazy(() => import("@/pages/nextgen/YoungAdultPage"));
const YoungAdultAlbumPage = lazy(
  () => import("@/pages/nextgen/YoungAdultAlbumPage")
);
const NextGenNewsPage = lazy(() => import("@/pages/nextgen/NextGenNewsPage"));
const NextGenNewsDetailPage = lazy(
  () => import("@/pages/nextgen/NextGenNewsDetailPage")
);
const NextGenAlbumDetailPage = lazy(
  () => import("@/pages/nextgen/NextGenAlbumDetailPage")
);
// 자료실
const ChurchAlbumPage = lazy(() => import("@/pages/resources/ChurchAlbumPage"));
const ChurchAlbumDetailPage = lazy(
  () => import("@/pages/resources/ChurchAlbumDetailPage")
);
const SongsPage = lazy(() => import("@/pages/resources/SongsPage"));
const DownloadsPage = lazy(() => import("@/pages/resources/DownloadsPage"));
// 관리자
const ChurchAdminPage = lazy(
  () => import("@/pages/admin/church/ChurchAdminPage")
);
const OrganizationAdminPage = lazy(
  () => import("@/pages/admin/church/OrganizationAdminPage")
);
const LocationAdminPage = lazy(
  () => import("@/pages/admin/church/LocationAdminPage")
);
const NoticeAdminPage = lazy(
  () => import("@/pages/admin/notice/NoticeAdminPage")
);
const NewsAdminPage = lazy(() => import("@/pages/admin/news/NewsAdminPage"));
const BulletinsAdminPage = lazy(
  () => import("@/pages/admin/bulletins/BulletinsAdminPage")
);
const WorshipAdminPage = lazy(
  () => import("@/pages/admin/worship/WorshipAdminPage")
);
const NextGenAdminPage = lazy(
  () => import("@/pages/admin/nextgen/NextGenAdminPage")
);
const ChurchAlbumAdminPage = lazy(
  () => import("@/pages/admin/resources/ChurchAlbumAdminPage")
);
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/auth/RegisterPage"));
const MemberAdminPage = lazy(
  () => import("@/pages/admin/member/MemberAdminPage")
);

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
    { path: "/notice/:id", element: <NoticeDetailPage /> },
    { path: "/news", element: <NewsPage /> },
    { path: "/news/:id", element: <NewsDetailPage /> },
    { path: "/bulletins", element: <BulletinsPage /> },
    { path: "/bulletins/:id", element: <BulletinDetailPage /> },
    // 예배/찬양
    { path: "/worship/info", element: <WorshipInfoPage /> },
    { path: "/worship/videos", element: <WorshipVideosPage /> },
    { path: "/worship/videos/:id", element: <WorshipVideoDetailPage /> },
    // 다음세대
    { path: "/nextgen/elementary", element: <ElementaryPage /> },
    { path: "/nextgen/elementary/albums", element: <ElementaryAlbumPage /> },
    {
      path: "/nextgen/elementary/albums/:id",
      element: <NextGenAlbumDetailPage />,
    },
    { path: "/nextgen/youth", element: <YouthPage /> },
    { path: "/nextgen/youth/albums", element: <YouthAlbumPage /> },
    { path: "/nextgen/youth/albums/:id", element: <NextGenAlbumDetailPage /> },
    { path: "/nextgen/youngadult", element: <YoungAdultPage /> },
    { path: "/nextgen/youngadult/albums", element: <YoungAdultAlbumPage /> },
    {
      path: "/nextgen/youngadult/albums/:id",
      element: <NextGenAlbumDetailPage />,
    },
    { path: "/nextgen/news", element: <NextGenNewsPage /> },
    { path: "/nextgen/news/:id", element: <NextGenNewsDetailPage /> },
    // 자료실
    { path: "/resources/church-albums", element: <ChurchAlbumPage /> },
    {
      path: "/resources/church-albums/:id",
      element: <ChurchAlbumDetailPage />,
    },
    { path: "/resources/songs", element: <SongsPage /> },
    { path: "/resources/downloads", element: <DownloadsPage /> },
    // 관리자
    { path: "/admin", element: <LoginPage /> },
    { path: "/admin/login", element: <Navigate to="/admin" replace /> },
    { path: "/admin/register", element: <RegisterPage /> },
    { path: "/admin/church", element: <ChurchAdminPage /> },
    { path: "/admin/church/organization", element: <OrganizationAdminPage /> },
    { path: "/admin/church/location", element: <LocationAdminPage /> },
    { path: "/admin/notice", element: <NoticeAdminPage /> },
    { path: "/admin/news", element: <NewsAdminPage /> },
    { path: "/admin/bulletins", element: <BulletinsAdminPage /> },
    {
      path: "/admin/worship",
      element: <Navigate to="/admin/worship/schedules" replace />,
    },
    { path: "/admin/worship/schedules", element: <WorshipAdminPage /> },
    { path: "/admin/worship/videos", element: <WorshipAdminPage /> },
    {
      path: "/admin/nextgen",
      element: <Navigate to="/admin/nextgen/department" replace />,
    },
    { path: "/admin/nextgen/department", element: <NextGenAdminPage /> },
    { path: "/admin/nextgen/elementary", element: <NextGenAdminPage /> },
    { path: "/admin/nextgen/youth", element: <NextGenAdminPage /> },
    { path: "/admin/nextgen/youngadult", element: <NextGenAdminPage /> },
    { path: "/admin/nextgen/news", element: <NextGenAdminPage /> },
    { path: "/admin/church-albums", element: <ChurchAlbumAdminPage /> },
    { path: "/admin/members", element: <MemberAdminPage /> },
    { path: "/404", element: <NotFoundPage /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ];

  const element = useRoutes(routes);

  return <Suspense fallback={<LoadingSpinner />}>{element}</Suspense>;
}
