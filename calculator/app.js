let currentValue = 0;
let calcBuffer = '0';
let lastOperator;
const screen = document.querySelector('.screen');

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (calcBuffer === '0') {
    calcBuffer = value;
  } else {
    calcBuffer += value;
  }
}

function handleSymbol(value) {
  switch (value) {
    case 'C':
      calcBuffer = '0';
      currentValue = 0;
      lastOperator = null;
      break;
    case '=':
      if (lastOperator === null) {
        return;
      }
      currentOperation(parseInt(calcBuffer));
      lastOperator = null;
      calcBuffer = '' + currentValue;
      currentValue = 0;
      break;
    case '←':
      if (calcBuffer.length === 1) {
        calcBuffer = '0';
      } else {
        calcBuffer = calcBuffer.substring(0, calcBuffer.length - 1);
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
  const intBuffer = parseInt(calcBuffer);
  if (currentValue === 0) {
    currentValue = intBuffer;
  } else {
    currentOperation(intBuffer);
  }
  lastOperator = value;
  calcBuffer = '0';
}

function rerender() {
  screen.innerText = calcBuffer;
}

function currentOperation(intBuffer) {
  if (lastOperator === '+') {
    currentValue += intBuffer;
  } else if (lastOperator === '-') {
    currentValue -= intBuffer;
  } else if (lastOperator === '*') {
    currentValue *= intBuffer;
  } else if (lastOperator === '/') {
    currentValue /= intBuffer;
  }
}

document
  .querySelector('.calculator-buttons')
  .addEventListener('click', function (e) {
    buttonClick(e.target.innerText);
  });
