import { GameBoard } from './board.js';
import { Player } from './player.js';

export const GameModule = (function() {
	let firstPlayer;
	let secondPlayer;

	let firstPlayerTurn = true;

	let gameEnded = false;
	let status = '';

	const hasGameEnded = () => gameEnded;
	const getStatus = () => status;

	const checkForGameOver = () => {
		if (GameBoard.checkWin())
		{
			status = `${getCurrentPlayer().getName()} has won!`;
			gameEnded = true;
		} else if (GameBoard.isBoardFull())
		{
			status = "It is a draw!";
			gameEnded = true;
		}
	}

	const changeTurn = () => {
		firstPlayerTurn = !firstPlayerTurn;
	}

	const placeCurrentPlayerMark = (position) => {
		let currentPlayer = getCurrentPlayer();
		if (GameBoard.positionValid(position))
		{
			GameBoard.placeMark(position, currentPlayer.getMark());
			checkForGameOver();
			changeTurn();
		}

		return GameBoard.getBoard();
	}

	const initializeGame = (player1 = "Player 1", player2 = "Player 2") => {
		firstPlayer = Player(player1, 'x');
		secondPlayer = Player(player2, 'o');
	};

	const getCurrentPlayer = () => firstPlayerTurn ? firstPlayer : secondPlayer; 

	initializeGame();

	return {
		placeCurrentPlayerMark,
		hasGameEnded,
		getStatus
	}
})();