import React from 'react';
import * as Styles from './styles';

import {GameArea} from './components/GameArea';

function App() {
	return (
		<div>
			<Styles.GlobalStyle/>
			<header>
				<Styles.LogoSVG />
			</header>
			<GameArea />
		</div>
	);
}

export default App;
