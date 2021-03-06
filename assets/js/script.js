document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("pick");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            versus(playerChoice);
        });
    }
});

/** Function to open the modal to display the rules, called when the rules button is clicked */
function rules() {
    let rulesPopup = document.getElementById("rules-popup");
    let closeRules = document.getElementsByClassName("close-rules")[0];

    rulesPopup.style.display = "block";

    closeRules.onclick = function () {
        rulesPopup.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == rulesPopup) {
            rulesPopup.style.display = "none";
        }
    };
}


/** Once the player has selected their move, all other selections 
 * are removed to leave the players selection and a blank one for the computer */
function versus(playerChoice) {
    let picks = document.getElementsByClassName("pick");

    document.getElementById("best-of-one").disabled = true;
    document.getElementById("best-of-three").disabled = true;
    document.getElementById("best-of-five").disabled = true;

    for (let i = picks.length - 1; i >= 0; i--) {
        picks[i].remove();
    }

    let playerAction = document.createElement("div");
    let computerAction = document.createElement("div");

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
    countdownTimer.classList.add("countdown");
    countdownTimer.innerHTML = timer;

    let intervalTimer = setInterval(updateTimer, 1000);

    function updateTimer() {
        timer--;
        countdownTimer.innerHTML = timer;
        if (timer === 0) {
            clearInterval(intervalTimer);
            countdownTimer.classList.remove("countdown");
            runGame(playerChoice);
        }
    }
}

/** Randomly selects the computers selection, then runs the
 * correct function based on the players selection
 */
function runGame(playerChoice) {

    let num1 = Math.floor(Math.random() * 5) + 1;

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
        computerAction.classList.add("scissors-two");
    } else if (num1 === 4) {
        computerChoice = "computerLizard";
        computerAction.classList.add("lizard-two");
    } else if (num1 === 5) {
        computerChoice = "computerSpock";
        computerAction.classList.add("spock-two");

    }
    pickAction(playerChoice, computerChoice);
}

