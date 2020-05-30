import React from 'react';
import * as Styles from './styles';

import {GameArea} from './components/GameArea';
import Logo from './assets/LogoComplete.png';

function App() {
	return (
		<div>
			<Styles.GlobalStyle/>
			<header>
				<Styles.imgLogo src={Logo} />
			</header>
			<GameArea />
		</div>
	);
}

export default App;
