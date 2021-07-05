document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let actionChoice = this.getAttribute("data-type");
            alert(`You clicked ${actionChoice}`)
        })
    }
})

function runGame() {

}

function pickAction() {

}

function checkWinnerRock() {

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