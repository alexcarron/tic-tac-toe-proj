let game = (function() {
	let gameboard = [
		["", "", ""],
		["", "", ""],
		["", "", ""]
	];
	let selected_mark = "X",
		isGameOver = false;
			
	const displayGameboard = function() {
		let gameboard_cells = document.querySelectorAll("div.cell");				
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
			
		gameboard[column][row] = selected_mark;
		displayGameboard();
		checkIfGameOver();
	}
	
	const toggleSelectedMark = function() {
		selected_mark = selected_mark === "X" ? "O" : "X"
	}
	
	const checkIfGameOver = function() {	
		
		let hasSomeoneWon = false,
			first_mark;
		
		for (let i = 0; i < gameboard.length; i++) {
			let row_index = i,
				row = gameboard[row_index],
				areAllMarksEqual = true;
			
			for (let j = 1; j < row.length; j++) {
				let col_index = j,
					mark = row[col_index];
				
				first_mark = row[0];
				
				console.log({row_index, col_index, first_mark, mark})
									
				areAllMarksEqual = areAllMarksEqual && (mark === first_mark) && mark != "";
			}
			
			if (areAllMarksEqual) {
				console.log("They Won")
				return displayWinner(first_mark);
			}
		}		
		
		for (let i = 0; i < gameboard[0].length; i++) {
			let col_index = i,
				areAllMarksEqual = true;
			
			for (let j = 1; j < gameboard.length; j++) {
				let row_index = j,
					mark = gameboard[row_index][col_index];
				
				first_mark = gameboard[0][col_index];
				
				console.log({row_index, col_index, first_mark, mark})
				
				areAllMarksEqual = areAllMarksEqual && (mark === first_mark) && mark != "";
			}
			
			if (areAllMarksEqual) {
				console.log("They Won")
				return displayWinner(first_mark);
			}
		}	
		
		let areAllMarksEqual = true,
			reverseAreAllMarksEqual = true;
					
		for (let i = 1; i < gameboard[0].length; i++) {
			let col_index = i,
				row_index = i,
				mark = gameboard[row_index][col_index];
				first_mark = gameboard[0][0];
				
			let reverse_col_index = -i + 2,
				reverse_row_index = i,
				reverse_mark = gameboard[reverse_row_index][reverse_col_index],
				reverse_first_mark = gameboard[0][2];
				
			console.log({row_index, col_index, first_mark, mark})
			console.log({reverse_row_index, reverse_col_index, reverse_first_mark, reverse_mark})

					
			areAllMarksEqual = areAllMarksEqual && (mark === first_mark) && mark != "";
			reverseAreAllMarksEqual = reverseAreAllMarksEqual && (reverse_mark === reverse_first_mark) && reverse_mark != "";
			
			if (reverse_col_index === 0) {
				if (areAllMarksEqual) {
					console.log("They Won")
					
					return displayWinner(first_mark);
				}
				if (reverseAreAllMarksEqual) {
					console.log("They Won")
					
					return displayWinner(reverse_first_mark);
				}
			}
		}
			
		
	}
	
	const reset = function() {
		let congratulations_section = document.querySelector("section#congratulations_display");
		
		congratulations_section.style.display = "none";
		gameboard = [
			["", "", ""],
			["", "", ""],
			["", "", ""]
		]
		displayGameboard();
		isGameOver = false;
	}
	
	const displayWinner = function(winner) {
		isGameOver = true;
		
		let congratulations_section = document.querySelector("section#congratulations_display");
		let congratulations_element = document.querySelector("section#congratulations_display p");
		
		congratulations_section.style.display = "flex";
		congratulations_element.textContent = `${winner} Won!`
	}
	
	return {
		addMark, toggleSelectedMark, reset
	};
})();