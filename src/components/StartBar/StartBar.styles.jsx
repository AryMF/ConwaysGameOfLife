import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StartBar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 260px;
    min-width: 260px;
    height: 40px;
    padding: 0px 3px;
    background-color: orangered;
    border-radius: 20px;
`;

const StyledIcon = styled(FontAwesomeIcon) `
    color: white;

    :hover {
        color: black;
    }
`;

export { StartBar, StyledIcon };