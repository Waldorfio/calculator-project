function add(a, b) {
    ans = a + b;
    return ans
}
function subtract(a, b) {
    ans = a - b;
    return ans
}
function multiply(a, b) {
    ans = a * b;
    return ans
}
function divide(a, b) {
    ans = a / b;
    return ans
}
function percent(a, b) {
    ans = a/100;
    return ans;
}

function storeNumber(number) {
    outputNo = number.innerHTML;
    alert(outputNo);
}

number = document.getElementsByClassName(".number");
number.addEventListener('click', () => storeNumber(number))

