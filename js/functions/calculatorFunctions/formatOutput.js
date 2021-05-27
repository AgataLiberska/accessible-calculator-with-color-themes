import findLastOperator from './findLastOperator.js';

function formatOutput(input, operators) {
    const output = [];

    // IF THERE ARE OPERATORS IN THE INPUT, separate the numbers out
    if (input.some(item => operators.indexOf(item) !== -1)) {
        let startSlice = 0;
        let endSlice = 0;

        for (let i = 0; i < input.length; i++) {
            if (operators.includes(input[i])) {
                endSlice = i;
                let num = Number(input.slice(startSlice, endSlice).join('')).toLocaleString('en-UK');
                output.push(num);
                output.push(input[i]);
        
                //reassign start slice 
                startSlice = i + 1;
            }
        }
        // don't forget the last number
        if (!operators.includes(input[input.length-1])) {
            const lastOperator = findLastOperator(input, operators);
            const lastNumber = Number(input.slice(lastOperator + 1).join('')).toLocaleString();
            output.push(lastNumber);
        }
    } 
    //if no operators, just format the number    
    else {
        output.push(Number(input.join('')).toLocaleString('en-UK'));
    }

    if (input[input.length-1] === '.') {
        output.push('.');
    }

    // and display
    return output.length > 0 ? output.join('') : '0';
}

export default formatOutput;