export const Menu = (function() {
	let playerNames = [];
	let timesFormSubmited = 0;
	let callback;

	let menu = document.querySelector(".menu");
	let nameForm = document.getElementById("name-form");
	let nameInput = document.getElementById("name-input");

	const initialize = (cb) => {
		nameForm.addEventListener('submit', handleNameInput);
		callback = cb;
	}

	const hideMenu = () => {
		menu.style.display = 'none';
	}

	const handleNameInput = (event) => {
		event.preventDefault();

		playerNames.push(nameInput.value);
		nameInput.value = '';

		timesFormSubmited++;

		if (timesFormSubmited == 1) {
			nameInput.placeholder = "Enter Player 2 Name";
		} else if (timesFormSubmited == 2) {
			hideMenu();
			callback(playerNames);
		}
	}

	return { initialize };
})();