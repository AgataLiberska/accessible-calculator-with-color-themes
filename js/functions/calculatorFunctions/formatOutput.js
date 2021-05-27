import findLastOperator from './findLastOperator.js';

function formatOutput(input, operators) {
    const output = [];
    console.log('input',input);
    
    if (!input.length) {
        return '0';
    } 

    // IF THERE ARE OPERATORS IN THE INPUT, separate the numbers out
    else if (input.some(item => operators.indexOf(item) !== -1)) {
        let startSlice = 0;
        let endSlice = 0;

        for (let i = 0; i < input.length; i++) {
            if (operators.includes(input[i])) {
                endSlice = i;
                let num = Number(input.slice(startSlice, endSlice).join('')).toLocaleString('en-UK', {maximumFractionDigits: 20});
                output.push(num);
                output.push(input[i]);
        
                //reassign start slice 
                startSlice = i + 1;
            }
        }
        // don't forget the last number
        if (!operators.includes(input[input.length-1])) {
            const lastOperator = findLastOperator(input, operators);
            const lastNumber = input.slice(lastOperator + 1).join('');
            console.log('lastnumber', lastNumber);
            output.push(lastNumber);
        }
    } else if (input.includes('Not allowed')) {
        output.push('Not allowed');
    }
    //if no operators, just format the number    
    else {
        output.push(input.join(''));
    }

    // if (input[input.length-1] === '.') {
    //     output.push('.');
    // }

    // and display
    console.log(output);
    return output.length > 0 ? output.join('') : '0';
}

export default formatOutput;