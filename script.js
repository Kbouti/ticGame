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

const populateNameTags = (data) =>{
    if (data.player2Name == ``) {data.player2Name = `Unnamed Competitor`};
    if (data.choice == 1) {data.player2Name = `TicTacToe Bot`};
    if (data.choice == 2) {data.player2Name = `THE DESTROYER`};
    const player1Div = document.getElementById(`name1`);
    const player2Div = document.getElementById(`name2`);
    player1Div.innerHTML = data.player1Name;
    player2Div.innerHTML = data.player2Name;
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

const playMove = (tile, data) =>{
    console.log(tile,data);
    if(data.gameOver){
        return
    }

}