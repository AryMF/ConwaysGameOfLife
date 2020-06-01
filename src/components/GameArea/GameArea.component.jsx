import React, { useState, useEffect  } from 'react';
import * as Styles from './GameArea.Style.jsx';

import { gameLogic } from '../../lib/gameLogic';

import { StartBar } from '../StartBar';
import { Grid } from '../Grid';

function GameArea({ changeTheme, selectedTheme }) {
	const smallGrid = 10;
	const mediumGrid = 20;
	const largeGrid = 40;
	const [isGameActive, setIsGameActive] = useState(false);
	const [gameConfigurations, setGameConfigurations] = useState({ gridSize: smallGrid, seed: null, speed: 1});
	const [generationCounter, setGenerationCounter] = useState(0);
	const [cellArray, setCellArray] = useState([]);

	const emptyCellArray = () => {
		const size = gameConfigurations.gridSize;
		const auxArray = new Array(size).fill().map(()=>Array(size).fill(false));
		setCellArray(auxArray);
		setIsGameActive(false);
		setGenerationCounter(0);
	};

	useEffect(() => {
		emptyCellArray();
	}, [gameConfigurations.gridSize]);

	const updateCellStatus = (row, col) => {		
		if(!isGameActive) {
			const tempArray = JSON.parse(JSON.stringify(cellArray));
			tempArray[row][col] = !tempArray[row][col];
			setCellArray(tempArray);
		}
	};

	const updateGridSize = (size) => {
		if(!isGameActive) {
			let newConfiguration = {};
			newConfiguration = Object.assign(newConfiguration, gameConfigurations);
			newConfiguration.gridSize = size;
			setGameConfigurations(newConfiguration);
		}
	};

	const startGame = () => {
		setIsGameActive(true);
	};

	const pauseGame = () => {
		setIsGameActive(false);
	};

	const gameStepCicle = () => {
		const actualStateArray = JSON.parse(JSON.stringify(cellArray));
		const newStateArray = gameLogic(actualStateArray);
		setCellArray(newStateArray);
		setGenerationCounter(generationCounter => generationCounter + 1);
	};

	useEffect(() => {
		let interval = null;
		if (isGameActive) {
			interval = setInterval(() => {
				gameStepCicle();
			}, 500 / gameConfigurations.speed);
		} else if (!isGameActive) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isGameActive, generationCounter]);

	const stepForward = () => {
		gameStepCicle();
	};

	//TODO: Check this part later, maybe a single method to update game configurations?
	const setSpeed = (value) => {
		let newConfiguration = {};
		newConfiguration = Object.assign(newConfiguration, gameConfigurations);
		newConfiguration.speed = value;
		setGameConfigurations(newConfiguration);
	};

	return (
		<Styles.Main>
			<Styles.BarContainer>
				<Styles.CounterText> 
                    generation: {generationCounter}
				</Styles.CounterText>
				<StartBar 
					buttonHandlers={{
						start: startGame,
						pause: pauseGame,
						stepF: stepForward,
						reset: emptyCellArray,
						speedValue: gameConfigurations.speed,
						speedHandler: setSpeed,
						setTheme: changeTheme,
						selectedTheme,
					}}
				/>
			</Styles.BarContainer>

			<Grid 
				arrayOfElements={cellArray}
				gameConfigurations={gameConfigurations}
				updateCellStatus={updateCellStatus}
			/>
			
			<Styles.BarContainer>
				<Styles.CounterText />
				<div>
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
				</div>
			</Styles.BarContainer>
		</Styles.Main>
	);    
}

export default GameArea;