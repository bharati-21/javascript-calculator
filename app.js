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

        // Check if the button was an operator 
            // 1) Check if the number is "="
                // 1.1) Equal was pressed without an expression
                // 1.2) Equal pressed after an operand
            
            if(targetClassList.contains('btn-op')) {
                console.log('You pressed an operator');
                if(btnText === '=') {
                    if(validExpression()) {
                        expression+=currentResultValue;
                        console.log(expression);
                        showExpression();
                        showResult();
                    }  
                }

                else {
                    if(checkIfLastCharIsOPerator()) {
                        expression = expression.slice(0,expression.length-3);
                    }
                    else {
                        console.log('you pressed', btnText);

                        expression+= currentResultValue + ` ${btnText} `;
                        console.log(expression);
                        showExpression();

                    }
                }
            }

        // Check if the button was an operand (number or period) 
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
                        console.log(currentResultValue);
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

function validExpression() {
    console.log("validExpression");
    if(checkIfLastCharIsOPerator()) {
        console.log("checkIfLastCharIsOperator");
        return false;
        
    }

    const currValueChar = currentResultValue[currentResultValue.length-1];
    if(currValueChar === '.') {
        currentResultValue = currentResultValue.slice(0, currentResultValue.length-1);
        console.log(currentResultValue);
    }

    return true;
}

function checkIfLastCharIsOPerator() {
    const expressionChar = expression[expression.length - 2];
    if(currentResultValue === "0" ){
        if( expressionChar === '+' || expressionChar === '/' || expressionChar === '' || expressionChar === '*') {
            return true;
        }
    } 
    return false;
}

function showExpression() {
    divDisplay.textContent = expression;
    divResult.textContent = "0";
    currentResultValue = "0";
}

function showResult() {
    divResult.textContent = eval(expression);

}