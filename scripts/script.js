let Gameboard = (function() {
	let gameboard = 
		["X", "X", "O",
		"O", "X", "X",
		"X", "O", "O"]
	
	return {gameboard}
})();

function displayGameboard() {
	let gameboard_cells = document.querySelectorAll("div.cell");
	
	for (let cell_index in gameboard_cells) {
		let cell = gameboard_cells[cell_index]
		let cell_contents = Gameboard.gameboard[cell_index];
		
		cell.textContent = cell_contents
	}
}