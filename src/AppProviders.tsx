import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { queryClient } from "@/lib/queryClient";
import AppRoutes from "@/lib/core/routes/Routes";

export default function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
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
