import { DisplayController } from './display.js';
import { Menu } from './menu.js';

const MainModule = (function() {
	Menu.initialize((names) => {
		let [firstPlayer, secondPlayer] = names;
		DisplayController.initialize(firstPlayer, secondPlayer);
	});
})();
