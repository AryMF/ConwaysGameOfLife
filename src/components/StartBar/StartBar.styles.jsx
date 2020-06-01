import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StartBar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 310px;
    min-width: 260px;
    height: 30px;
    padding: 0px 3px;
    background-color: ${props => props.theme.buttonNormal};
    border-radius: 20px;
`;

const StyledIcon = styled(FontAwesomeIcon) `
    color: ${props => props.theme.iconsColor};
    :hover {
        color: black;
    }
`;

const StyledText = styled.p `
    color: ${props => props.theme.iconsColor};
`;

export { StartBar, StyledIcon, StyledText };