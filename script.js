const btnCLR = document.getElementById('clr');
const btnDEL = document.getElementById('del');
const btn9 = document.getElementById('nine'); 
const btn8 = document.getElementById('eight'); 
const btn7 = document.getElementById('seven'); 
const btn6 = document.getElementById('six'); 
const btn5 = document.getElementById('five'); 
const btn4 = document.getElementById('four'); 
const btn3 = document.getElementById('three'); 
const btn2 = document.getElementById('two'); 
const btn1 = document.getElementById('one');
const btn0 = document.getElementById('zero'); 
const btnAdd = document.getElementById('add');
const btnSub = document.getElementById('sub');
const btnMul = document.getElementById('mul');
const btnDiv = document.getElementById('divide');
const btnEqual = document.getElementById('equal');
const btnDot = document.getElementById('dot');

const currentNumberObj = document.getElementById('current-number');
const historyNumberObj = document.getElementById('history-number');

let currentOperator = '';
let lastOperator = '';

let firstNumber = 0;
let secondNumber = 0;

let shouldReplaceNumbers = false;

function updateCurrentNumber(a) {
    document.getElementById('current-number').innerHTML = `${a}`;
}

function getCurrentNumber() {
    return parseFloat(currentNumberObj.innerHTML);
}

function listenersButtons() {
    btnDEL.addEventListener('click', () => {
        currentNumberObj.innerHTML = '0';
        deleteHistory();
    });

    btnCLR.addEventListener('click', () => {
        if (currentNumberObj.innerHTML >= 0 && currentNumberObj.innerHTML <= 9) {
            currentNumberObj.innerHTML = '0';
        } else if (currentNumberObj.innerHTML != '0') {
            currentNumberObj.innerHTML = currentNumberObj.innerHTML.slice(0,-1);
        }
    });

    btn0.addEventListener('click', () => {
        if(currentNumberObj.innerHTML != '0') {
            currentNumberObj.innerHTML += '0';
        } 
    });

    btn1.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '1';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '1';
        }
        
    });

    btn2.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '2';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '2';
        }
    });

    btn3.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '3';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '3';
        }
    });

    btn4.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '4';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '4';
        }
    });

    btn5.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '5';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '5';
        }
    });

    btn6.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '6';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '6';
        }
    });

    btn7.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '7';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '7';
        }
    });

    btn8.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '8';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '8';
        }
    });

    btn9.addEventListener('click', () => {
        if(currentNumberObj.innerHTML == '0' || shouldReplaceNumbers == true) {
            currentNumberObj.innerHTML = '9';
            shouldReplaceNumbers = false;
        } else {
            currentNumberObj.innerHTML += '9';
        }
    });

    btnAdd.addEventListener('click', () => {
        firstNumber = getCurrentNumber();
        currentOperator = '+';
        updateHistory(firstNumber, '+');

        // TYMCZASOWO USUWA SIĘ OD RAZU
        // currentNumberObj.innerHTML = '0';
        shouldReplaceNumbers = true;
    });

    btnSub.addEventListener('click', () => {
        firstNumber = getCurrentNumber();
        currentOperator = '-';
        updateHistory(firstNumber, '-');

        // TYMCZASOWO USUWA SIĘ OD RAZU
        // currentNumberObj.innerHTML = '0';
        shouldReplaceNumbers = true;
    });

    btnMul.addEventListener('click', () => {
        firstNumber = getCurrentNumber();
        currentOperator = '*';
        updateHistory(firstNumber, '*');

        // TYMCZASOWO USUWA SIĘ OD RAZU
        // currentNumberObj.innerHTML = '0';
        shouldReplaceNumbers = true;
    });

    btnDiv.addEventListener('click', () => {
        firstNumber = getCurrentNumber();
        currentOperator = '/';
        updateHistory(firstNumber, '/');
        shouldReplaceNumbers = true;
    });

    btnDot.addEventListener('click', () => {
        currentNumberObj.innerHTML += '.';
        shouldReplaceNumbers = false;
    });

    btnEqual.addEventListener('click', () => {
        secondNumber = getCurrentNumber();
        operate();
        shouldReplaceNumbers = true;
    });
}

function updateHistory(number, operator) {
    if (operator == '+') historyNumberObj.innerHTML = `${number} +`;
    else if (operator == '-') historyNumberObj.innerHTML = `${number} -`;
    else if (operator == '*') historyNumberObj.innerHTML = `${number} x`;
    else if (operator == '/') historyNumberObj.innerHTML = `${number} ÷`;
}

function deleteHistory() {
    historyNumberObj.innerHTML = '';
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b != 0) {
        return a / b;
    } else {
        return NaN;
    }
}

function operate() {

    if (currentOperator == '+') {
        currentNumberObj.innerHTML = `${add(firstNumber, secondNumber)}`;
        deleteHistory();
    } else if (currentOperator == '-') {
        currentNumberObj.innerHTML = `${subtract(firstNumber, secondNumber)}`;
        deleteHistory();
    } else if (currentOperator == '*') {
        currentNumberObj.innerHTML = `${multiply(firstNumber, secondNumber)}`;
        deleteHistory();
    } else if (currentOperator == '/') {
        currentNumberObj.innerHTML = `${divide(firstNumber, secondNumber)}`;
        deleteHistory();
    }
}

function runCalculator() {
    listenersButtons();

}


runCalculator();

