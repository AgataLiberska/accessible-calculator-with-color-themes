function calculate(input, operators) {
    let result;
    const divisionByZero = /.*\/0([^.]|$|\.(0{4,}.*|0{1,4}([^0-9]|$))).*/g;

    if (operators.includes(input[input.length-1])) {
        input.pop();
    }
    
    // if (input.join('').match(divisionByZero)) {
    //     result = 'Not allowed';
    // } else {
        
    // }

    result = new Function('return '+ input.join(''))();

    return result;
}

export default calculate;