import React from 'react';
import * as Styles from './GameArea.Style.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,  faTrashAlt, faStepForward} from '@fortawesome/free-solid-svg-icons';

function GameArea(params) {
	const counter = 0;
	return (
		<Styles.Main>
			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {counter}
				</Styles.CounterText>
				<Styles.StartBarPlaceHolder />
			</Styles.BarContainer>

			<Styles.GridPlaceholder ></Styles.GridPlaceholder >

			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {counter}
				</Styles.CounterText>
				<Styles.StartBarPlaceHolder />
			</Styles.BarContainer>
		</Styles.Main>
	);    
}

export default GameArea;