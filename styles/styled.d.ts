import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    //타입을 정의
    //string 등 다양한 타입도 되지만, 아래와 같은 경우는 리터럴 타입을 사용 (해당 문자열만 가능)
    color: {
      indigo: " #5047e5;";
      "indigo-100": "rgb(224 231 255);";
      "indigo-200": "rgb(199 210 254);";
      "indigo-300": "rgb(165 180 252);";
      "indigo-400": "rgb(129 140 248);";
      "indigo-500": "rgb(99 102 241);";
      "indigo-600": "rgb(79 70 229);";
      "indigo-700": "rgb(67 56 202);";
      "indigo-800": "rgb(55 48 163);";
      "indigo-900": "rgb(49 46 129);";
      "gray-50": "rgb(249 250 251);";
      "gray-100": "rgb(243 244 246);";
      "gray-200": "rgb(229 231 235);";
      "gray-300": "rgb(209 213 219);";
      "gray-400": "rgb(156 163 175);";
      "gray-500": "rgb(107 114 128);";
      "gray-600": "rgb(75 85 99);";
      "gray-700": "rgb(55 65 81);";
      "gray-800": "rgb(31 41 55);";
      "gray-900": "rgb(17 24 39);";
      dark: "#262220";
      brown: "#A15C38";
      lightBrown: "#C3A6A0";
      light: "#F7F1F0";
    };
    boxShadow: {
      normal: "1px 1px 5px 0 rgb(0 0 0 / 10%)";
      purple: "0 3px 8px 0 #d6c9ff";
      blue: "0 3px 8px 0 #b3e2e6";
    };
  }
}
