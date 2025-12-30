import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./AdminMainTemplate.style";
import AdminHeader from "@/components/atoms/AdminHeader";
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
  const [hasSubTabs, setHasSubTabs] = React.useState(false);

  // 사이드바가 있는지 확인
  const hasSidebar =
    location.pathname.startsWith("/admin/") && location.pathname !== "/admin";

  // 하위 탭 존재 여부 확인
  React.useEffect(() => {
    const checkSubTabs = () => {
      const subTabBar = document.querySelector('[data-subtab-bar="true"]');
      setHasSubTabs(!!subTabBar);
    };

    checkSubTabs();
    const interval = setInterval(checkSubTabs, 100);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <S.Wrapper>
      {/* 헤더 */}
      <AdminHeader />
      <S.ContentLayout hasSidebar={hasSidebar} hasSubTabs={hasSubTabs}>
        {/* 사이드바 */}
        {/* {hasSidebar && (
          <AdminSidebar activeMenu={getActiveMenu()} hasSubTabs={hasSubTabs} />
        )} */}
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
