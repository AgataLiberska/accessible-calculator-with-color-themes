function doubleDecimal(output) {
    const operators = [output.lastIndexOf('+'), output.lastIndexOf('-'), output.lastIndexOf('/'), output.lastIndexOf('*')];
    
    const lastOperator = operators.reduce((last, operator) => {
        if (last < operator) {
            return operator;
        } return last;
    });

    const lastNumberArr = lastOperator > 0 ? output.slice(lastOperator) : output;
    const lastNumber = lastNumberArr.join('');
    if (lastNumber % 1 !== 0) {
        return true;
    } 

    return false;
}

export default doubleDecimal;