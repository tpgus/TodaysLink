import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        height: 100vh;
        font-size: 1rem;
        font-family: 'Roboto','Noto',sans-serif; 
    }
    body {
        height: 100vh;
        overflow: overlay;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    #__next {
        height: 100%; // or min-height
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
       text-decoration:none;
    }

    .pc-only{
        display:none;
        ${media.pc}{
            display:block;
        }
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
