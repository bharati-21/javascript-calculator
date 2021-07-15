/* Variables for DOM elements */
const togglerSwitch = document.querySelector('.toggle-switch');
const togglerSlider = document.querySelector('.toggle-slider');
const calculatorScreen = document.querySelector('.calculator-screen');
const btnReset = document.querySelector('.btn-reset');
const divResult = document.querySelector('.div-result');
const divDisplay = document.querySelector('.div-display');
const calculatorButtons = document.querySelector('.calculator-buttons');


divResult.textContent = "0";

calculatorButtons.addEventListener("click", handleButtonClick);

let currentResultValue = "0", expression = "";

function handleButtonClick(e) {
    const clickTarget = e.target;
    const targetClassList = clickTarget.classList;

    if(targetClassList.contains('btn')) {
        // Get the text of button

        const btnText = clickTarget.textContent;

        // Check if the button was an operand (number or period) 

        // Check if the button was an operator 
        if(targetClassList.contains('btn-num')) {
            // Check if the button is a period
            
            if(btnText === '.') {
                // Check if the period has already been clicked
                if(!periodInOperand()) {
                    currentResultValue+='.';
                }
            }
 
            // Check if the button is other operands
            else {
                if(btnText !=='0') {
                    if(currentResultValue==="0") {
                        currentResultValue="";
                    }
                    currentResultValue+=btnText;
                }
                else {
                    if(currentResultValue !== '0') {
                        currentResultValue+=btnText;
                    }
                }
            }

            // Add the currentResultValue to divDisplay
            displayOperand();
        }

        // Check if the button was delete
            // 1. Does the result have previous expression value ?
                // Yes => clearDisplay() and clearExpression()
            // 2. Does the result only have "0".
                // Yes => Don't do anything. 
            // 3. Remove the last character

        // Check if the button was reset
        if(targetClassList.contains('btn-reset')) {
            clearDisplay();
            clearExpression();
            clearResult();
            clearCurrentResultValue();
        }
    }
}


function clearDisplay() {
    divDisplay.textContent = "";
}

function clearResult() {
    divResult.textContent = "";
}

function clearExpression() {
    expression = "";
}

function clearCurrentResultValue() {
    currentResultValue = "";
}

function periodInOperand() {
    if(currentResultValue.indexOf('.') !== -1) {
        return true;
    }
    return false;
}

function displayOperand() {
    divResult.textContent = currentResultValue;
}
