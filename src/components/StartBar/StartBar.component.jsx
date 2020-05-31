import React from 'react';
import * as Styles from './StartBar.styles';

import { faPlay, faPause,  faTrashAlt, faStepForward} from '@fortawesome/free-solid-svg-icons';

function StartBar({buttonHandlers}) {
	const { start, pause, stepF, reset, speedValue, speedHandler, } = buttonHandlers;

	const rangeHandler = (event) => {
		speedHandler(event.target.value);
	};

	return (
		<Styles.StartBar>
			<Styles.StyledIcon icon={faPlay} size="lg" onClick={start} />
			<Styles.StyledIcon icon={faPause} size="lg" onClick={pause} />
			<Styles.StyledIcon icon={faStepForward} size="lg" onClick={stepF} />
			<Styles.StyledIcon icon={faTrashAlt} size="lg" onClick={reset} />
			<p> Speed </p>
			<input type="range" min="1" max="10" value={speedValue} step="1" style={{ width: '60px'}} onChange={rangeHandler} />
		</Styles.StartBar>
	);
}

export default StartBar;