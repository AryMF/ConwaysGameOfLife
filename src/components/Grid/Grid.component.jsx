import React from 'react';
import * as Styles from './Grid.styles';

function Grid({arrayOfElements, gameConfigurations, updateCellStatus}) {
	const { gridSize } = gameConfigurations;
	const cellsToDraw = arrayOfElements.map((element, index) => {
		return <Styles.Cell
			key={ index }
			colorStatus={element}
			size={gridSize}
			onClick={() => updateCellStatus(index)}
		/>;
	});

	return (
		<Styles.Grid colNumber={gridSize}>
			{ cellsToDraw }
		</Styles.Grid>
	);
}

export default Grid;