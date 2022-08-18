const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const handleInput = (event) => {
    const valEl = event.currentTarget.value;
    outputElement.textContent = valEl;

    if (valEl === "") {
        outputElement.textContent = 'Anonymous';
    }
}

inputElement.addEventListener('input', handleInput);
