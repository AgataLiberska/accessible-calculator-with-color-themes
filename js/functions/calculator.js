import doubleDecimal from './calculatorFunctions/doubleDecimal.js';
import formatOutput from './calculatorFunctions/formatOutput.js';
import updateDisplay from './calculatorFunctions/updateDisplay.js';
import calculate from './calculatorFunctions/calculate.js';

const operators = ['+', '-', '/', '*'];
let input = [];
let result;

function calculator(btn) {
    switch (btn.type) {
        case 'number':
            // if the input is 0, get rid of that 0
            if (input.length === 1 && input[0] === 0) {
                input.pop();
            } else if (input.length === 1 && input[0] === result) {
                input = [];
            }
            input.push(btn.value);
            break;
        case 'operator':
            if ([...operators, '.'].includes(input[input.length-1])) {
                // if the last char is an operator, replace it
                input.pop();
            }
            input.push(btn.value);
            break;
        case 'decimal':
            if (doubleDecimal(input, operators)) {
                return;
            } else if (!input.length) {
                input.push(0);
            } else if (input.length === 1 && input[0] === result) {
                input = [];
                input.push(0);
            }
            input.push(btn.value);
            break;
        case 'delete':
            input.pop();
            break;
        case 'reset':
            input = [];
            break;
        case 'calculate':
            // IF THE LAST INPUT WAS AN OPERATOR THEN GET RID OF IT
            result = calculate(input, operators);
            input = [];
            input.push(result);
    }
    updateDisplay(formatOutput(input, operators));
}

export default calculator;