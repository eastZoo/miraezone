import { useEffect } from "react";

const NaverMapLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${
      import.meta.env.VITE_API_NAVER_MAP_API_KEY
    }&submodules=geocoder`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default NaverMapLoader;
