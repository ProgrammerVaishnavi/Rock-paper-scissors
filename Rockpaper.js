// Initialize scores
let userScore = 0;
let computerScore = 0;

// Select elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#Your-result");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

// Function to generate computer choice
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

// Function for draw condition
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

// Function to show winner
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Main game logic
const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } 
        else if (userChoice === "scissors") {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
};

// Add click event to each choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});