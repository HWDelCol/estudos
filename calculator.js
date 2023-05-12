const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');

let currentValue = 0;
let current;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            appendToDisplay(value);
        }
    });
});

function clearDisplay() {
    currentValue = 0;
    current = null;

    display.textContent = currentValue;
}

function appendToDisplay(value) {
    if (currentValue === 0) {
        currentValue = value;
    } else {
        currentValue += value;
    }
    display.textContent = currentValue;
}

function calculate() {
    const values = currentValue.split(current);
    const operator = current;
    const num1 = parseFloat(values[0]);
    const num2 = parseFloat(values[1]);
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    currentValue = result.toString();
    current = null;
    display.textContent = currentValue;
}

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        current = value;
        currentValue += value;
    } else {
        if (currentValue === '0') {
            currentValue = value;
        } else {
            currentValue += value;
        }
    }
    display.textContent = currentValue;
}