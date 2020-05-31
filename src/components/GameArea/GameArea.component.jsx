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
	};

	useEffect(() => {
		emptyCellArray();
	}, [gameConfigurations.gridSize]);

	const updateCellStatus = (row, col) => {
		if(!isGameActive) {
			const tempArray = [...cellArray];
			tempArray[row][col] = !tempArray[row][col];
			setCellArray(tempArray);
		}
	};

	const updateGridSize = (size) => {
		let newConfiguration = {};
		newConfiguration = Object.assign(newConfiguration, gameConfigurations);
		newConfiguration.gridSize = size;
		setGameConfigurations(newConfiguration);
	};

	return (
		<Styles.Main>
			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {generationCounter}
				</Styles.CounterText>
				<StartBar />
			</Styles.BarContainer>

			<Grid 
				arrayOfElements={cellArray}
				gameConfigurations={gameConfigurations}
				updateCellStatus={updateCellStatus}
			/>
			
			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {generationCounter}
				</Styles.CounterText>
				<Styles.ButtonStyled
					isActive={gameConfigurations.gridSize === smallGrid ? true : false}
					onClick={() => updateGridSize(smallGrid)}
				>
					SMALL
				</Styles.ButtonStyled>
				<Styles.ButtonStyled
					isActive={gameConfigurations.gridSize === mediumGrid ? true : false}
					onClick={() => updateGridSize(mediumGrid)}
				>
					MEDIUM
				</Styles.ButtonStyled>
				<Styles.ButtonStyled
					isActive={gameConfigurations.gridSize === largeGrid ? true : false}
					onClick={() => updateGridSize(largeGrid)}
				>
					LARGE
				</Styles.ButtonStyled>
			</Styles.BarContainer>
		</Styles.Main>
	);    
}

export default GameArea;