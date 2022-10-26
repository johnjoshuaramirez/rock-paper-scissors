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

	console.log(`Player choose ${player}`);
	console.log(`Computer choose ${computer}`);

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

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

function game(playerSelection) {
	const round = playRound(playerSelection, getComputerChoice());

	if (round.includes("Win!")) {
		playerScore++;
      roundNumber++;
		console.log(round);
		console.log(
			`Round ${roundNumber} player score is ${playerScore} vs computer score is ${computerScore}`
		);
	} else if (round.includes("Lose")) {
		computerScore++;
      roundNumber++;
		console.log(round);
		console.log(
			`Round ${roundNumber} player score is ${playerScore} vs computer score is ${computerScore}`
		);
	} else if (round.includes("Tie")) {
      roundNumber++;
		console.log("It's a Tie");
		console.log(
			`Round ${roundNumber} player score is ${playerScore} vs computer score is ${computerScore}`
		);
	}
}

let round = 1;

function recursion() {
	if (round > 5) {
		if (playerScore > computerScore) {
			console.log("Player Wins!");
		} else if (playerScore < computerScore) {
			console.log("Computer Wins!");
		} else {
			console.log("It's a Tie!");
		}
		return;
	} else {
		const playerSelection = prompt("Please Enter Rock, Paper or Scissors");
		game(playerSelection);
		round++;
      setTimeout(() => {
         recursion();
      }, 1200)
	}
}

recursion();

// function that prompts for your choice five times
// tracks the score
// display the current result
// display the overall winner
