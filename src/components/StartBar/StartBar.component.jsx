import React from 'react';
import * as Styles from './StartBar.styles';

import { faPlay, faPause,  faTrashAlt, faStepForward, faPalette} from '@fortawesome/free-solid-svg-icons';

function StartBar({buttonHandlers}) {
	const { start, pause, stepF, reset, speedValue, speedHandler, setTheme, selectedTheme, } = buttonHandlers;

	const rangeHandler = (event) => {
		speedHandler(event.target.value);
	};

	return (
		<Styles.StartBar>
			<Styles.StyledIcon icon={faPlay} size="lg" onClick={start} />
			<Styles.StyledIcon icon={faPause} size="lg" onClick={pause} />
			<Styles.StyledIcon icon={faStepForward} size="lg" onClick={stepF} />
			<Styles.StyledIcon icon={faTrashAlt} size="lg" onClick={reset} />
			<Styles.StyledText> Speed </Styles.StyledText>
			<input 
				type="range"
				min="1"
				max="20"
				step="1"
				value={speedValue}
				style={{ width: '60px'}}
				onChange={rangeHandler}
			/>
			<Styles.StyledIcon
				icon={faPalette}
				size="lg"
				onClick={setTheme}
			/>
			<Styles.StyledText> {selectedTheme} </Styles.StyledText>
		</Styles.StartBar>
	);
}

export default StartBar;