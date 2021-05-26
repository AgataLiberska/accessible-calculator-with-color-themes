import findLastOperator from './findLastOperator.js';

function doubleDecimal(output, operators) {

    const lastOperator = findLastOperator(output, operators);

    const lastNumberArr = lastOperator > 0 ? output.slice(lastOperator+1) : output;
    const lastNumber = lastNumberArr.join('');
    console.log(lastNumber);
    if (lastNumber % 1 !== 0) {
        return true;
    } 

    return false;
}

export default doubleDecimal;