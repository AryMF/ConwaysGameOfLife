import React from 'react';
import { createGlobalStyle } from 'styled-components' ;
import styled, { keyframes }from 'styled-components';

import { ReactComponent as ReactLogo } from '../assets/logoSVG.svg';

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

        @media (max-width: 768px) {
            justify-content: center;
        }
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

const fadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const colorC = keyframes`
  from   { fill: purple; }
  to { fill: purple; }
`;

const LogoSVG = styled(ReactLogo) `
    max-width: calc(100vw - 20px);
    height: calc((100vh / 7) - 15px);
    margin-left: 10px;
    margin-right: 10px;

    * {
        animation: ${fadeIn} 2s linear;
    }

    :hover {
        rect:nth-child(20){
            animation: ${colorC} .5s linear;
        }
        rect:nth-child(21){
            animation: ${colorC} .5s linear .5s;
        }
        rect:nth-child(22){
            animation: ${colorC} .5s linear 1s;
        }
        rect:nth-child(23){
            animation: ${colorC} .5s linear 1.5s;
        }
        rect:nth-child(24){
            animation: ${colorC} .5s linear 2s;
        }
    }
`;

export { GlobalStyle, LogoSVG};