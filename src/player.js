export const Player = (playerName, playerMark) => {
	let name = playerName;
	let mark = playerMark; 

	const getMark = () => mark;
	const getName = () => name;

	return { getName, getMark };
}