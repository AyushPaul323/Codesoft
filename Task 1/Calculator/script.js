let display = document.getElementById('display');
let operatorDisplay = document.getElementById('operatorDisplay');
let currentInput = '';
let resultDisplayed = false;

function appendCharacter(character) {
    if (resultDisplayed) {
        clearDisplay();
    }
    if (['+', '-', '*', '/', '%'].includes(character)) {
        if (currentInput !== '') {
            currentInput += character;
            operatorDisplay.textContent = character;
            display.textContent = currentInput; 
        }
    } else {
        currentInput += character;
        display.textContent = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
    operatorDisplay.textContent = '';
    resultDisplayed = false;
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || '0';
}

function calculateResult() {
    if (currentInput === '') {
        return;
    }

    try {
        const result = eval(currentInput).toString();
        display.textContent = result;
        operatorDisplay.textContent = ''; 
        currentInput = result;
        resultDisplayed = true;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
        operatorDisplay.textContent = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    switch (key) {
        case 'C':
        case 'c':
            clearDisplay();
            break;
        case 'Backspace':
            deleteDigit();
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            appendCharacter(key);
            break;
        case 'Enter':
            calculateResult();
            break;
        case '.':
            appendCharacter('.');
            break;
        default:
            if (!isNaN(key) && key !== ' ') {
                appendCharacter(key);
            }
            break;
    }
});

function clearDisplay() {
    document.getElementById('display').textContent = '0';
    document.getElementById('operatorDisplay').textContent = '';
}

function deleteDigit() {
    const display = document.getElementById('display');
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendCharacter(character) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && character !== '.') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.textContent.replace('%', '/100'));
        display.textContent = result;
        document.getElementById('operatorDisplay').textContent = '';
    } catch (error) {
        display.textContent = 'Error';
    }
}
