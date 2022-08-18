let counterValue = 0;

const counterElement = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


const hendleClicDecrement = (event) => {
    counterValue -= 1;
    counterElement.textContent = counterValue;
    console.log(`Змуншуємо лічильник на 1 - поточне значення ${counterValue}`);
}

const hendleClicIncrement = (event) => {
    counterValue += 1;
    counterElement.textContent = counterValue;
    console.log(`Збільшуємо лічильник на 1 - поточне значення ${counterValue}`);
}

decrementBtn.addEventListener('click', hendleClicDecrement);
incrementBtn.addEventListener('click', hendleClicIncrement);