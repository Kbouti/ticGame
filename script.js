
const player1NameDiv = document.getElementById(`name1`);
const player2NameDiv = document.getElementById(`name2`);


const restartButton = document.getElementById(`restart`);
const optionsButton = document.getElementById(`options`);
const optionsForm = document.getElementById(`optionsForm`);
const player1Input = document.getElementById(`player1`);
const player2Input = document.getElementById(`player2`);
const radio1v1 = document.getElementById('1v1');
const radioaiEasy = document.getElementById('aiEasy');
const radioaiHard = document.getElementById('aiHard');
const submitButton = document.getElementById('submit');
const cancelButton = document.getElementById('cancel');
const optionsBoxDiv = document.getElementById(`optionsBox`);

const tile0 = document.getElementById('0');
const tile1 = document.getElementById('1');
const tile2 = document.getElementById('2');
const tile3 = document.getElementById('3');
const tile4 = document.getElementById('4');
const tile5 = document.getElementById('5');
const tile6 = document.getElementById('6');
const tile7 = document.getElementById('7');
const tile8 = document.getElementById('8');



let player1;
let player2;

let player1Name;
let player2Name;
let gameMode;
let turn;
let gameStatus = "off";


function startGame(){
    gameStatus = "on";
}

function activateTile(){

}

function scanBoard(){
    
}

function toggleOptions(){
    if (optionsBoxDiv.style.display ==="none"){
        optionsBoxDiv.style.display = "block";
    } else {
        optionsBoxDiv.style.display = "none";
    }
}

function getNames(){
player1Name = player1Input.value;
player2Name = player2Input.value;
if(player2Name === ``){
    player2Name = `Unnamed competitor`;
}
player1Input.value = '';
player2Input.value = '';
}

function setNames(){
    player1NameDiv.innerHTML = player1Name;
    player2NameDiv.innerHTML = player2Name;
}

function getGameMode(){
    if (radio1v1.checked){
        console.log(`human mode`);
        gameMode = 'human'
    } else if (radioaiEasy.checked){
        console.log(`comoputer easy`);
        player2Name = 'TicTacToe Bot';
        gameMode = 'aiEasy'
    }
    else if (radioaiHard.checked){
        console.log(`computer hard`);
        player2Name = 'THE DESTROYER';
        gameMode = 'aiHard'
    }
    return gameMode;
}



optionsButton.addEventListener('click', function(){
    toggleOptions();
});

cancelButton.addEventListener('click', function(){
    toggleOptions();
});


optionsForm.addEventListener(`submit`, function(){
    event.preventDefault();
    getNames();
    getGameMode();
    setNames();
    toggleOptions();
    startGame();
})

