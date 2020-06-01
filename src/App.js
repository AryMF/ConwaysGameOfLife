import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styles from './styles';

import {GameArea} from './components/GameArea';

function App() {
	const themesNames = Object.keys(Styles.Theme);
	const themes = [
		Styles.Theme.Fresh,
		Styles.Theme.Earth,
		Styles.Theme.Winter,
		Styles.Theme.Boho,
		Styles.Theme.Retro
	];
	const [themeIndex, setThemeIndex] = useState(0);

	const changeTheme = () => {
		const newTheme = themeIndex < 4 ? themeIndex + 1 : 0;
		setThemeIndex(newTheme);
	};

	return (
		<ThemeProvider theme={themes[themeIndex]}>
			<div>
				<Styles.GlobalStyle/>
				<header>
					<Styles.LogoSVG />
				</header>
				<GameArea changeTheme={changeTheme} selectedTheme={themesNames[themeIndex]} />
			</div>
		</ThemeProvider>
	);
}

export default App;
