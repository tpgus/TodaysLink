import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
//reset은 styled-component를 사용하며, 여러 브라우저마다 기본적으로 적용된 스타일을 지워주는 Node.js 패키지 : 스타일 초기화
    ${reset}

    html {
        font-size: 1rem;
        font-family: 'Roboto','Noto',sans-serif; 
    }
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
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

    a{
        text-decoration: none;
    }


    //현재 theme.ts는 min-width 기준이며, 아래의 코드는 max-width 기준으로 작성된 코드 (수정 필요)
    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
    
`;
