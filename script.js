// let colorPalette = document.getElementsByClassName('color-palette');

let selected = '';
let numberAleatorio;

const selectedColor = (color) => {
  const isSelected = document.querySelector('.selected');
  if (isSelected !== null) {
    isSelected.classList.remove('selected');
  }
  selected = color;
  const select = document.querySelector(`.color#${color}`);
  select.classList.add('selected');
};

const fillPixel = (event) => {
  const element = event.target;
  element.id = selected;
};

let clearPixels = (event) => {
  let elementos = document.querySelectorAll('#pixel-board .pixel');

  elementos.forEach(function (elemento) {
    elemento.removeAttribute('id');
  });
};

let aleatorio = (event) => {
  const list = document.querySelectorAll('#color-palette .color');

  let newRandomNumber;
  do {
    newRandomNumber = Math.floor(Math.random() * 4);
  } while (newRandomNumber === numberAleatorio);
  numberAleatorio = newRandomNumber;

  const color = list[numberAleatorio].id;
  selectedColor(color);
};