const gameBoard = () => {

	let board = [
		['','',''],
		['','',''],
		['','','']
	]

	const generateBoard = (container) => {
		
		let elements = []

		for (let i = 0; i <= 8; i++) {
			const newElement = document.createElement('div')
			newElement.classList.add('b-elem')

			container.appendChild(newElement)
			elements.push({element: newElement, index: i})
		}

		return elements
	}

	const checkForWin = () => {
		const test = [board[0][0], board[0][1], board[0][2]]
		
		// Checking for win on the horizontal axis
		if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
			return true
		} else if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
			return true
		}

		if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
			return true
		} else if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
			return true
		}

		if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
			return true
		} else if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
			return true
		}

		// Checking for win on the vertical axis
		if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
			return true
		} else if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
			return true
		}

		if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
			return true
		} else if (board[0][1] == "O" && board[1][1] == "O" && board[2][2] == "O") {
			return true
		}

		if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
			return true
		} else if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
			return true
		}

		// Checking for win in diagonal
		if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
			return true
		} else if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
			return true
		}

		if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
			return true
		} else if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
			return true
		}

		return false
		
	}

	const updateBoard = (element, zeroTurn) => {
		if (!element.clicked) {
			element.clicked = true

			switch (element.index) {
				case 0:
					board[0][0] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[0][0]
					break;
				case 1:
					board[0][1] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[0][1]
					break
				case 2:
					board[0][2] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[0][2]
					break
				case 3:
					board[1][0] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[1][0]
					break
				case 4:
					board[1][1] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[1][1]
					break
				case 5:
					board[1][2] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[1][2]
					break
				case 6:
					board[2][0] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[2][0]
					break
				case 7:
					board[2][1] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[2][1]
					break
				case 8:
					board[2][2] = zeroTurn ? 'O' : 'X'
					element.element.textContent = board[2][2]
					break
			}
			
			return true
		}

		return false
	}

	return {generateBoard, updateBoard, checkForWin}

}

function main() {
	const board = document.querySelector('.board')
	const gBoard = gameBoard()
	let zeroTurn = false

	const elementsList = gBoard.generateBoard(board);

	elementsList.forEach(element => {
		element.element.addEventListener("click", () => {
			const status = gBoard.updateBoard(element, zeroTurn)
			if (status) {
				zeroTurn = !zeroTurn
			}

			if (gBoard.checkForWin()) {
				const allElements = board.querySelectorAll('.b-elem')
				allElements.forEach(element => {
					board.removeChild(element)
				}) 
				main()
			}	
		})
	})

}

main()