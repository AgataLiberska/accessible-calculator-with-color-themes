function calculate(input, operators) {
    let result;

    if (operators.includes(input[input.length-1])) {
        input.pop();
    }

    result = new Function('return '+ input.join(''))();

    return result;
}

export default calculate;