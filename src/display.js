import { GameModule } from './game.js';

export const DisplayController = (function () {
	let gameElement = document.querySelector(".game");
	let boardElement = document.querySelector('.board');
	let allCells = document.querySelectorAll(".cell");
	let currentPlayerTurnElement = document.getElementById('current-player-turn');

	const createMark = (mark) => {
		let newMark = document.createElement('div');
		newMark.classList.add(`mark-${mark}`);

		return newMark;
	}

	const showBoard = () => {
		gameElement.classList.add("show");
	}

	const clearBoard = () => {
		allCells.forEach(cell => {
			cell.innerHTML = '';
		});
	}

	const restartGame = (event) => {
		GameModule.restart();
		clearBoard();
		displayCurrentPlayerTurn();
		gameElement.removeChild(event.target);
	}

	const createRestartButton = () => {
		let restartButton = document.createElement("div");
		restartButton.textContent = "Restart";
		restartButton.classList.add('restart-button');
		gameElement.appendChild(restartButton);
	
		restartButton.addEventListener('click', restartGame);
	}

	const initialize = (firstName, secondName) => {
		GameModule.initializeGame(firstName, secondName);
		bindEvents();
		showBoard();
		displayCurrentPlayerTurn()
	}

	const bindEvents = () => {
		boardElement.addEventListener('click', handleCellClick);
	}

	const displayCurrentPlayerTurn = () => {
		let currentPlayer = GameModule.getCurrentPlayer().getName();
		currentPlayerTurnElement.textContent = `${currentPlayer}'s turn`;
	}	

	const displayGameVerdict = () => {
		currentPlayerTurnElement.textContent = GameModule.getStatus();
	}

	const handleCellClick = (event) => {
		let position = event.target.getAttribute('data-position');
		if (!position) return;

		let updatedPosition = GameModule.placeCurrentPlayerMark(position);
		if (updatedPosition) {
			event.target.appendChild(createMark(updatedPosition));
			displayCurrentPlayerTurn();

			if (GameModule.hasGameEnded()) {
				displayGameVerdict();
				createRestartButton();
			}
		}	
	}

	return { initialize };

})();