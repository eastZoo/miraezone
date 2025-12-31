import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { queryClient } from "@/lib/queryClient";
import AppRoutes from "@/lib/core/routes/Routes";
import ScrollToTop from "@/components/common/ScrollToTop";
// import NaverMapLoader from "./components/atoms/NaverMapLoader/index.tsx";

export default function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <NaverMapLoader /> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <GlobalStyle />
          <AppRoutes />
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
