//Variables
const container = document.getElementById('container');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit');

//Generates random numbers as color codes
function randomColorGenerator() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//Generates number of boxes to be displayed
function init(counter) {
  for (let i = 0; i < counter; i++) {
    createBox();
  }
}

//Creates the individual color boxes
function createBox() {
  //create color box
  const colorBox = document.createElement('div');
  colorBox.classList.add('color-box');
  container.appendChild(colorBox);
  colorBox.style.backgroundColor = randomColorGenerator();
  //create color code
  const colorCode = document.createElement('p');
  colorCode.classList.add('color-code');
  colorBox.appendChild(colorCode);
  colorCode.textContent = randomColorGenerator();
  //create remove button
  const removeBtn = document.createElement('h4');
  removeBtn.classList.add('remove-btn');
  removeBtn.textContent = 'x';
  colorBox.appendChild(removeBtn);
  //remove a box
  removeBtn.addEventListener('click', () => {
    colorBox.style.display = 'none';
  });
}

//Generate color boxes on click and according to input
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  init(input.value);
  input.value = '';
});

//Displays 3 default color boxes on load
document.addEventListener('DOMContentLoaded', init(3));
