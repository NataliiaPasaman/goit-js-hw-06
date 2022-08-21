const inputControler = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');

textElement.style.fontSize = '56px';

const hendleInputChangeText = (event) => {
    let inputValue = Number(event.currentTarget.value);

    if (inputValue += 1 && inputValue < 96) {
        textElement.style.fontSize = inputValue + 'px';
    }
};

inputControler.addEventListener('input', hendleInputChangeText);