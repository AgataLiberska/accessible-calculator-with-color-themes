function findLastOperator(haystack, operatorArr) {
    const operatorIndexes = [];

    operatorArr.forEach(item => {
        operatorIndexes.push(haystack.lastIndexOf(item));
    })

    const lastOperator = operatorIndexes.reduce((last, operator) => {
        if (last < operator) {
            return operator;
        } return last;
    })

    return lastOperator;
}

export default findLastOperator;