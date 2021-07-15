
        if(targetClassList.contains('btn-op')) {
            if(checkNumberValidity()) {
                currentValue = "0";
                
                if(btnText === '=') {
                    if(!checkPrevCharIsOperator()) {
                        const ans = eval(expression);
                        expression += " = ";
                        currentValue = ans;
                    }  
                }
                else {
                    if(expression !== "") {
                        if(checkPrevCharIsOperator()) {
                            expression = expression.slice(0, expression.length-3);
                        }
                    }
                    expression+= ` ${btnText} `;
                }

                divDisplay.textContent = expression; 
            }
        }

        else if(targetClassList.contains('btn-num')) {
            
            
            clearPreviousResult();
            
            if(btnText === '.') {
                if(!checkPeriodInExpression()) {
                    expression+=btnText;
                    currentValue+=btnText;
                }
            }

            else {
                if (!multipleZeros(btnText)) {
                    currentValue+=btnText;
                    expression+=btnText;
                }
            }
        }
        else if(targetClassList.contains('btn-del')) {
            if(currentValue !== "0") {
                // If there 
                if(expression.indexOf("=")!==-1) {
                    expression="";
                    
                    divDisplay.textContent = "";
                    currentValue =  divResult.textContent;
                }
                if(currentValue.length === 1 && currentValue) {
                    currentValue = "0";
                }
                else {
                    currentValue = currentValue.toString();
                    currentValue = currentValue.slice(0,currentValue.length-1);
                    if(expression!=="") {
                        expression = expression.slice(0,expression.length-1);
                    }
                }
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
    return true;
}

function clearPreviousResult() {
    if(expression.indexOf("=")!==-1) {
        console.log('Hello');
        expression = "";
        divDisplay.textContent = "";
        currentValue = "0";
    }
}

function checkPrevCharIsOperator() {
    const char = expression[expression.length-2];
    console.log(char);
    if(char === '+' || char === '-' || char === '*' || char === '/') {
        return true;
    }
    return false;
}


function multipleZeros(btnText) {
    if(currentValue.length === 1 && btnText === '0') {
        return true;
    }
    return false;
}
