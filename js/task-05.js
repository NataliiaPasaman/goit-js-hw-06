/** Напиши скрипт, який під час набору тексту 
 * в інпуті input#name-input (подія input), підставляє
 *  його поточне значення в span#name-output. 
 * Якщо інпут порожній, 
 * у спані повинен відображатися рядок "Anonymous". */

const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

const handleInput = (event) => {
    console.log(event);
    console.log(event.currentTarget.value);
    outputElement.textContent = event.currentTarget.value;

    // if (inputElement.textContent === "") {
    //     console.log('ghjk')
    //     // outputElement.textContent = Anonymous;
    // }
}


// if (inputElement.textContent === "") {
//     inputElement.removeEventListener('input', handleInput)
// }
inputElement.addEventListener('input', handleInput);
// inputElement.removeEventListener('input', handleInput);