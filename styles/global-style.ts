import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    //reset은 styled-component를 사용하며, 여러 브라우저마다 기본적으로 적용된 스타일을 지워주는 Node.js 패키지 : 스타일 초기화
    ${reset}

    html {
        font-size: 1rem;
        font-family: 'Roboto','Noto',sans-serif; 
        height: -webkit-fill-available;
    }
    body {
        overflow: overlay;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }

    button {
        padding: 0;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }   
    }

    ul {
        list-style: none;   
    }

    a {
       color:black;
       text-decoration:none;
    }

    .pc-tablet-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
    .tablet-mobile-only{
        display: block;
        ${media.tablet}{
            display:none;
        }
    }
    .mobile-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    
`;
