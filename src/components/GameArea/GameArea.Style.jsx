import styled from 'styled-components';

const Main = styled.main `
    display:  flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 100vw;
    height: calc((100vh / 7) * 6);
`;

const BarContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    width: 40vw;
    min-width: fit-content;
    margin: 5px;
    background-color: transparent;

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

const SeedDiv = styled.div `  
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

const ButtonStyled = styled.button `
    --widthSize: ${props => props.width ? props.width : '75px'};
    width: var(--widthSize);
    height: 25px;
    border-radius: 15px;
    border: none;
    background-color: ${props => props.isActive ? props.theme.buttonActive : props.theme.buttonNormal};
    color: ${props => props.theme.buttonFontColor};
    margin: 0px 5px;

    :hover {
        background-color: #0D6072;
    }
`;

export { Main, BarContainer, CounterText, ButtonStyled, SeedDiv};