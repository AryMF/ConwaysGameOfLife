import styled from 'styled-components';

const Grid = styled.div `
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    --colNumber: ${props => props.colNumber};
    display: grid;
    grid-template-columns: repeat(var(--colNumber), 1fr);
    column-gap: 1px;
    row-gap: 1px;
    width: 35vw;
    height: 35vw;
    background-color: lightsalmon;

    @media (max-width: 768px) {
        width: 90vw;
        height: 90vw;
    }
`;

const Cell = styled.div `
    --color: ${props => props.colorStatus ? 'DodgerBlue' : 'white'};
    background-color: var(--color);
    border: none;

    :hover {
        background-color: gray; 
    }

    @media (max-width: 768px) {
        width: calc((90vw / var(--size)) - 2px);
        height: calc((90vw / var(--size)) - 4px);
    }
`;

export { Grid, Cell };