let game = (function() {
	let gameboard = 
		["X", "X", "O",
		"O", "X", "X",
		"X", "O", "O"];
		
	let selected_mark = "X"
			
	const displayGameboard = function() {
		let gameboard_cells = document.querySelectorAll("div.cell");
	
		for (let cell_index in gameboard_cells) {
			let cell = gameboard_cells[cell_index]
			let cell_contents = this.gameboard[cell_index];
			
			cell.textContent = cell_contents
		}
	}
	
	const addMark = function(location) {
		this.gameboard[location] = this.selected_mark;
	}
	
	const toggleSelectedMark = function() {
		this.selected_mark = this.selected_mark === "X" ? "O" : "X"
	}
	
	return {gameboard, selected_mark, displayGameboard, addMark, toggleSelectedMark};
})();