import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    //타입을 정의
    //string 등 다양한 타입도 되지만, 아래와 같은 경우는 리터럴 타입을 사용 (이 문자열만 가능)
    color: {
      purple: "#8661de";
      blue: "#00bac7";
      gray: "#f6f6f6";
      green: "#07b495";
      lightGreen: "#99ecdd";
      darkGray: "#54595d";
      indigo: " #5047e5;";
      "indigo-500": "#6D6DF0";
    };
    boxShadow: {
      normal: "0 3px 8px 0 rgb(0 0 0 / 10%)";
      purple: "0 3px 8px 0 #d6c9ff";
      blue: "0 3px 8px 0 #b3e2e6";
    };
  }
}
