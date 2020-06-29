let form = document.getElementById("player-form");
let gameGrid = document.getElementById("game");
let playerOne = new Player();
let playerTwo = new Player();
let game = new Game();

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
    game.roundNo++;
    let inputList = form.getElementsByTagName("input");
    createPlayers(inputList[0].value, inputList[1].value);
    console.log(playerOne, playerTwo);
    form.setAttribute("style", "display:none");
    gameGrid.setAttribute("style", "opacity: 1;");
    form.reset();
}

function setupGrid() {
    let gridList = gameGrid.getElementsByTagName("h1");
    for (let i = 0; i < gridList.length; ++i) {
        gridList[i].dataset.boxNumber = i + 1;
        gridList[i].innerHTML = i + 1;
    }
}

setupGrid();