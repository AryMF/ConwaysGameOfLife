import { createGlobalStyle } from 'styled-components' ;
import styled from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    body {
        background: palevioletred;
        font-family: 'Text Me One', sans-serif;
        font-weight: normal;
        font-size: 20px;
        color: black;
    }

    header {
        display: flex;
        align-items: center;
        background-color: gray;
        width: 100vw;
        height: calc(100vh / 7);
    }

    main{
        background-color: lime;
        width: 100vw;
        height: calc((100vh / 7) * 6);;
    }
`;

const imgLogo = styled.img `
    max-width: calc(100vw - 20px);
    height: calc((100vh / 7) - 15px);
    margin-left: 10px;
    margin-right: 10px;
`;

export { GlobalStyle, imgLogo };