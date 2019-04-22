let userscore = 0;
let compscore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");


function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
	userscore++;
	userScore_span.innerHTML = userscore;
	compScore_span.innerHTML = compscore;
	result_p.innerHTML = userChoice + " beats " + computerChoice + 
		", you win!";
}

function lose(userChoice, computerChoice) {
	compscore++;
	userScore_span.innerHTML = userscore;
	compScore_span.innerHTML = compscore;
	result_p.innerHTML = computerChoice + " beats " + userChoice + 
		", you lose!";
}

function draw(userChoice, computerChoice) {
	result_p.innerHTML = userChoice + " and " + computerChoice + 
		". Tie!";
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	if (userChoice === 'Rock') {
		if (computerChoice === 'Rock') {
			draw(userChoice, computerChoice);
		}
		if (computerChoice === 'Paper') {
			lose(userChoice, computerChoice);
		}
		if (computerChoice === 'Scissors') {
			win(userChoice, computerChoice);
		}
	}

	if (userChoice === 'Paper') {
		if (computerChoice === 'Rock') {
			win(userChoice, computerChoice);
		}
		if (computerChoice === 'Paper') {
			draw(userChoice, computerChoice);
		}
		if (computerChoice === 'Scissors'){
			lose(userChoice, computerChoice);
		}
	}

	if (userChoice === 'Scissors') {
		if (computerChoice === 'Rock') {
			lose(userChoice, computerChoice);
		}
		if (computerChoice === 'Paper') {
			win(userChoice, computerChoice);
		}
		if (computerChoice === 'Scissors') {
			draw(userChoice, computerChoice);
		}
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("Rock");
	})

	paper_div.addEventListener('click', function() {
		game("Paper");
	})

	scissors_div.addEventListener('click', function() {
		game("Scissors");
	})
}

main();
