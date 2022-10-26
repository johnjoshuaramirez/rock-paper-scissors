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

function game(playerSelection) {
	let roundNumber = 1;
	let playerScore = 0;
	let computerScore = 0;

	printWithDelay();

	function printWithDelay() {
		setTimeout(() => {
			const round = playRound(playerSelection, getComputerChoice());

			if (round.includes("Win!")) {
				playerScore++;
				console.log(round);
				console.log(
					`Round ${roundNumber} player score is ${playerScore} vs computer score is ${computerScore}`
				);
			} else if (round.includes("Lose")) {
				computerScore++;
				console.log(round);
				console.log(
					`Round ${roundNumber} player score is ${playerScore} vs computer score is ${computerScore}`
				);
			} else if (round.includes("Tie")) {
				console.log("It's a Tie");
				console.log(
					`Round ${roundNumber} player score is ${playerScore} vs computer score is ${computerScore}`
				);
			}

			roundNumber++;

			if (5 >= roundNumber) {
				printWithDelay();
			}
		}, 2000);
	}

   setTimeout(() => {
      if (playerScore > computerScore) {
         console.log("Player Wins!");
      } else if (playerScore < computerScore) {
         console.log("Computer Wins!");
      } else {
         console.log("It's a Tie!");
      }
   }, 10500);
}

const playerSelection = prompt("Please Enter Rock, Paper or Scissors");
game(playerSelection);

// function that asks for your choice five times
// display the current result
// display the overall winner
