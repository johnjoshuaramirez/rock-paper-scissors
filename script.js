const playerChoice = document.querySelector(".player-choice span");
const computerChoice = document.querySelector(".computer-choice span");
const h1 = document.querySelector(".container h1");
const p = document.querySelector(".container p:nth-child(2)");
const playerScoreCount = document.querySelector(".player-score span");
const computerScoreCount = document.querySelector(".computer-score span");

let roundNumber = 0;
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

   const PaperxRock = "Paper beats Rock"
   const RockxScissors = "Rock beats Scissors"
   const ScissorsxPaper = "Scissors beats Paper"

	switch (player) {
		case "Rock":
			playerChoice.innerText = rock;

			switch (computer) {
				case "Paper":
               displayResult(paper, lose, PaperxRock);
					computerScore++;
					roundNumber++;
					computerScoreCount.innerText = computerScore;
					break;

				case "Scissors":
               displayResult(scissors, win, RockxScissors);
					playerScore++;
					roundNumber++;
					playerScoreCount.innerText = playerScore;
					break;

				default:
               displayResult(rock, tie, tieMessage);
					roundNumber++;
			}

			break;

		case "Paper":
			playerChoice.innerText = paper;

			switch (computer) {
				case "Rock":
               displayResult(rock, win, PaperxRock);
					playerScore++;
					roundNumber++;
					playerScoreCount.innerText = playerScore;
					break;

				case "Scissors":
               displayResult(scissors, lose, ScissorsxPaper);
					computerScore++;
					roundNumber++;
					computerScoreCount.innerText = computerScore;
					break;

				default:
               displayResult(paper, tie, tieMessage);
					roundNumber++;
			}

			break;

		case "Scissors":
			playerChoice.innerText = scissors;

			switch (computer) {
				case "Paper":
               displayResult(paper, win, ScissorsxPaper);
					playerScore++;
					roundNumber++;
					playerScoreCount.innerText = playerScore;
					break;

				case "Rock":
               displayResult(rock, lose, RockxScissors);
					computerScore++;
					roundNumber++;
					computerScoreCount.innerText = computerScore;
					break;

				default:
               displayResult(scissors, tie, tieMessage);
					roundNumber++;
			}
	}

	removeEventListener();
	colorizer();
	animation();
}

const overlay = document.querySelector(".overlay");
const result = document.querySelector(".modal h1");
const modalPlayerScore = document.querySelector(".modal-player-score span");
const modalComputerScore = document.querySelector(".modal-computer-score span");

function showModal() {
	if (roundNumber === 5) {
		overlay.classList.add("active");
		modalPlayerScore.innerText = playerScore;
		modalComputerScore.innerText = computerScore;
		if (playerScore > computerScore) {
			result.innerText = "Player Wins!";
		} else if (playerScore < computerScore) {
			result.innerText = "Computer Wins!";
		} else {
			result.innerText = "It's a Tie!";
		}
	}
}

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

function colorizer() {
	const round = [one, two, three, four, five];

	for (let i = 0; i < roundNumber; i++) {
		round[i].style.backgroundColor = "white";
	}
}

function incrementScoreBar() {
   for (let i = 0; i < computerScore; i++) {
		computerScoreBar[i].style.backgroundColor = "white";
	}

   for (let i = 0; i < playerScore; i++) {
		playerScoreBar[i].style.backgroundColor = "white";
	}
}

function reset() {
	playerChoice.innerText = "";
	computerChoice.innerText = "";
	h1.innerText = "Pick Your Choice";
	p.innerText = "Best of 7 Game!";
	playerScoreCount.innerText = 0;
	computerScoreCount.innerText = 0;
	overlay.classList.remove("active");

	one.style.backgroundColor = "black";
	two.style.backgroundColor = "black";
	three.style.backgroundColor = "black";
	four.style.backgroundColor = "black";
	five.style.backgroundColor = "black";

	roundNumber = 0;
	playerScore = 0;
	computerScore = 0;

	buttons.forEach(button => {
		button.addEventListener("click", playRound);
	});
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
	button.addEventListener("click", playRound);
});

function removeEventListener() {
	if (roundNumber === 5) {
		buttons.forEach(button => {
			button.removeEventListener("click", playRound);
			setTimeout(() => showModal(), 1200);
		});
	}
}

function animation() {
	playerChoice.classList.remove("active");
	computerChoice.classList.remove("active");
	setTimeout(() => {
		playerChoice.classList.add("active");
		computerChoice.classList.add("active");
	}, 100);
}

const modalButton = document.querySelector(".modal-button");
modalButton.addEventListener("click", reset);

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

function displayResult(hand, outcome, explain) {
	computerChoice.innerText = hand;
	h1.innerText = outcome;
	p.innerText = explain;
}
