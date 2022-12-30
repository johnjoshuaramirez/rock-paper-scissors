const playerChoice = document.querySelector(".player-choice span");
const computerChoice = document.querySelector(".computer-choice span");
const h1 = document.querySelector(".container h1");
const p = document.querySelector(".container p:nth-child(2)");
const playerScoreBars = document.querySelectorAll(".playerScoreBar");
const computerScoreBars = document.querySelectorAll(".computerScoreBar");
const buttons = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
const result = document.querySelector(".modal h1");
const modalPlayerScore = document.querySelector(".modal-player-score span");
const modalComputerScore = document.querySelector(".modal-computer-score span");
const modalButton = document.querySelector(".modal-button");

const playerBar = Array.from(playerScoreBars);
const computerBar = Array.from(computerScoreBars);

modalButton.addEventListener("click", reset);
buttons.forEach(button => {
	button.addEventListener("click", playRound);
});

let playerScore = 0;
let computerScore = 0;

function playRound(e) {
	const player = e.target.dataset.id;
	const computer = getComputerChoice();

	const rock = "✊";
	const paper = "✋";
	const scissors = "✌️";

	const win = "You Win!";
	const lose = "You Lose!";
	const tie = "It's a Tie!";
	const tieMessage = `${player} ties with ${computer}`;

	const PaperxRock = "Paper beats Rock";
	const RockxScissors = "Rock beats Scissors";
	const ScissorsxPaper = "Scissors beats Paper";

	switch (player) {
		case "Rock":
			playerChoice.innerText = rock;

			switch (computer) {
				case "Paper":
					displayResult(paper, lose, PaperxRock);
					break;
				case "Scissors":
					displayResult(scissors, win, RockxScissors);
					break;
				default:
					displayResult(rock, tie, tieMessage);
			}

			break;

		case "Paper":
			playerChoice.innerText = paper;

			switch (computer) {
				case "Rock":
					displayResult(rock, win, PaperxRock);
					break;
				case "Scissors":
					displayResult(scissors, lose, ScissorsxPaper);
					break;
				default:
					displayResult(paper, tie, tieMessage);
			}

			break;

		case "Scissors":
			playerChoice.innerText = scissors;

			switch (computer) {
				case "Paper":
					displayResult(paper, win, ScissorsxPaper);
					break;
				case "Rock":
					displayResult(rock, lose, RockxScissors);
					break;
				default:
					displayResult(scissors, tie, tieMessage);
			}

      default:
	}

	animation();
	incrementScoreBar();
	showModal();
}

function animation() {
	playerChoice.classList.remove("active");
	computerChoice.classList.remove("active");

	setTimeout(() => {
		playerChoice.classList.add("active");
		computerChoice.classList.add("active");
	}, 100);
}

function incrementScoreBar() {
	for (let i = 0; i < computerScore; i++) {
		computerBar[i].style.backgroundColor = "white";
	}

	for (let i = 0; i < playerScore; i++) {
		playerBar[i].style.backgroundColor = "white";
	}
}

function showModal() {
	if (playerScore === 3 || computerScore === 3) {
		removeEventListener();

		setTimeout(() => {
			overlay.classList.add("active");

			modalPlayerScore.innerText = playerScore;
			modalComputerScore.innerText = computerScore;

			if (playerScore > computerScore) {
				result.innerText = "Player Wins!";
			}

			if (playerScore < computerScore) {
				result.innerText = "Computer Wins!";
			}
		}, 2000);
	}
}

function removeEventListener() {
	if (playerScore === 3 || computerScore === 3) {
		buttons.forEach(button => {
			button.removeEventListener("click", playRound);
			button.classList.remove("hover", "active", "pointer");
		});
	}
}

function reset() {
	playerChoice.innerText = "";
	computerChoice.innerText = "";

	h1.innerText = "Pick Your Choice";
	p.innerText = "First To Score 3 Wins!";

	overlay.classList.remove("active");

	playerBar.forEach(bar => {
		bar.style.backgroundColor = "black";
	});

	computerBar.forEach(bar => {
		bar.style.backgroundColor = "black";
	});

	playerScore = 0;
	computerScore = 0;

	buttons.forEach(button => {
		button.addEventListener("click", playRound);
		button.classList.add("hover", "active", "pointer");
	});
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

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];
	const i = Math.floor(Math.random() * 3);
   
	return choice[i];
}

function displayResult(choice, outcome, explain) {
	computerChoice.innerText = choice;
	h1.innerText = outcome;
	p.innerText = explain;

	if (outcome === "You Win!") {
		playerScore++;
	}

	if (outcome === "You Lose!") {
		computerScore++;
	}
}
