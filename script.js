const form = document.querySelector(`#optionsForm`);
const cancelBtnDiv = document.querySelector(`#cancel`);
const optionsBtnDiv = document.querySelector(`#options`);



const toggleOptions = () =>{
    let optionsBoxDiv = document.querySelector(`#optionsBox`);
    if (optionsBoxDiv.style.display ==="none"){
        optionsBoxDiv.style.display = "block";
    } else {
        optionsBoxDiv.style.display = "none";
    }
};

cancelBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});

optionsBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});


const populateNameTags = (data) =>{
    if (data.player2Name == ``) {data.player2Name = `Unnamed Competitor`};
    if (data.choice == 1) {data.player2Name = `TicTacToe Bot`};
    if (data.choice == 2) {data.player2Name = `THE DESTROYER`};
    adjustDom('name1', data.player1Name)
    adjustDom('name2', data.player2Name)
    form.reset();
}








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


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    toggleOptions();
    populateNameTags(data);
    initializeGame(data);
});


const initializeVariables = (data) => {
    data.choice = +data.choice;
    data.board = [0,1,2,3,4,5,6,7,8];
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameOver = false;
    data.winner = "";
;}

const initializeGame = (data) =>{
    initializeVariables(data);
    addEventListenersToTiles(data);
    adjustDom(`actionMessage`, `${data.player1Name} starts us off`);
}

const addEventListenersToTiles = (data) =>{
    document.querySelectorAll(`.tile`).forEach(tile =>{
        tile.addEventListener(`click`, (event) =>{
            playMove(event.target, data);
        })
    })
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
    } else {
        tile.classList.add(`playerTwo`);
    }
    if (endConditions(data)){
        return;
    }
    if (data.choice === 0){
        changePlayer(data);
    } else if (data.choice === 1){
        easyAiMove(data);
        data.currentPlayer = 'X';
    } else if (data.choice === 2){
        changePlayer(data);
        hardAiMove(data);
        if(endConditions(data)){
            return;
        };
        changePlayer(data);
    } 
}



const endConditions = (data) =>{
    if(checkWinner(data, data.currentPlayer)){
        if (data.currentPlayer === 'X' ){
            data.winner = `X`
            winnerName = data.player1Name;
        }
        else {
            winnerName = data.player2Name;
            data.winner = `O`
        }
        data.gameOver = true;
        adjustDom('actionMessage', `${winnerName} wins!`)
        return true;
    }
    else if (data.round === 9){
        adjustDom("displayTurn", "It's a Tie!");
        data.gameOver = true;
        return true;
    }
    return false;
}

const checkWinner = (data, player) => {
    let result = false;
    winningConditions.forEach((condition) => {
        if (
            (data.board[condition[0]] === player) &&
            (data.board[condition[1]] === player) && 
            (data.board[condition[2]] === player)
            ){              
            result = true;
        }
    });
    return result;
}


const adjustDom = (elementId, text) =>{
    let element = document.querySelector(`#${elementId}`);
    element.textContent = text;
}
    

const changePlayer = (data) =>{
    if (data.currentPlayer === `X`){
        adjustDom(`actionMessage`, `${data.player2Name}'s turn.`);
        data.currentPlayer = `O`
    } else {
        adjustDom(`actionMessage`, `${data.player1Name}'s turn.`);
        data.currentPlayer = `X`
    }
}


const easyAiMove = (data) => {
    changePlayer(data);
    data.round++;
        let availableSpaces = data.board.filter(
            (space) => space !== "X" && space !== "O"
        );
        let move = 
            availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
        data.board[move] = data.player2;
        setTimeout(() =>{
            let tile = document.getElementById(`${move}`);
            tile.textContent = data.player2;
            tile.classList.add('playerTwo');
        }, 300);
    if (endConditions(data)){
        return;
    }
    changePlayer(data);
}


const hardAiMove = (data) =>{
    data.round++;
    const move = minimax(data, "O").index;
    data.board[move] = data.player2;
    setTimeout(() =>{
    let tile = document.getElementById(`${move}`);
    tile.textContent = data.player2;
    tile.classList.add("playerTwo");
    }, 200);
}



const minimax = (data, player) =>{
    let availableSpaces = data.board.filter(
        (space) => space !== "X" && space !== "O"
    );
    if(checkWinner(data, data.player1)){
        return {
            score: -100,
        };
    } else if (checkWinner(data, data.player2)){
        return {
            score: 100,
        };
    } else if (availableSpaces.length === 0){
        return {
            score: 0,
        };
    }
    const potentialMoves = [];
    for (let i = 0; i < availableSpaces.length; i++){
        let move = {}
        move.index = data.board[availableSpaces[i]];
        data.board[availableSpaces[i]] = player;
        if (player === data.player2){
            move.score = minimax(data, data.player1).score;
        } else {
            move.score = minimax(data, data.player2).score;
        }
        data.board[availableSpaces[i]] = move.index;
        potentialMoves.push(move);
    }
    let bestMove = 0;
    if(player ===data.player2){
        let bestScore = -10000;
        for(let i = 0; i < potentialMoves.length; i++){
            if(potentialMoves[i].score > bestScore){
                bestScore = potentialMoves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for(let i = 0; i < potentialMoves.length; i++){
            if(potentialMoves[i].score < bestScore){
                bestScore = potentialMoves[i].score;
                bestMove = i;
            }
        }
    }
    return potentialMoves[bestMove];
};

