import buttons from '../buttons.js';

import doubleDecimal from './calculatorFunctions/doubleDecimal.js';
import formatInput from './calculatorFunctions/formatInput.js';
import updateDisplay from './calculatorFunctions/updateDisplay.js';

const operators = ['+', '-', '/', '*'];
let input = [];


function handleClick(e) {
    
    buttons.forEach(btn => {
        if (btn.name === e.target.id) {
            switch (btn.type) {
                case 'number':
                    // if the input is 0, get rid of that 0
                    if (input.length === 1 && input[0] === 0) {
                        input.pop();
                    }
                    input.push(btn.value);
                    updateDisplay(formatInput(input, operators));
                    break;
                case 'operator':
                    if ([...operators, '.'].includes(input[input.length-1])) {
                        // if the last char is an operator, replace it
                        input.pop();
                        input.push(btn.value);
                    } else {
                        // make sure there is no double decimal
                        if (btn.value === '.' && doubleDecimal(input, operators)) {
                            return;
                        } else if (btn.value === '.' && !input.length) {
                            input.push(0);
                            input.push(btn.value);
                        } else {
                            input.push(btn.value);
                        }
                    }
                    updateDisplay(formatInput(input, operators));
                    break;
                case 'delete':
                    input.pop();
                    updateDisplay(formatInput(input, operators));
                    break;
                case 'reset':
                    input = [];
                    updateDisplay(formatInput(input, operators));
                    break;
                case 'calculate':
                    // IF THE LAST INPUT WAS AN OPERATOR THEN GET RID OF IT
                    let result = (new Function('return '+ input.join(''))());
                    input = [];
                    updateDisplay(result);
            }
        }
    })

    
}

export default handleClick;