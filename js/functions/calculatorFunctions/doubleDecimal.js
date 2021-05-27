import findLastOperator from './findLastOperator.js';

function doubleDecimal(input, operators) {
    const lastOperator = findLastOperator(input, operators);

    const lastNumberArr = lastOperator > 0 ? input.slice(lastOperator+1) : input;
    const lastNumber = Number(lastNumberArr.join(''));

    if (lastNumber % 1 !== 0) {
        return true;
    } 
    
    return false;
}

export default doubleDecimal;