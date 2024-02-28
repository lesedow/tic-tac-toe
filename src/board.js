export const GameBoard = (function() {
	let board = Array(9).fill("");
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	const positionValid = (position) => {
		return board[position] == "";
	}

	const clearBoard = () => board = Array(9).fill("");

	const getMarkAtPosition = (position) => board[position];

	const placeMark = (position, mark) => board[position] = mark;

	const isBoardFull = () => {
		return board.every((position) => position !== '');
	}

	const checkCondition = (condition) => {
		return condition.every(entry => board[entry] !== '' && board[entry] === board[condition[0]]);
	}

	const checkWin = () => {
		return winConditions.some(checkCondition);
	}

	return {
		placeMark,
		isBoardFull,
		getMarkAtPosition,
		positionValid,
		checkWin,
		clearBoard
	};  
})();