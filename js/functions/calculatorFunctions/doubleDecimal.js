import findLastOperator from './findLastOperator.js';

function doubleDecimal(input, operators) {
    const lastOperator = findLastOperator(input, operators);

    const lastNumberArr = lastOperator > 0 ? input.slice(lastOperator+1) : input;
    const lastNumber = lastNumberArr.join('');
    if (lastNumber.includes('.')) {
        return true;
    } 
    
    return false;
}

export default doubleDecimal;