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

const currentOperation = document.getElementById('current-operation');
const lastOperation = document.getElementById('last-operation');


function listenersButtons() {
    btnDEL.addEventListener('click', () => {
        currentOperation.innerHTML = '0';
    });

    btnCLR.addEventListener('click', () => {
        if (currentOperation.innerHTML >= 0 && currentOperation.innerHTML <= 9) {
            currentOperation.innerHTML = '0';
        } else if (currentOperation.innerHTML != '0') {
            currentOperation.innerHTML = currentOperation.innerHTML.slice(0,-1);
        }
    });

    btn0.addEventListener('click', () => {
        if(currentOperation.innerHTML != '0') {
            currentOperation.innerHTML += '0';
        } 
    });

    btn1.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '1';
        } else {
            currentOperation.innerHTML += '1';
        }
    });

    btn2.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '2';
        } else {
            currentOperation.innerHTML += '2';
        }
    });

    btn3.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '2';
        } else {
            currentOperation.innerHTML += '3';
        }
    });

    btn4.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '4';
        } else {
            currentOperation.innerHTML += '4';
        }
    });

    btn5.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '5';
        } else {
            currentOperation.innerHTML += '5';
        }
    });

    btn6.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '6';
        } else {
            currentOperation.innerHTML += '6';
        }
    });

    btn7.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '7';
        } else {
            currentOperation.innerHTML += '7';
        }
    });

    btn8.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '8';
        } else {
            currentOperation.innerHTML += '8';
        }
    });

    btn9.addEventListener('click', () => {
        if(currentOperation.innerHTML == '0') {
            currentOperation.innerHTML = '9';
        } else {
            currentOperation.innerHTML += '9';
        }
    });

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

function operate(operation, a, b) {

}

function runCalculator() {
    listenersButtons();
}


runCalculator();