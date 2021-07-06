document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-type");
            alert(`You clicked ${playerChoice}`);
            runGame(playerChoice);
        })
    }
})

function runGame(playerChoice) {

    let num1 = Math.floor(Math.random() * 5) + 1;
    console.log(num1);

    let computerChoice = "";

    if (num1 === 1) {
        computerChoice = "computerRock";
    } else if (num1 === 2) {
        computerChoice = "computerPaper";
    } else if (num1 === 3) {
        computerChoice = "computerScissors";
    } else if (num1 === 4) {
        computerChoice = "computerLizard";
    } else if (num1 === 5) {
        computerChoice = "computerSpock";
    }
    pickAction(playerChoice, computerChoice)
}

function pickAction(computerChoice) {
    if (playerChoice === "rock") {
        checkWinnerRock(computerChoice);
    } else if (playerChoice === "paper") {
        checkWinnerPaper(computerChoice);
    } else if (playerChoice === "scissors") {
        checkWinnerScissors(computerChoice);
    } else if (playerChoice === "lizard") {
        checkWinnerLizard(computerChoice); 
    } else if (playerChoice === "spock") {
        checkWinnerSpock(computerChoice); 
    }
}

function checkWinnerRock(computerChoice) {
    if computerChoice
}

function checkWinnerPaper() {

}

function checkWinnerScissors() {

}

function checkWinnerLizard() {

}

function checkWinnerSpock() {

}

function incrementScore() {

}