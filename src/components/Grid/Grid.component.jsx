import React from 'react';
import * as Styles from './Grid.styles';

function Grid({arrayOfElements, gameConfigurations, updateCellStatus}) {
	const { gridSize } = gameConfigurations;
	const cellsToDraw = arrayOfElements.map((element, rowIndex) => {
		return element.map((element, colIndex) => {
			return <Styles.Cell
				key={ rowIndex + ',' + colIndex}
				colorStatus={element}
				size={gridSize}
				onClick={() => updateCellStatus(rowIndex, colIndex)}
			/>;
		});
	});

	return (
		<Styles.Grid colNumber={gridSize}>
			{ cellsToDraw }
		</Styles.Grid>
	);
}

export default Grid;