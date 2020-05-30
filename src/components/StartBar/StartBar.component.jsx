import React from 'react';
import * as Styles from './StartBar.styles';

import { faPlay, faPause,  faTrashAlt, faStepForward} from '@fortawesome/free-solid-svg-icons';

function StartBar({counter}) {
	return (
		<Styles.StartBar>
			<Styles.StyledIcon icon={faPlay} size="lg"/>
			<Styles.StyledIcon icon={faPause} size="lg"/>
			<Styles.StyledIcon icon={faStepForward} size="lg"/>
			<Styles.StyledIcon icon={faTrashAlt} size="lg"/>
			<p> Speed </p>
			<input type="range" min="1" max="100" style={{ width: '60px'}} />
		</Styles.StartBar>
	);
}

export default StartBar;