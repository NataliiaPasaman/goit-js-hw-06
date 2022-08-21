 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyChange = document.querySelector('body');
const spanRef = document.querySelector('span.color');
const btnRef = document.querySelector('.change-color');

btnRef.addEventListener('click', function onBtnChangeColor () {
  bodyChange.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyChange.style.backgroundColor;
})