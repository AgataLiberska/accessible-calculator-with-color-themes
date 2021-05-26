import buttons from '../buttons.js';
import doubleDecimal from './calculatorFunctions/doubleDecimal.js';

let output = [];
let result = [];

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
                        if (btn.value === '.' && doubleDecimal(output)) {
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
                case 'calculate':
                    let sum = (new Function('return '+ output.join(''))());
                    output = [sum];
                    console.log(output);
                    updateDisplay();
            }
        }
    })

    
}

export default handleClick;