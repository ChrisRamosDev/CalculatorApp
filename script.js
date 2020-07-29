
let runningTotal = 0;
let buffer = '0';
let previousOp;
const display = document.querySelector('.display');
document
  .querySelector(".calc-buttons")
  .addEventListener('click', (event) => {
    handleInput(event.target.innerText);
  })


const handleInput = (value) => {
  if(isNaN(parseInt(value))) {
    handleSymbols(value);
  } else {
    handleNums(value);
  }
  rerender();
}

const handleSymbols = (input) => {
  switch(input) {
    case 'C':
      buffer = '0';
      runningTotal = 0;
      previousOp = null;
      break;
    case '=':
      if (previousOp === null) {
        return;
      } 
      evaluate(parseInt(buffer));
      previousOp = null;
      buffer = '' + runningTotal;
      runningTotal = 0;
      break;
    
    default:
      handleMath(input);
      break;
  }
}

const handleNums = (input) => {
  if(buffer === '0') {
    buffer = input;
  } else {
    buffer += input;
  }
}

function handleMath(value) {
  if ( buffer === '0'){
    return;
  }

  const intBuffer = parseInt(buffer);
  if ( runningTotal === 0 ) {
    runningTotal = intBuffer;
  } else {
    evaluate(intBuffer);
  }

  previousOp = value;

  buffer = '0';
}

function evaluate(intBuffer) {
  if ( previousOp === '+') {
    runningTotal += intBuffer;
  } else if ( previousOp === '−') {
    runningTotal -= intBuffer;
  } else if ( previousOp === '×') {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

function rerender() {
  display.innerText = buffer;
}


// = + − × ÷

