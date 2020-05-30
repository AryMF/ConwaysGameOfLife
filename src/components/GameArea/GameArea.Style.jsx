import styled from 'styled-components';

const Main = styled.main `
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: lightcoral;
    width: 100vw;
    height: calc((100vh / 7) * 6);
`;

const BarContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    width: 40vw;
    min-width: fit-content;
    margin: 5px;
    background-color: white;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        width: 90vw;
    }
`;

const CounterText = styled.p `  
    flex: 1;
    text-align: left;
    vertical-align: baseline;
    font-size: 24px;
    margin: 5px;
`;

const StartBarPlaceHolder = styled.div `
    display: flex;
    flex-direction: row;
    width: 260px;
    min-width: 260px;
    height: 40px;
    background-color: gray;
    border-radius: 20px;
`;

const GridPlaceholder = styled.div `
    width: 35vw;
    height: 35vw;
    background-color: lightsalmon;

    @media (max-width: 768px) {
        width: 90vw;
        height: 90vw;
    }
`;

export { Main, BarContainer, StartBarPlaceHolder, CounterText, GridPlaceholder };