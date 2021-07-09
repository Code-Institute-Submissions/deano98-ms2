document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            alert(`You clicked ${playerChoice}`);
            versus(playerChoice);
        })
    }
})

function versus(playerChoice) {
    let picks = document.getElementsByClassName("pick");
    
    for (i = picks.length - 1; i >= 0; i--) {
        picks[i].remove();
    }

    let playerAction = document.createElement("div");
    let computerAction = document.createElement("div");

    console.log(playerChoice);

    if (playerChoice === "rock") {
        playerAction.classList.add("rock-one");
    } else if (playerChoice === "paper") {
        playerAction.classList.add("paper-one");
    } else if (playerChoice === "scissors") {
        playerAction.classList.add("scissors-one");
    } else if (playerChoice === "lizard") {
        playerAction.classList.add("lizard-one");
    } else if (playerChoice === "spock") {
        playerAction.classList.add("spock-one");
    }

    computerAction.classList.add("versus-two");

    let choices = document.getElementById("choices");

    choices.appendChild(playerAction);
    choices.appendChild(computerAction);

}

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

function pickAction(playerChoice, computerChoice) {
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
    if (computerChoice === "computerLizard" || computerChoice === "computerScissors") {
        console.log(`You win! Rock beats ${computerChoice}`);
    } else if (computerChoice === "computerRock") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Rock loses to ${computerChoice}`);
    }
}

function checkWinnerPaper(computerChoice) {
    if (computerChoice === "computerRock" || computerChoice === "computerSpock") {
        console.log(`You win! Paper beats ${computerChoice}`);
    } else if (computerChoice === "computerPaper") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Paper loses to ${computerChoice}`);
    }
}

function checkWinnerScissors(computerChoice) {
    if (computerChoice === "computerPaper" || computerChoice === "computerLizard") {
        console.log(`You win! Scissors beats ${computerChoice}`);
    } else if (computerChoice === "computerScissors") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Scissors loses to ${computerChoice}`);
    }
}

function checkWinnerLizard(computerChoice) {
    if (computerChoice === "computerPaper" || computerChoice === "computerSpock") {
        console.log(`You win! Lizard beats ${computerChoice}`);
    } else if (computerChoice === "computerLizard") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Lizard loses to ${computerChoice}`);
    }
}

function checkWinnerSpock(computerChoice) {
    if (computerChoice === "computerRock" || computerChoice === "computerScissors") {
        console.log(`You win! Spock beats ${computerChoice}`);
    } else if (computerChoice === "computerSpock") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Spock loses to ${computerChoice}`);
    }
}

function incrementScore() {

}