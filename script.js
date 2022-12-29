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

	switch (player) {
		case "Rock":
			playerChoice.innerText = "✊";

			switch (computer) {
				case "Paper":
					computerChoice.innerText = "✋";
					h1.innerText = "You Lose!";
					p.innerText = "Paper beats Rock";
					computerScore++;
					roundNumber++;
					computerScoreCount.innerText = computerScore;
					break;

				case "Scissors":
					computerChoice.innerText = "✌️";
					h1.innerText = "You Win!";
					p.innerText = "Rock beats Scissors";
					playerScore++;
					roundNumber++;
					playerScoreCount.innerText = playerScore;
					break;

				case "Rock":
					computerChoice.innerText = "✊";
					h1.innerText = "It's a Tie!";
					p.innerText = `${player} ties with ${computer}`;
					roundNumber++;
               break
			}
	}

	// if (player === "Rock") {
	// 	playerChoice.innerText = "✊";
	// 	if (computer === "Paper") {
	// 		computerChoice.innerText = "✋";
	// 		h1.innerText = "You Lose!";
	// 		p.innerText = "Paper beats Rock";
	// 		computerScore++;
	// 		roundNumber++;
	// 		computerScoreCount.innerText = computerScore;
	// 	} else if (computer === "Scissors") {
	// 		computerChoice.innerText = "✌️";
	// 		h1.innerText = "You Win!";
	// 		p.innerText = "Rock beats Scissors";
	// 		playerScore++;
	// 		roundNumber++;
	// 		playerScoreCount.innerText = playerScore;
	// 	} else {
	// 		computerChoice.innerText = "✊";
	// 		h1.innerText = "It's a Tie!";
	// 		p.innerText = `${player} ties with ${computer}`;
	// 		roundNumber++;
	// 	}
	// }

	if (player === "Paper") {
		playerChoice.innerText = "✋";
		if (computer === "Rock") {
			computerChoice.innerText = "✊";
			h1.innerText = "You Win!";
			p.innerText = "Paper beats Rock";
			playerScore++;
			roundNumber++;
			playerScoreCount.innerText = playerScore;
		} else if (computer === "Scissors") {
			computerChoice.innerText = "✌️";
			h1.innerText = "You Lose!";
			p.innerText = "Scissors beats Paper";
			computerScore++;
			roundNumber++;
			computerScoreCount.innerText = computerScore;
		} else {
			computerChoice.innerText = "✋";
			h1.innerText = "It's a Tie!";
			p.innerText = `${player} ties with ${computer}`;
			roundNumber++;
		}
	}

	if (player === "Scissors") {
		playerChoice.innerText = "✌️";
		if (computer === "Paper") {
			computerChoice.innerText = "✋";
			h1.innerText = "You Win!";
			p.innerText = "Scissors beats Paper";
			playerScore++;
			roundNumber++;
			playerScoreCount.innerText = playerScore;
		} else if (computer === "Rock") {
			computerChoice.innerText = "✊";
			h1.innerText = "You Lose!";
			p.innerText = "Rock beats Scissors";
			computerScore++;
			roundNumber++;
			computerScoreCount.innerText = computerScore;
		} else {
			computerChoice.innerText = "✌️";
			h1.innerText = "It's a Tie!";
			p.innerText = `${player} ties with ${computer}`;
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
