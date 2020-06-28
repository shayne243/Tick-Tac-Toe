let form = document.getElementById("player-form");
let submit = document.getElementById("submit-btn");
let playerOne = new Player();
let playerTwo = new Player();

function Game() {
    this.roundNo = 0;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
}
function Player() {
    this.name = "";
    this.score = 0;
}

function createPlayers(nameOne, nameTwo) {
    playerOne.name = nameOne;
    playerTwo.name = nameTwo;
}

function createGame() {
    let game = new Game();
    game.roundNo++;
    let inputList = form.getElementsByTagName("input");
    createPlayers(inputList[0].value, inputList[1].value);
}

function setSubmitBtn() {
    submit.addEventListener("click", createGame);
}

setSubmitBtn();