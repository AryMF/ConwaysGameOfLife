import React from 'react';
import * as Styles from './styles';


import Logo from './assets/LogoComplete.png';

function App() {
	return (
		<div>
			<Styles.GlobalStyle/>
			<header>
				<Styles.imgLogo src={Logo} />
			</header>
			<main></main>
		</div>
	);
}

export default App;
