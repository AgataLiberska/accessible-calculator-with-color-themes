import doubleDecimal from './calculatorFunctions/doubleDecimal.js';
import formatOutput from './calculatorFunctions/formatOutput.js';
import formatResult from './calculatorFunctions/formatResult.js';
import updateDisplay from './calculatorFunctions/updateDisplay.js';
import calculate from './calculatorFunctions/calculate.js';
import getDigitCount from './calculatorFunctions/getDigitCount.js';

const operators = ['+', '-', '/', '*'];
const maxLength = 17;
let input = [];
let result;

function calculator(btn) {
    switch (btn.type) {
        case 'number':
            if (getDigitCount(input) >= maxLength) {
                return;
            }
            // if the input is 0, get rid of that 0
            else if (input.length === 1 && input[0] === 0) {
                input.pop();
            } 
            else if (input.length === 1 && input[0] === result) {
                input = [];
            }
            input.push(btn.value);
            updateDisplay(formatOutput(input, operators));
            break;
        case 'operator':
            if (getDigitCount(input) >= maxLength) {
                return;
            }
            else if ([...operators, '.'].includes(input[input.length-1])) {
                // if the last char is an operator, replace it
                input.pop();
            } else if (input.length === 1 && input[0] === 'Not allowed') {
                input = [];
                input.push(0);
            }
            input.push(btn.value);
            updateDisplay(formatOutput(input, operators));
            break;
        case 'decimal':
            if (getDigitCount(input) >= maxLength) {
                return;
            }
            else if (!input.length)  {
                input.push(0);
                input.push(btn.value);
            } 
            else if (input.length === 1 && input[0] === result) {
                input = [];
                input.push(0);
                input.push(btn.value);
            } 
            else if (operators.includes(input[input.length-1])) {
                input.push(0);
                input.push(btn.value);
            }
            else if (doubleDecimal(input, operators)) {
                return;
            } 
            else {
                input.push(btn.value);
            }
            updateDisplay(formatOutput(input, operators));
            break;
        case 'delete':
            input.pop();
            updateDisplay(formatOutput(input, operators));
            break;
        case 'reset':
            input = [];
            updateDisplay(formatOutput(input, operators));
            break;
        case 'calculate':
            if (input.length === 0) {
                return;
            } else {
                result = calculate(input, operators);
                input = [];
                input.push(result);
                updateDisplay(formatResult(result, maxLength));
            }
    }
}

export default calculator;