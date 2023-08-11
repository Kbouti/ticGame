const form = document.querySelector(`#optionsForm`);
const cancelBtnDiv = document.querySelector(`#cancel`);
const optionsBtnDiv = document.querySelector(`#options`)

const toggleOptions = () =>{
    let optionsBoxDiv = document.querySelector(`#optionsBox`);
    if (optionsBoxDiv.style.display ==="none"){
        optionsBoxDiv.style.display = "block";
    } else {
        optionsBoxDiv.style.display = "none";
    }
};

const populateNameTags = (data) =>{
    if(data.player2Name == ``){
        data.player2Name = `Unnamed Competitor`;
    }
    if (data.choice == 1){
        data.player2Name = `TicTacToe Bot`;
    }
    if (data.choice == 2){
        data.player2Name = `THE DESTROYER`;
    }
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
    // initializeGame(data);


});

cancelBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});

optionsBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});

const initializeGame = (data) => {
    console.log(data)
;}