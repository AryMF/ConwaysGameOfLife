const gameLogic = (actualStatusArray) => {
	//Create a new array (newStatusArray) to store the new state of cells
	let newStatusArray = JSON.parse(JSON.stringify(actualStatusArray));
	// Go through actualStatusArray and evaluate each cell with the auxiliary method checkCellNeighboursStatus
	for(let i=0; i < actualStatusArray.length; i++){
		for(let j=0; j < actualStatusArray[i].length; j++){
			const neighboursAlive = checkCellNeighboursStatus(actualStatusArray, i, j);
			// con el resultado de esa funcion determinar si la celula vive, muere o se reproduce y guardar
			// su nuevo status en newStatusArray.
			// With the result obtained determine if the cell lives or dies, and save the new status on newStatusArray
			newStatusArray[i][j] = false;
			if(actualStatusArray[i][j] && (neighboursAlive === 2 || neighboursAlive === 3)){
				newStatusArray[i][j] = true;
			} else if(!actualStatusArray[i][j] && neighboursAlive === 3){
				newStatusArray[i][j] = true;
			}
		}
	}	
	// Return the result stored at newStatusArray.
	return newStatusArray;
};

const checkCellNeighboursStatus = (actualArray, row, col) => {
	let liveNeighbours = 0;
	let rowArray =[];
	rowArray.push(row - 1 >= 0 ? row - 1 : -1);
	rowArray.push(row);
	rowArray.push(row + 1 < actualArray.length ? row + 1 : -1);
	let colArray =[];
	colArray.push(col - 1 >= 0 ? col - 1 : -1);
	colArray.push(col);
	colArray.push(col + 1 < actualArray[row].length ? col + 1 : -1);
	

	for(let i=0; i < rowArray.length; i++) {
		if(rowArray[i] > -1){
			for(let j=0; j < colArray.length; j++){
				if(colArray[j] > -1 && !(row === rowArray[i] && col === colArray[j])){
					if(actualArray[rowArray[i]][colArray[j]]){
						liveNeighbours++;
					}
				}
			}
		}
	}
	return liveNeighbours;
};

export { gameLogic };