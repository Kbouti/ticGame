// let cacheDom = (function(){
// const gameboardDiv = document.getElementById(`gameboard`);
// const optionsForm = document.getElementById(`options`)


// optionsForm.addEventListener(`submit`), function(){
//     event.preventDefault();
//     console.log(`shitsnacks`);

// }
// return gameboardDiv, optionsForm;
// })()

// cacheDom();

const gameboardDiv = document.getElementById(`gameboard`);
const optionsForm = document.getElementById(`options`)
const player1Input = document.getElementById(`player1Name`);
const player2Input = document.getElementById(`player2Name`);
const submitButton = document.getElementById(`submit`)


optionsForm.addEventListener(`submit`, function(){
    event.preventDefault();
    console.log(`shitsnacks`);

    player1Input.textContent = 'did something friggin work??';
    formReset();

})


function formReset(){
player1Input.textContent = ``;
player2Input.innerHTML = ``;
}