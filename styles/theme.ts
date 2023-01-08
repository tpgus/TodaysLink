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
  },
  boxShadow: {
    normal: "0 3px 8px 0 rgb(0 0 0 / 10%)",
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
//사용 방법
//  ${({ theme }) => theme.MIXINS.flexBox('column')}

// {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
//  기존 3줄 이상 차지하는 flex box 코드를 한 줄로 줄일 수 있다.

const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;
//min-width : 최소 ~ 이상일 때 적용한다.
//min-width : 작은 사이즈(모바일)부터 스타일을 만들어 나간다 단순함 -> 복잡함 : 단순한 것을 복잡화 -> 추가하는 느낌 : 단순함에서 스타일을 추가? : 비교적 쉬움
//max-width : 최대 ~ 이하일 때 적용한다.
//max-width : 큰 사이즈(pc)부터 스타일을 만들어 나간다 복잡함 -> 단순함 : 복잡한 것을 단순화 -> 빼는 느낌 : 복잡한걸 단순화? 어려움

export const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(640),
};

//사용 방법
//{media.pc} {
// padding:1rem;
// font-size:2rem;
// }
