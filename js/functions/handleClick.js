import buttons from '../buttons.js';


let output = [];
let result = [];

function doubleDecimal() {
    const operators = [output.lastIndexOf('+'), output.lastIndexOf('-'), output.lastIndexOf('/'), output.lastIndexOf('*')];
    
    const lastOperator = operators.reduce((last, operator) => {
        if (last < operator) {
            return operator;
        } return last;
    });

    const lastNumberArr = lastOperator > 0 ? output.slice(lastOperator) : output;

    if (lastNumberArr.includes('.')) {
        return true;
    } 

    return false;
}

function updateDisplay() {
    const display = document.getElementById('display');

    display.innerText = output.length > 0 ? output.join('') : '0';
}

function handleClick(e) {
    
    buttons.forEach(btn => {
        if (btn.name === e.target.id) {
            switch (btn.type) {
                case 'number':
                    // if the output is 0, get rid of that 0
                    if (output.length === 1 && output[0] === 0) {
                        output.pop();
                        result.pop();
                    }
                    output.push(btn.value);
                    result.push(btn.value);
                    updateDisplay();
                    break;
                case 'operator':
                    if (['+','-','.','/','*'].includes(output[output.length-1])) {
                        // if the last char is an operator, replace it
                        output.pop();
                        output.push(btn.value);
                        result.pop();
                        result.push(btn.value);
                    } else {
                        // make sure there is no double decimal
                        if (btn.value === '.' && doubleDecimal()) {
                            return;
                        } else if (btn.value === '.' && !output.length) {
                            output.push(0);
                            output.push(btn.value);
                            result.push(0);
                            result.push(btn.value);
                        } else {
                            output.push(btn.value);
                            result.push(btn.value);
                        }
                    }
                    updateDisplay();
                    break;
                case 'delete':
                    output.pop();
                    result.pop();
                    updateDisplay();
                    break;
                case 'reset':
                    output = [];
                    result = [];
                    updateDisplay();
                    break;
            }
        }
    })

    
}

export default handleClick;