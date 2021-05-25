function doubleDecimal(output) {
    const operators = [output.lastIndexOf('+'), output.lastIndexOf('-'), output.lastIndexOf('/'), output.lastIndexOf('*')];
    
    const lastOperator = operators.reduce((last, operator) => {
        if (last < operator) {
            return operator;
        } return last;
    });

    const lastNumberArr = lastOperator > 0 ? output.slice(lastOperator) : output;

    if (lastNumberArr.includes('.')) {
        return true;
    } 

    return false;
}

export default doubleDecimal;