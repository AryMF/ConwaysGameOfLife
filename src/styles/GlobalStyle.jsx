import { createGlobalStyle } from 'styled-components' ;
import styled from 'styled-components';

const GlobalStyle =  createGlobalStyle`
    body {
        background: transparent;
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

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
`;

const imgLogo = styled.img `
    max-width: calc(100vw - 20px);
    height: calc((100vh / 7) - 15px);
    margin-left: 10px;
    margin-right: 10px;
`;

export { GlobalStyle, imgLogo };