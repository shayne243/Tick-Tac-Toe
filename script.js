let form = document.getElementById("player-form");
let gameGrid = document.getElementById("game");
let gridList = gameGrid.getElementsByTagName("h1");
let inputList = form.getElementsByTagName("input");
let instruct = document.getElementById("instruct");
let player = ["X", 1];
let gridArray = [];
let gridWin = [[1,2,3], [4,5,6], [7,8,9],
                [1,4,7], [2,5,8], [3,6,9],
                [1,5,9], [3,5,7]];
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
}

function createPlayers(nameOne, nameTwo) {
    playerOne.name = nameOne;
    playerTwo.name = nameTwo;
}

function createGame() {
    if (inputList.length < 2) {
        alert("Please enter both player names!")
        return;
    }
    game.roundNo++;
    createPlayers(inputList[0].value, inputList[1].value);
    console.log(playerOne, playerTwo);
    form.setAttribute("style", "display:none");
    gameGrid.setAttribute("style", "opacity: 1;");
    instruct.setAttribute("style", "display: block");
    instruct.innerHTML = playerOne.name + " make your move...";
    form.reset();
}

function setupGrid() {
    for (let i = 0; i < 9; ++i) {
        gridArray[i] = "";
    }
    for (let i = 0; i < gridList.length; ++i) {
        gridList[i].dataset.boxNumber = i + 1;
        gridList[i].innerHTML = "_";
        gridList[i].addEventListener("click", ()=> {
            if (gridList[i].innerHTML == "_") {
                gridList[i].innerHTML = player[0];
                gridArray[i] = player[0];
                console.log(gridArray);
                console.log(gridArray[0] == "X");
                for (let i = 0; i < gridWin.length; ++i) {
                    console.log(gridArray[(gridWin[i][0] - 1)], gridArray[(gridWin[i][1] - 1)], gridArray[(gridWin[i][2] - 1)]);
                    console.log(gridArray[(gridWin[i][0] - 1)] == "X" && gridArray[(gridWin[i][1] - 1)] == "X" && gridArray[(gridWin[i][2] - 1)] == "X");
                    if (gridArray[(gridWin[i][0] - 1)] == "X" && gridArray[(gridWin[i][1] - 1)] == "X" && gridArray[(gridWin[i][2] - 1)] == "X") {
                        console.log("here");
                        instruct.innerHTML = playerOne.name + " WINS!";
                        game.playerOneScore++;
                        return;
                    }
                    else if (gridArray[(gridWin[i][0] - 1)] == "O" && gridArray[(gridWin[i][1] - 1)] == "O" && gridArray[(gridWin[i][2] - 1)] == "O") {
                        instruct.innerHTML = playerTwo.name + " WINS!";
                        game.playerTwoScore++;
                    }
                }
                if (player[0] == "X") {
                    player[0] = "O";
                    player[1] = 2;
                    instruct.innerHTML = playerTwo.name + " make your move...";
                }
                else {
                    player[0] = "X";
                    player[1] = 1;
                    instruct.innerHTML = playerOne.name + " make your move...";
                }
            }
        });
    }
}

setupGrid();