/** Function to check the players choice, then call the correct
 * function to calculate the winner */ 
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
    let result = document.getElementsByClassName("result")[0];
    if (computerChoice === "computerLizard") {
        result.innerHTML = "Rock Crushes Lizard!";
        incrementScorePlayer();
    } else if (computerChoice === "computerScissors") {
        result.innerHTML = "Rock Crushes Scissors!";
        incrementScorePlayer();
    } else if (computerChoice === "computerRock") {
        result.innerHTML = "It's A Draw!";
        playAgain();
    } else if (computerChoice === "computerSpock") {
        result.innerHTML = "Spock Vaporises Rock!";
        incrementScoreComputer();
    } else {
        result.innerHTML = "Paper Covers Rock!";
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the player has selected Paper */
function checkWinnerPaper(computerChoice) {
    let result = document.getElementsByClassName("result")[0];
    if (computerChoice === "computerRock") {
        result.innerHTML = "Paper Covers Rock!";
        incrementScorePlayer();
    } else if (computerChoice === "computerSpock") {
        result.innerHTML = "Paper Disproves Spock!";
        incrementScorePlayer();
    } else if (computerChoice === "computerPaper") {
        result.innerHTML = "It's A Draw!";
        playAgain();
    } else if (computerChoice === "computerScissors") {
        result.innerHTML = "Scissors Cut Paper!";
        incrementScoreComputer();
    } else {
        result.innerHTML = "Lizard Eats Paper!";
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the played has selected Scissors */
function checkWinnerScissors(computerChoice) {
    let result = document.getElementsByClassName("result")[0];
    if (computerChoice === "computerPaper") {
        result.innerHTML = "Scissors Cut Paper!";
        incrementScorePlayer();
    } else if (computerChoice === "computerLizard") {
        result.innerHTML = "Scissors Decapitates Lizard!";
        incrementScorePlayer();
    } else if (computerChoice === "computerScissors") {
        result.innerHTML = "It's A Draw!";
        playAgain();
    } else if (computerChoice === "computerSpock") {
        result.innerHTML = "Spock Smashes Scissors!";
        incrementScoreComputer();
    } else {
        result.innerHTML = "Rock Crushes Scissors!";
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the player has selected Lizard */
function checkWinnerLizard(computerChoice) {
    let result = document.getElementsByClassName("result")[0];
    if (computerChoice === "computerPaper") {
        result.innerHTML = "Lizard Eats Paper!";
        incrementScorePlayer();
    } else if (computerChoice === "computerSpock") {
        result.innerHTML = "Lizard Poisons Spock!";
        incrementScorePlayer();
    } else if (computerChoice === "computerLizard") {
        result.innerHTML = "It's A Draw!";
        playAgain();
    } else if (computerChoice === "computerScissors") {
        result.innerHTML = "Scissors Decapitates Lizard!";
        incrementScoreComputer();
    } else {
        result.innerHTML = "Rock Crushes Lizard!";
        incrementScoreComputer();
    }
}

/** Checks the outcome of the game when the player has selected Spock */
function checkWinnerSpock(computerChoice) {
    let result = document.getElementsByClassName("result")[0];
    if (computerChoice === "computerRock") {
        result.innerHTML = "Spock Vaporises Rock!";
        incrementScorePlayer();
    } else if (computerChoice === "computerScissors") {
        result.innerHTML = "Spock Smashes Scissors!";
        incrementScorePlayer();
    } else if (computerChoice === "computerSpock") {
        result.innerHTML = "It's A Draw!";
        playAgain();
    } else if (computerChoice === "computerLizard") {
        result.innerHTML = "Lizard Poisons Spock!";
        incrementScoreComputer();
    } else {
        result.innerHTML = "Paper Disproves Spock!";
        incrementScoreComputer();
    }
}

/** Increments the players score when a round is won, then checks if the score
 * is high enough to win the game. If the score is high enough - call the win function, 
 * otherwise call the play again function
 */
function incrementScorePlayer() {
    let bestOf = document.getElementsByName("best_of");
    let oldScore = parseInt(document.getElementById("player-one-score").innerText);

    document.getElementById("player-one-score").innerText = ++oldScore;

    for (let i = 0; i < bestOf.length; i++) {
        if (bestOf[i].checked && parseInt(bestOf[i].value) === oldScore) {
            youWin();
        } else {
            playAgain();
        }
    }
}

/** Increments the computers score when a round is lost, then checks if the score
 * is high enough to lose the game. If the score is high enough - call the lose function, 
 * otherwise call the play again function
 */
function incrementScoreComputer() {
    let bestOf = document.getElementsByName("best_of");
    let oldScore = parseInt(document.getElementById("player-two-score").innerText);

    document.getElementById("player-two-score").innerText = ++oldScore;

    for (let i = 0; i < bestOf.length; i++) {
        if (bestOf[i].checked && parseInt(bestOf[i].value) === oldScore) {
            youLose();
        } else {
            playAgain();
        }
    }
}

/** If the score has not yet met the requirement to win the game, insert a button
 * to the DOM to reset the round, then call the clear board function.
 */
function playAgain() {
    let playButton = document.createElement("button");
    playButton.innerHTML = "Next Round";
    let playElement = document.getElementsByClassName("choose-or-play")[0];

    playElement.innerHTML = "";
    playButton.classList.add("small-buttons");
    playElement.appendChild(playButton);

    playButton.addEventListener("click", clearBoard);
}

/** Clears the board, then calls the reset board function */
function clearBoard() {
    let resultClear = document.getElementsByClassName("result")[0];
    resultClear.innerHTML = "";

    let removePlayButton = document.getElementsByClassName("choose-or-play")[0];
    removePlayButton.innerHTML = "<h2>Choose Your Move</h2>";

    let choices = document.getElementById("choices");
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }
    resetBoard();
}

/** Resets the board so it is ready for the next round  */
function resetBoard() {
    let choices = document.getElementById("choices");

    let rock = document.createElement("button");
    let paper = document.createElement("button");
    let scissors = document.createElement("button");
    let lizard = document.createElement("button");
    let spock = document.createElement("button");

    rock.classList.add("pick", "rock");
    paper.classList.add("pick", "paper");
    scissors.classList.add("pick", "scissors");
    lizard.classList.add("pick", "lizard");
    spock.classList.add("pick", "spock");

    rock.setAttribute("data-type", "rock");
    paper.setAttribute("data-type", "paper");
    scissors.setAttribute("data-type", "scissors");
    lizard.setAttribute("data-type", "lizard");
    spock.setAttribute("data-type", "spock");

    choices.appendChild(rock);
    choices.appendChild(paper);
    choices.appendChild(scissors);
    choices.appendChild(lizard);
    choices.appendChild(spock);

    beginNextGame();
}

/** Adds the event listeners to the selection buttons again so the 
 * player can choose their action
 */
function beginNextGame() {
    let buttons = document.getElementsByClassName("pick");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            versus(playerChoice);
        });
    }

}

/** If the score conditions are met to win the game, open a modal
 * to display that you are the winner, then call the clear board function
 * when the modal is closed
 */
function youWin() {

    let modal = document.getElementById("you-win");
    let span = document.getElementsByClassName("play-again")[0];

    modal.style.display = "block";

    span.onclick = function () {
        document.getElementById("player-one-score").innerHTML = 0;
        document.getElementById("player-two-score").innerHTML = 0;

        let removePlayButton = document.getElementsByClassName("choose-or-play")[0];
        removePlayButton.innerHTML = "<h2>Choose Your Move</h2>";

        modal.style.display = "none";

        document.getElementById("best-of-one").disabled = false;
        document.getElementById("best-of-three").disabled = false;
        document.getElementById("best-of-five").disabled = false;

        clearBoard();
    };
}

/** If the score conditions are met to lose the game, open a modal
 * to display that you are the loser, then call the clear board function
 * when the modal is closed
 */
function youLose() {

    let modal = document.getElementById("you-lose");
    let span = document.getElementsByClassName("play-again")[1];

    modal.style.display = "block";

    span.onclick = function () {
        document.getElementById("player-one-score").innerHTML = 0;
        document.getElementById("player-two-score").innerHTML = 0;

        let removePlayButton = document.getElementsByClassName("choose-or-play")[0];
        removePlayButton.innerHTML = "<h2>Choose Your Move</h2>";

        modal.style.display = "none";

        document.getElementById("best-of-one").disabled = false;
        document.getElementById("best-of-three").disabled = false;
        document.getElementById("best-of-five").disabled = false;
        clearBoard();
    };
}