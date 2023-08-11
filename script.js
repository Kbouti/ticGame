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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    toggleOptions();
});

cancelBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});

optionsBtnDiv.addEventListener(`click`, (event) => {
    toggleOptions();
});