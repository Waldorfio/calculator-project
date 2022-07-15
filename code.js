let numArr = []; 
// let num1Arr = [];  // Array to hold multiple numbers
action = [];    // Array to hold current operator action
display = document.getElementById('display');
display.innerHTML = 0;

// Function to hold stored numbers and parse it
function storeNumber(number, numArr) {
    noClicked = number;
    numArr.push(parseInt(noClicked));
    display.innerHTML = numArr.join('');    // Display numArr without any commas
    return numArr
}

// Adding universal keypress detection (to add to display)
document.addEventListener('keydown', function(event) {
  for (i=1; i<9+1; i++) {
    if (event.key == i) {storeNumber(parseInt(i), numArr)};
  }
});

// Storing the button clicked into memory
for (i=1; i<9+1; i++) {;
  number = document.getElementById('number'+i);
  number.addEventListener('click', storeNumber.bind(this, number.innerHTML, numArr));
}

// Adding operation eventlisteners
plus = document.getElementById('plus');
plus.addEventListener('click', () => holdingFunc(numArr, 'plus'));
minus = document.getElementById('minus');
minus.addEventListener('click', () => holdingFunc(numArr, 'minus'));
multiply = document.getElementById('star');
multiply.addEventListener('click', () => holdingFunc(numArr, 'multiply'));
divide = document.getElementById('slash');
divide.addEventListener('click', () => holdingFunc(numArr, 'divide'));
opposite = document.getElementById('dashminus');
opposite.addEventListener('click', () => oppositeFunc());
percent = document.getElementById('percent');
percent.addEventListener('click', () => equalFunc(numArr, ['percent']));
clear = document.getElementById('clear');
clear.addEventListener('click', () => equalFunc(numArr, ['clear']));

//// TO WORK ON /////////////////////
function oppositeFunc(numArr) {
  oppositeNum = parseInt(display.innerText)*-1;
  display.innerHTML = oppositeNum;
  // numArr = []
  numArr.push(parseInt(oppositeNum));
  // storeNumber(oppositeNum, numArr)
}
////////////////////////////

// Adding other eventlisteners
equals = document.getElementById('equals');
equals.addEventListener('click', () => equalFunc(num1, action));

// Decide what happens in between operation
function holdingFunc(numArr, op) {
  num1 = parseInt(numArr.join(''));    // Storing numArr contents
  numArr.length = 0;  // Re-emptying numArr, once contents are stored
  console.log(num1)
  // num1Arr.push(num1)
  action = op;
}

// Evaluation Function
function equalFunc(num1, action) {
  console.log('action='+action)
  // action = 'minus';
  num2 = parseInt(numArr.join(''));
  if (action == 'plus') {output = num1 + num2};
  if (action == 'minus') {output = num1 - num2};
  if (action == 'multiply') {output = num1 * num2};
  if (action == 'divide') {output = num1 / num2};
  if (action == 'percent') {output = num2 / 100};
  if (action == 'clear') {
    output = 0;
    numArr.length = 0;
    // let numArr = []
    num1 = 0;
    num2 = 0;
  }
  display.innerHTML = output;
  console.log(num1 + ' ' + action + ' ' + num2);
  // action = []
  // action.length = 0;
  action = '';
}

// Sum of an array function
function total(arr) {
  output = 0;
  for (i=0; i<(arr.length); i++) {
    output = output + arr[i];
  }
  return output
}
// function minusFunc(arr) {
//   output = 0;
//   for (i=0; i<(arr.length); i++) {
//     output = arr[i] - output;
//   }
//   return output
// }

console.log('-----------')