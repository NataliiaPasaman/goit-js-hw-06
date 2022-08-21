function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  divBoxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);


function createBoxes(amount) {
  amount = Number(refs.input.value);

  const elem = [];
  const sizes = 30;
  let addValue = 0;

  for (let i = 0; i < amount; i += 1) {
    const divElements = document.createElement("div");
    divElements.style.border = '1px solid black';
    divElements.style.width = sizes + addValue + "px";
    divElements.style.height = sizes + addValue + "px";
    addValue += 10;
    divElements.style.backgroundColor = getRandomHexColor();

  elem.push(divElements);
  refs.divBoxes.append(divElements);
  }

}

function destroyBoxes() {
  return (refs.divBoxes.innerHTML = "");
}
