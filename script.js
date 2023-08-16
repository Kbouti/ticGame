const form = document.querySelector(`#optionsForm`);
const cancelBtnDiv = document.querySelector(`#cancel`);
const optionsBtnDiv = document.querySelector(`#options`);

const winningConditions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const toggleOptions = () =>{
    let optionsBoxDiv = document.querySelector(`#optionsBox`);
    if (optionsBoxDiv.style.display ==="none"){
        optionsBoxDiv.style.display = "block";
    } else {
        optionsBoxDiv.style.display = "none";
    }
};

const populateNameTags = (data) =>{
    if (data.player2Name == ``) {data.player2Name = `Unnamed Competitor`};
    if (data.choice == 1) {data.player2Name = `TicTacToe Bot`};
    if (data.choice == 2) {data.player2Name = `THE DESTROYER`};
    adjustDom('name1', data.player1Name)
    adjustDom('name2', data.player2Name)
    form.reset();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    toggleOptions();
    populateNameTags(data);
    initializeGame(data);
});

cancelBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});

optionsBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});

const initializeVariables = (data) => {
    data.choice = +data.choice;
    data.board = [0,1,2,3,4,5,6,7,8];
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false;
    data.winner = ""
    const actionMessageDiv = document.getElementById(`actionMessage`);
    actionMessageDiv.innerText = 'Begin Round!'
;}

const initializeGame = (data) =>{
    initializeVariables(data);
    addEventListenersToTiles(data);
}

const addEventListenersToTiles = (data) =>{
    document.querySelectorAll(`.tile`).forEach(tile =>{
        tile.addEventListener(`click`, (event) =>{
            playMove(event.target, data);
        })
    })
}

const adjustDom = (elementId, text) =>{
let element = document.querySelector(`#${elementId}`);
element.textContent = text;
}

const playMove = (tile, data) =>{
    if(data.gameOver){
        return;
    }
    if((data.board[tile.id] === 'X') || (data.board[tile.id] === 'O')){
        return;
    }
    data.board[tile.id] = data.currentPlayer;
    tile.textContent = data.currentPlayer;
    data.round++;
    if (data.currentPlayer == 'X'){
        tile.classList.add(`playerOne`);
        data.currentPlayer = 'O';
    } else {
        tile.classList.add(`playerTwo`);
        data.currentPlayer = 'X';
    }
    checkWinner(data);
}

const endConditions = (data) =>{
    if(checkWinner(data)){
        let winnerName;
        if (data.currentPlayer === 'X' ){
            winnerName = data.player1Name;
        }
        else {
            winnerName = data.player2Name;
        }
    }
    else if (data.round === 9){
        return true;
    }
    return false;
}

const checkWinner = (data) => {
    let result = false;
    winningConditions.forEach(condition => {
        if (
            (data.board[condition[0]] === data.board[condition[1]]) && 
            (data.board[condition[1]] === data.board[condition[2]])
            ){
            result = true;
            data.gameOver=true;
        }
    })
    return result;
}









