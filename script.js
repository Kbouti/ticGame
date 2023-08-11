const form = document.querySelector(`#optionsForm`);

form.addEventListener(`click`, (event) => {
    event.preventDefault();
    const formData = new FormData();
    const data = Object.fromEntries(formData);
    console.log(data);

    document.querySelector(`#optionsBox`).setAttribute(`hidden`, `true`)
})