let numArr = []; 
// let num1Arr = [];  // Array to hold multiple numbers
action = [];    // Array to hold current operator action
display = document.getElementById('display');
display.innerHTML = 0;

// Function to hold stored numbers and parse it
function storeNumber(number, numArr) {
    noClicked = number;
    console.log(numArr)
    numArr.push(noClicked);
    console.log(numArr)
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
for (i=0; i<9+1; i++) {;
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
opposite.addEventListener('click', () => equalFunc(numArr, ['dashminus']));
percent = document.getElementById('percent');
percent.addEventListener('click', () => equalFunc(numArr, ['percent']));
clear = document.getElementById('clear');
clear.addEventListener('click', () => equalFunc(numArr, ['clear']));

dot = document.getElementById('dot');
dot.addEventListener('click', () => storeNumber('.', numArr));

// Adding other eventlisteners
equals = document.getElementById('equals');
equals.addEventListener('click', () => equalFunc(num1, action));

// Decide what happens in between operation
function holdingFunc(numArr, op) {
  console.log('this is the numArr: '+numArr)
  num1 = parseFloat(numArr.join(''));    // Storing numArr contents
  numArr.length = 0;  // Re-emptying numArr, once contents are stored
  action = op;
}

function clearFunc() {
  output = 0;
  numArr.length = 0
  num1 = 0;
  num2 = 0;
}

// Evaluation Function
function equalFunc(num1, action) {
  // action = 'minus';
  num2 = parseInt(numArr.join(''));
  if (action == 'plus') {output = num1 + num2};
  if (action == 'minus') {output = num1 - num2};
  if (action == 'multiply') {output = num1 * num2};
  if (action == 'divide') {
    output = num1 / num2;
    if (num2 == 0) {output = 'LOL NOPE.'}
  };
  
  if (action == 'dashminus') {output = -1*num2};
  if (action == 'percent') {output = num2 / 100};
  if (action == 'clear') {clearFunc()}
  display.innerHTML = output;
  console.log(num1 + '(num1) ' + action + ' ' + num2 + '(num2) = ' + output + '(output)');
  numArr[0] = output;
  action = '';
  return numArr
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