const data = [ false, false, false, true, true, true, false, false, false, ];
// [ false, true, false, false, true, false, false, true, false, ]

const gameLogic = (actualStatusArray, gridSize) => {
	const newStatusArray = actualStatusArray.map((element, index) => {
		return evaluateCell(actualStatusArray, gridSize, index);
	});
	return newStatusArray;
};


const evaluateCell = (actualStatusArray, gridSize, position) => {
	const cellStatus = actualStatusArray[position];
	let mySet = new Set([2, 3]); //TODO: Change this variable name for a better one.
	
	const neighboursAlive = checkCellNeighboursStatus(actualStatusArray, position, gridSize);

	const passToNextGeneration = cellStatus && mySet.has(neighboursAlive);
	const newCellBorn = !cellStatus && neighboursAlive == 3;
	
	return passToNextGeneration || newCellBorn;
};

const checkCellNeighboursStatus = (actualArray, position, gridSize) => {
	let liveNeighbours = 0;

	const row = Math.trunc(position / gridSize);
	const col = Math.trunc(position - (row * gridSize)) ;
	
	const oneUp = row - 1 > -1;
	const oneDown = row + 1 <  gridSize;
	const oneLeft = col - 1 > -1;
	const oneRight = col + 1 <  gridSize;

	liveNeighbours = oneUp && oneLeft && actualArray[(position - gridSize - 1)] ? liveNeighbours + 1 : liveNeighbours;
	liveNeighbours = oneUp && actualArray[(position - gridSize)] ? liveNeighbours + 1 : liveNeighbours;
	liveNeighbours = oneUp && oneRight && actualArray[(position - gridSize + 1)] ? liveNeighbours + 1 : liveNeighbours;

	liveNeighbours = oneLeft && actualArray[(position - 1)] ? liveNeighbours + 1 : liveNeighbours;
	liveNeighbours = oneRight && actualArray[(position + 1)] ? liveNeighbours + 1 : liveNeighbours;

	liveNeighbours = oneDown && oneLeft && actualArray[(position + gridSize - 1)] ? liveNeighbours + 1 : liveNeighbours;	
	liveNeighbours = oneDown && actualArray[(position + gridSize)] ? liveNeighbours + 1 : liveNeighbours;
	liveNeighbours = oneDown && oneRight && actualArray[(position + gridSize + 1)] ? liveNeighbours + 1 : liveNeighbours;

	return liveNeighbours;
};

export { gameLogic };

/*
// Recursive method approach
const gameLogic = (actualStatusArray, gridSize, position = actualStatusArray.length - 1) => {
	let newStatusArray = [];
	if (position != 0) {
		newStatusArray = newStatusArray.concat(gameLogic(actualStatusArray, position - 1, gridSize));
		newStatusArray.push(evaluateCell(actualStatusArray, position, gridSize));
		return newStatusArray;
	} else {
		newStatusArray.push(evaluateCell(actualStatusArray, position, gridSize));
		return newStatusArray;
	}
};

console.log(gameLogic(data, 3,  data.length - 1));
*/