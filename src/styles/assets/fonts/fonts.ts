import { createGlobalStyle } from "styled-components";

import PretendardWOFFThin from "./woff/Pretendard-Thin.woff";
import PretendardWOFFExtraLight from "./woff/Pretendard-ExtraLight.woff";
import PretendardWOFFLight from "./woff/Pretendard-Light.woff";
import PretendardWOFFRegular from "./woff/Pretendard-Regular.woff";
import PretendardWOFFTMedium from "./woff/Pretendard-Medium.woff";
import PretendardWOFFTSemiBold from "./woff/Pretendard-SemiBold.woff";
import PretendardWOFFTBold from "./woff/Pretendard-Bold.woff";
import PretendardWOFFTExtraBold from "./woff/Pretendard-ExtraBold.woff";
import PretendardWOFFTBlack from "./woff/Pretendard-Black.woff";

import PretendardWOFF2Thin from "./woff2/Pretendard-Thin.woff2";
import PretendardWOFF2ExtraLight from "./woff2/Pretendard-ExtraLight.woff2";
import PretendardWOFF2Light from "./woff2/Pretendard-Light.woff2";
import PretendardWOFF2Regular from "./woff2/Pretendard-Regular.woff2";
import PretendardWOFF2TMedium from "./woff2/Pretendard-Medium.woff2";
import PretendardWOFF2TSemiBold from "./woff2/Pretendard-SemiBold.woff2";
import PretendardWOFF2TBold from "./woff2/Pretendard-Bold.woff2";
import PretendardWOFF2TExtraBold from "./woff2/Pretendard-ExtraBold.woff2";
import PretendardWOFF2TBlack from "./woff2/Pretendard-Black.woff2";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-style: normal;
    src: local('Pretendard Regular'),
      url(${PretendardWOFF2Regular}) format('woff2'), 
      url(${PretendardWOFFRegular}) format('woff');
    font-display: FALLBACK;
  } 

  @font-face {
	font-family: 'Pretendard';
	font-weight: 900;
  font-style: normal;
	src: local('Pretendard Black'),
    url(${PretendardWOFF2TBlack}) format('woff2'),
    url(${PretendardWOFFTBlack}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-style: normal;
	src: local('Pretendard ExtraBold'), 
    url(${PretendardWOFF2TExtraBold}) format('woff2'),
    url(${PretendardWOFFTExtraBold}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-style: normal;
	src: local('Pretendard Bold'), 
    url(${PretendardWOFF2TBold}) format('woff2'), 
    url(${PretendardWOFFTBold}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-style: normal;
	src: local('Pretendard SemiBold'), 
    url(${PretendardWOFF2TSemiBold}) format('woff2'), 
    url(${PretendardWOFFTSemiBold}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-style: normal;
	src: local('Pretendard Medium'), 
    url(${PretendardWOFF2TMedium}) format('woff2'), 
    url(${PretendardWOFFTMedium}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-style: normal;
	src: local('Pretendard Regular'), 
    url(${PretendardWOFF2Regular}) format('woff2'), 
    url(${PretendardWOFFRegular}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-style: normal;
	src: local('Pretendard Light'),
    url(${PretendardWOFF2Light}) format('woff2'), 
    url(${PretendardWOFFLight}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
	font-style: normal;
	src: local('Pretendard ExtraLight'), 
    url(${PretendardWOFF2ExtraLight}) format('woff2'), 
    url(${PretendardWOFFExtraLight}) format('woff');
  font-display: FALLBACK;
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
	font-style: normal;
	src: local('Pretendard Thin'), 
    url(${PretendardWOFF2Thin}) format('woff2'), 
    url(${PretendardWOFFThin}) format('woff');
  font-display: FALLBACK;
}
`;