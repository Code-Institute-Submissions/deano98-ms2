document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("pick");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            alert(`You clicked ${playerChoice}`);
            versus(playerChoice);
        })
    }
})

/** Once the player has selected their move, all other selections 
 * are removed to leave the players selection and a blank one for the computer */
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

    countdown(playerChoice);
}

/** Starts a 3 second countdown timer, once it reaches 0 the computers selection
 * is randomly picked and the winner is calculated
 */
function countdown(playerChoice) {
    let countdownTimer = document.getElementsByClassName("choose-or-play")[0];  
    let timer = 3; 
    countdownTimer.innerHTML = timer;

    setInterval(updateTimer, 1000);

    function updateTimer() {
        timer--;
        countdownTimer.innerHTML = timer;
        if (timer === 0) {
            runGame(playerChoice);
        }
        }
    }

/** Randomly selects the computers selection, then runs the
 * correct function based on the players selection
 */
function runGame(playerChoice) {

    let num1 = Math.floor(Math.random() * 5) + 1;
    console.log(num1);

    let computerChoice = "";

    let computerAction = document.getElementsByClassName("versus-two")[0];
    computerAction.classList.remove("versus-two");

    if (num1 === 1) {
        computerChoice = "computerRock";        
        computerAction.classList.add("rock-two");
    } else if (num1 === 2) {
        computerChoice = "computerPaper";
        computerAction.classList.add("paper-two");
    } else if (num1 === 3) {
        computerChoice = "computerScissors";
        computerAction.classList.add("rock-two");
    } else if (num1 === 4) {
        computerChoice = "computerLizard";
        computerAction.classList.add("lizard-two");
    } else if (num1 === 5) {
        computerChoice = "computerSpock";
        computerAction.classList.add("spock-two");

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

/** Checks the outcome of the game when the player has selected Rock */
function checkWinnerRock(computerChoice) {
    if (computerChoice === "computerLizard" || computerChoice === "computerScissors") {
        console.log(`You win! Rock beats ${computerChoice}`);
        incrementScorePlayer();
    } else if (computerChoice === "computerRock") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Rock loses to ${computerChoice}`);
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the player has selected Paper */
function checkWinnerPaper(computerChoice) {
    if (computerChoice === "computerRock" || computerChoice === "computerSpock") {
        console.log(`You win! Paper beats ${computerChoice}`);
        incrementScorePlayer();
    } else if (computerChoice === "computerPaper") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Paper loses to ${computerChoice}`);
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the played has selected Scissors */
function checkWinnerScissors(computerChoice) {
    if (computerChoice === "computerPaper" || computerChoice === "computerLizard") {
        console.log(`You win! Scissors beats ${computerChoice}`);
        incrementScorePlayer();
    } else if (computerChoice === "computerScissors") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Scissors loses to ${computerChoice}`);
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the player has selected Lizard */
function checkWinnerLizard(computerChoice) {
    if (computerChoice === "computerPaper" || computerChoice === "computerSpock") {
        console.log(`You win! Lizard beats ${computerChoice}`);
        incrementScorePlayer();
    } else if (computerChoice === "computerLizard") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Lizard loses to ${computerChoice}`);
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the player has selected Spock */
function checkWinnerSpock(computerChoice) {
    if (computerChoice === "computerRock" || computerChoice === "computerScissors") {
        console.log(`You win! Spock beats ${computerChoice}`);
        incrementScorePlayer();
    } else if (computerChoice === "computerSpock") {
        console.log("It's a Draw!");
    } else {
        console.log(`You lose! Spock loses to ${computerChoice}`);
        incrementScoreComputer();
    }
}

function incrementScorePlayer() {
    let bestOf = document.getElementsByTagName("radio");
    let oldScore = parseInt(document.getElementById("player-one-score").innerText);

    document.getElementById("player-one-score").innerText = ++oldScore;
    console.log(oldScore);
    
}

function incrementScoreComputer() {
    let bestOf = document.getElementsByTagName("radio");
    let oldScore = parseInt(document.getElementById("player-two-score").innerText);

    document.getElementById("player-two-score").innerText = ++oldScore;
    console.log(oldScore);

}
