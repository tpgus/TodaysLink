import { DefaultTheme } from "styled-components";

//global-style.ts는 전역 스타일
//theme.ts는 전역에서 사용 가능한 스타일 변수의 느낌

export const theme: DefaultTheme = {
  //d.ts에 선언한 타입대로
  color: {
    indigo: " #5047e5;",
    "indigo-100": "rgb(224 231 255);",
    "indigo-200": "rgb(199 210 254);",
    "indigo-300": "rgb(165 180 252);",
    "indigo-400": "rgb(129 140 248);",
    "indigo-500": "rgb(99 102 241);",
    "indigo-600": "rgb(79 70 229);",
    "indigo-700": "rgb(67 56 202);",
    "indigo-800": "rgb(55 48 163);",
    "indigo-900": "rgb(49 46 129);",
    "gray-50": "rgb(249 250 251);",
    "gray-100": "rgb(243 244 246);",
    "gray-200": "rgb(229 231 235);",
    "gray-300": "rgb(209 213 219);",
    "gray-400": "rgb(156 163 175);",
    "gray-500": "rgb(107 114 128);",
    "gray-600": "rgb(75 85 99);",
    "gray-700": "rgb(55 65 81);",
    "gray-800": "rgb(31 41 55);",
    "gray-900": "rgb(17 24 39);",
    dark: "#262220",
    brown: "#A15C38",
    lightBrown: "#C3A6A0",
    light: "#F7F1F0",
  },
  boxShadow: {
    normal: "1px 1px 5px 0 rgb(0 0 0 / 10%)",
    purple: "0 3px 8px 0 #d6c9ff",
    blue: "0 3px 8px 0 #b3e2e6",
  },
};
//혹은 아래와 같이 사용 가능
// const colors = {
//   header: "#1565C0",
//   primary: "#2196F3",
//   white: "#ffffff",
//   black: "#000000",
//   buttonOrange: "#FFA000",
//   dateText: "#939FA5",
//   border: "#E5E5E5",
//   toggleOn: "#2196F3",
//   toggleOff: "#F5F5F5",
// };

// const fontSize = {
//   title: 20,
//   subTitle: 16,
//   text: 14,
// };

// export type FontType = typeof fontSize;
// export type ColorsType = typeof colors;

// const theme: DefaultTheme = {
//     colors,
//     fontSize,
//   };

//   export default theme;

export const MIXINS = {
  // flex
  flexBox: (direction = "row", align = "center", justify = "center") => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
    `,

  // positions
  positionCenter: (type = "absolute") => {
    if (type === "absolute" || type === "fixed")
      return `
          position: ${type};
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `;
    return;
  },
};

const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;

export const media = {
  pc: `@media (min-width:1025px)`,
  tablet: `@media (min-width:768px) and (max-width:1024px)`,
  mobile: customMediaQuery(640),
  "fix-mobile": `@media (max-width: 640px)`,
  "galaxy-fold": `@media (max-width : 280px)`,
};
