const display = document.getElementById('display');
let currentNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperator(op) {
    if (operator !== null || currentNumber === '') return;
    operator = op;
    currentNumber += ' ' + operator + ' ';
    display.value = currentNumber;
}

function calculateResult() {
    if (operator === null || currentNumber.split(operator).length !== 2) return;

    try {
        const result = eval(currentNumber);
        currentNumber = '' + result;
        display.value = currentNumber;
        operator = null;
    } catch (error) {
        alert('Invalid operation!');
    }
}

function clearDisplay() {
    currentNumber = '';
    operator = null;
    display.value = currentNumber;
}