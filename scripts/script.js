let game = (function() {
	let gameboard = [
		["X", "X", "O"],
		["O", "X", "X"],
		["X", "O", "O"]
	];
	let selected_mark = "X";
	let isGameOver = false;
			
	const displayGameboard = function() {
		let gameboard_cells = document.querySelectorAll("div.cell"),
			gameboard = this.gameboard;
				
		for (let i = 0; i < gameboard_cells.length; i++) {
			let cell_index = i,
				cell_element = gameboard_cells[cell_index],
				row = cell_index % 3,
				column = Math.floor(cell_index / 3),
				cell_contents = gameboard[column][row];
			
			cell_element.textContent = cell_contents;
		}
	}
	
	const addMark = function(cell_index) {
		let row = cell_index % 3,
			column = Math.floor(cell_index / 3);
			
		this.gameboard[column][row] = this.selected_mark;
	}
	
	const toggleSelectedMark = function() {
		this.selected_mark = this.selected_mark === "X" ? "O" : "X"
	}
	
	const checkIfGameOver = function() {	
		
		for (let i = 0; i < this.gameboard.length; i++) {
			let row_index = i,
				row = this.gameboard[row_index],
				areAllMarksEqual = true;
			
			for (let j = 1; j < row.length; j++) {
				let col_index = j,
					mark = row[col_index],
					first_mark = row[0];
				
				console.log(row_index, col_index, row, mark, first_mark, areAllMarksEqual);
					
				areAllMarksEqual = areAllMarksEqual && (mark === first_mark);
			}
			
			if (areAllMarksEqual) {
				return this.isGameOver = true;
			}
		}		
		
		for (let i = 0; i < this.gameboard[0].length; i++) {
			let col_index = i,
				areAllMarksEqual = true;
			
			for (let j = 1; j < this.gameboard.length; j++) {
				let row_index = j,
					mark = this.gameboard[row_index][col_index],
					first_mark = this.gameboard[0][col_index];
				
				console.log(col_index, row_index, mark, first_mark, areAllMarksEqual);
					
				areAllMarksEqual = areAllMarksEqual && (mark === first_mark);
			}
			
			if (areAllMarksEqual) {
				return this.isGameOver = true;
			}
		}	
		
		let areAllMarksEqual = true,
			reverseAreAllMarksEqual = true;
		
		for (let i = 1; i < this.gameboard[0].length; i++) {
			let col_index = i,
				row_index = i,
				mark = this.gameboard[row_index][col_index],
				first_mark = this.gameboard[0][0];
				
			let reverse_col_index = -i + 2,
				reverse_row_index = -i + 2,
				reverse_mark = this.gameboard[reverse_row_index][reverse_col_index],
				reverse_first_mark = this.gameboard[0][2];
				
			console.log(col_index, row_index, mark, first_mark, areAllMarksEqual);
					
			areAllMarksEqual = areAllMarksEqual && (mark === first_mark);
			reverseAreAllMarksEqual = reverseAreAllMarksEqual && (reverse_mark === reverse_first_mark);
		}
			
		if (areAllMarksEqual || reverseAreAllMarksEqual) {
			return this.isGameOver = true;
		}
	}
	
	return {
		gameboard, selected_mark, isGameOver,
		displayGameboard, addMark, toggleSelectedMark, checkIfGameOver
	};
})();