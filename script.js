function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];
	const i = Math.floor(Math.random() * 3);
	return choice[i];
}

function capitalize(word) {
	let newWord = "";
	for (let i = 0; i < word.length; i++) {
		if (i === 0) {
			newWord += word[i].toUpperCase();
		} else {
			newWord += word[i].toLowerCase();
		}
	}
	return newWord;
}

function playRound(playerSelection, computerSelection) {
	const player = capitalize(playerSelection);
	const computer = computerSelection;

	console.log(player);
	console.log(computer);

	if (player === "Rock") {
		if (computer === "Paper") {
			return "You Lose! Paper beats Rock";
		} else if (computer === "Scissors") {
			return "You Win! Rock beats Scissors";
		} else {
			return "It's a Tie!";
		}
	}

	if (player === "Paper") {
		if (computer === "Rock") {
			return "You Win! Paper beats Rock";
		} else if (computer === "Scissors") {
			return "You Lose! Scissors beats Paper";
		} else {
			return "It's a Tie!";
		}
	}

	if (player === "Scissors") {
		if (computer === "Paper") {
			return "You Win! Scissors beats Paper";
		} else if (computer === "Rock") {
			return "You Lose! Rock beats Scissors";
		} else {
			return "It's a Tie!";
		}
	}
}

const playerSelection = "rock";

function game(playerSelection) {
	for (let i = 1; i <= 5; i++) {
		const round = playRound(playerSelection, getComputerChoice());
      console.log(round);
	}
}

game(playerSelection);
