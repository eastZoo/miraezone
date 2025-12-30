import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppProviders from "./AppProviders.tsx";
import NaverMapLoader from "./components/atoms/NaverMapLoader/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NaverMapLoader />
    <AppProviders />
    {/* <App /> */}
  </StrictMode>
);
