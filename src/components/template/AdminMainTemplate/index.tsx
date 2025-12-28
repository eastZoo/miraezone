import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./AdminMainTemplate.style";
import AdminHeader from "@/components/atoms/AdminHeader";
import AdminSidebar from "@/components/atoms/AdminSidebar";
import * as G from "@/styles/GlobalStyle";

export type ContainerType = "wide" | "standard";

interface AdminMainTemplateProps {
  children: React.ReactNode;
  mobileHeader?: React.ReactNode;
  webHeader?: React.ReactNode;
  commonUi?: React.ReactNode;
  containerType?: ContainerType;
  pageTitle?: string;
  breadcrumb?: string[];
}

const AdminMainTemplate = ({
  children,
  containerType = "wide",
  pageTitle,
  breadcrumb,
}: AdminMainTemplateProps) => {
  const location = useLocation();

  // 현재 경로에 따라 상단 네비게이션 바의 활성 메뉴( CSS ) 를 결정
  const getActiveMenu = () => {
    const path = location.pathname;

    if (path.startsWith("/admin/church")) return "church";
    return "members"; // 기본값
  };

  // 사이드바가 있는지 확인
  const hasSidebar =
    location.pathname.startsWith("/admin/") && location.pathname !== "/admin";

  return (
    <S.Wrapper>
      {/* 헤더 */}
      <AdminHeader />
      <S.ContentLayout hasSidebar={hasSidebar}>
        {/* 사이드바 */}
        {hasSidebar && <AdminSidebar activeMenu={getActiveMenu()} />}
        {/* /pages 폴더의 페이지들이 위치할 컨테이너 */}
        {containerType === "wide" ? (
          <S.ContainerWrapperAdmin hasSidebar={hasSidebar}>
            {/* Page Header */}
            {(pageTitle || breadcrumb) && (
              <S.PageHeader>
                {pageTitle && <S.PageTitle>{pageTitle}</S.PageTitle>}
                {breadcrumb && breadcrumb.length > 0 && (
                  <G.Breadcrumb>
                    {breadcrumb.map((item, index) => (
                      <React.Fragment key={index}>
                        {index < breadcrumb.length - 1 ? (
                          <>
                            {item} <span>{">"}</span>
                          </>
                        ) : (
                          <span className="last-item">{item}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </G.Breadcrumb>
                )}
              </S.PageHeader>
            )}
            {children}
          </S.ContainerWrapperAdmin>
        ) : (
          <S.ContainerWrapperStandard hasSidebar={hasSidebar}>
            {/* Page Header */}
            {(pageTitle || breadcrumb) && (
              <S.PageHeader>
                {pageTitle && <S.PageTitle>{pageTitle}</S.PageTitle>}
                {breadcrumb && breadcrumb.length > 0 && (
                  <G.Breadcrumb>
                    {breadcrumb.map((item, index) => (
                      <React.Fragment key={index}>
                        {index < breadcrumb.length - 1 ? (
                          <>
                            {item} <span>{">"}</span>
                          </>
                        ) : (
                          <span className="last-item">{item}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </G.Breadcrumb>
                )}
              </S.PageHeader>
            )}
            {children}
          </S.ContainerWrapperStandard>
        )}
      </S.ContentLayout>
    </S.Wrapper>
  );
};

export default AdminMainTemplate;
