const gameLogic = (actualStatusArray) => {
	//Crear un nuevo array (newStatusArray) para guardar los nuevos estados en el.
	let newStatusArray = JSON.parse(JSON.stringify(actualStatusArray));
	// Barrido al array actual, evaluar cada cell llamando el metodo checkCellNeighboursStatus
	for(let i=0; i < actualStatusArray.length; i++){
		for(let j=0; j < actualStatusArray[i].length; j++){
			const neighboursAlive = checkCellNeighboursStatus(actualStatusArray, i, j);
			// con el resultado de esa funcion determinar si la celula vive, muere o se reproduce y guardar
			// su nuevo status en newStatusArray.
			newStatusArray[i][j] = false;
			if(actualStatusArray[i][j] && (neighboursAlive === 2 || neighboursAlive === 3)){
				newStatusArray[i][j] = true;
			} else if(!actualStatusArray[i][j] && neighboursAlive === 3){
				newStatusArray[i][j] = true;
			}
		}
	}	
	// Al finalizar el barrido del array actual retornar newStatusArray.
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