import styled from 'styled-components';

const Grid = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 35vw;
    height: 35vw;
    background-color: lightsalmon;

    @media (max-width: 768px) {
        width: 90vw;
        height: 90vw;
    }
`;

const Cell = styled.div `
    --size: ${props => props.size};
    --color: ${props => props.colorStatus ? 'DodgerBlue' : 'white'};
    background-color: var(--color);
    width: calc((35vw / var(--size)) - 1px);
    height: calc((35vw / var(--size)) - 1px);
    margin: .5px;
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