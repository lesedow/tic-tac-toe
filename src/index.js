import { GameModule } from './game.js';

console.log(GameModule.placeCurrentPlayerMark(0));
console.log(GameModule.placeCurrentPlayerMark(3));
console.log(GameModule.placeCurrentPlayerMark(1));
console.log(GameModule.placeCurrentPlayerMark(4));
console.log(GameModule.placeCurrentPlayerMark(8));
console.log(GameModule.placeCurrentPlayerMark(5));

console.log(GameModule.hasGameEnded())
console.log(GameModule.getStatus())