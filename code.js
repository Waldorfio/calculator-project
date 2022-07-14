let numArr = [];
let num3 = [];
display = document.getElementById('display');

// Function to hold stored numbers
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

plus = document.getElementById('plus');
plus.addEventListener('click', () => holdingFunc(numArr, 'plus'));

equals = document.getElementById('equals');
equals.addEventListener('click', () => equalFunc(num1));

clear = document.getElementById('clear');
clear.addEventListener('click', () => acFunc(numArr,num1));

function holdingFunc(numArr, action) {
  num1 = parseInt(numArr.join(''));    // Storing numArr contents
  numArr.length = 0;  // Re-emptying numArr, once contents are stored
  console.log(num1)
  if (action == 'plus') {
    num3.push(num1)
  }
  return num1
}

function equalFunc(num1, action) {
  action = 'plus';
  if (action == 'plus') {
    num2 = parseInt(numArr.join(''));
    output = num2 + add(num3)};
  display.innerHTML = output;
  acFunc();
}

function acFunc() {
  numArr.length = 0;
  num1= 0;
  console.log('')
}


// display.addEventListener('change', () => );
// function liveUpdate() {
//   display
// }

function add(arr) {
  output = 0;
  for (i=0; i<(arr.length); i++) {
    output = output + arr[i];
  }
  return output
}

console.log('-----------')