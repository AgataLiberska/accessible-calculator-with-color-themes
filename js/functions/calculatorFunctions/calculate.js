function calculate(input, operators) {
    let result;
    const divisionByZero = /.*\/0([^.]|$|\.(0{4,}.*|0{1,4}([^0-9]|$))).*/g;

    //if the last char is an operator, get rid of it
    if (operators.includes(input[input.length-1])) {
        input.pop();
    }
    
    //we can't divide by zero
    if (input.join('').match(divisionByZero)) {
        result = 'Not allowed';
    } else {
        result = new Function('return '+ input.join(''))();
    }    

    return result;
}

export default calculate;