const test = document.querySelector('.tester');
// DELETE ME

const display = document.querySelector('.display')
const inputs = document.querySelectorAll("button")
let pressedInputs = [];


const handleInput = (e) => {
  let pressed;
  
  // Check if button pressed is a number / displays numbers
  let numRegex = /[0-9]/;
  if(numRegex.test(e.target.innerText)) {
    // limits numbers pressed to fit in display
    if(pressedInputs.length >= 9) {
      return;
    }
    // stores numbers in an array as they are pressed
    pressedInputs.push(e.target.innerText)
    // Number constructor trims any leading zeros
    pressed = Number(pressedInputs.join(''));
    // displays Number on calc display
    display.innerHTML = pressed;
  }


  // C clears display / resets pressedInputs array
  if(e.target.innerText === 'C') {
    display.innerHTML = '0';
    pressedInputs = [];
  }
  
  // TODO 
  // Store numbers for operation
  // Operator inputs
  // evaluating operations

}

// adds event handlers to all button elements
for(const input of inputs) {
  input.addEventListener('click', handleInput);
}

// = + − × ÷

