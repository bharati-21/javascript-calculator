/* Variables for DOM elements */
const togglerSwitch = document.querySelector('.toggle-switch');
const togglerSlider = document.querySelector('.toggle-slider');
const calculatorScreen = document.querySelector('.calculator-screen');
const btnReset = document.querySelector('.btn-reset');
const divResult = document.querySelector('.div-result');
const divDisplay = document.querySelector('.div-display');

divResult.textContent = "0";


// const btnDel = document.querySelector('.btn-del');
// const btnEquals = document.querySelector('.btn-equals');
// const btn = document.querySelectorAll('.btn');

let expression = '';
let currentValue = "0";


const calculatorButtons = document.querySelector('.calculator-buttons');

calculatorButtons.addEventListener("click", handleButtonClick);


function handleButtonClick(e) {
    if(e.target.classList.contains('btn')){
        
        if(currentValue.length !== 1) {
            clearPreviousResult();
        }

        const btnTarget = e.target;
        const targetClassList = btnTarget.classList;

        const btnText = btnTarget.textContent;


        if(targetClassList.contains('btn-op')) {

            if(checkNumberValidity()) {
                currentValue = "0";
                switch(btnText) {
                    case '+': 
                        expression += " + ";
                        break;
                    case '-':
                        expression += " - ";
                        break;
                    case '/':
                        expression += " / ";
                        break;
                    case '*':
                        expression += " * ";
                        break;
                    default:
                        console.log(expression)
                        let ans = eval(expression);
                        expression += " = ";
                        currentValue = ans;
                        break;
                    
                }
                divDisplay.textContent = expression; 
            }
        }
        else if(targetClassList.contains('btn-num')) {
            
            if(checkNumberValidity(btnText)) {
                currentValue+=btnText;
                expression+=btnText;
            }
        }
        else if(targetClassList.contains('btn-del')) {
            
        }

        else if(targetClassList.contains('btn-period')) {
            if(!checkPeriodInExpression()) {
                expression+=btnText;
                currentValue+=btnText;
                console.log('You clicked period');
            }
        }
        else {
            console.log('You clicked reset');
        }
        divResult.textContent = currentValue;

    }
}

function checkPeriodInExpression() {
    if(currentValue.indexOf('.') === -1) {
        return false;
    }
    return true;
}

function checkNumberValidity(btnText) {
    if(currentValue.length-1 === '.') {
        return false;
    }
    else if(currentValue.length === 1 && btnText === '0') {
        return false;
    }
    return true;
}

function clearPreviousResult() {
    if(expression.indexOf("=")!==-1) {
        expression = "";
        currentValue = "0";
        divDisplay.textContent = "";
        divResult.textContent = currentValue;
    }
}