import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styles from './styles';

import {GameArea} from './components/GameArea';

function App() {
	return (
		<ThemeProvider theme={Styles.Theme.Fresh}>
			<div>
				<Styles.GlobalStyle/>
				<header>
					<Styles.LogoSVG />
				</header>
				<GameArea />
			</div>
		</ThemeProvider>
	);
}

export default App;
