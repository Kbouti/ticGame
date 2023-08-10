const restartButton = document.getElementById(`restart`);
const optionsButton = document.getElementById(`options`);
const optionsForm = document.getElementById(`optionsForm`);
const player1Input = document.getElementById(`player1`);
const player2Input = document.getElementById(`player`);
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

function toggleOptions(){
    if (optionsBoxDiv.style.display ==="none"){
        optionsBoxDiv.style.display = "block";
    } else {
        optionsBoxDiv.style.display = "none";
    }
}

optionsButton.addEventListener('click', function(){
    toggleOptions();
});

cancelButton.addEventListener('click', function(){
    toggleOptions();
});

submitButton.addEventListener('click', function(){
    toggleOptions();
});