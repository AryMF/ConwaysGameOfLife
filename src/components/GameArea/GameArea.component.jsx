import React, { useState, useEffect  } from 'react';
import * as Styles from './GameArea.Style.jsx';

import { StartBar } from '../StartBar';
import { Grid } from '../Grid';

function GameArea() {
	const arrayOfElements = [false, false, false, false, true, true, false, false, false, false];
	/*** */
	const smallGrid = 10;
	const mediumGrid = 20;
	const largeGrid = 40;
	const [isGameActive, setIsGameActive] = useState(false);
	const [gameConfigurations, setGameConfigurations] = useState({ gridSize: mediumGrid, seed: null, speed: 1});
	const [generationCounter, setGenerationCounter] = useState(0);
	const [cellArray, setCellArray] = useState([]);

	const emptyCellArray = () => {
		console.log('emptyCellArray entro en efecto ');
		const size = gameConfigurations.gridSize;
		const auxArray = new Array(size).fill().map(()=>Array(size).fill(false));
		setCellArray(auxArray);
		console.log('hola ', auxArray);
	};

	useEffect(() => {
		emptyCellArray();
	}, [gameConfigurations.gridSize]);

	return (
		<Styles.Main>
			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {generationCounter}
				</Styles.CounterText>
				<StartBar />
			</Styles.BarContainer>

			<Grid arrayOfElements={cellArray} gameConfigurations={gameConfigurations} />
			
			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {generationCounter}
				</Styles.CounterText>
				<Styles.StartBarPlaceHolder />
			</Styles.BarContainer>
		</Styles.Main>
	);    
}

export default GameArea;