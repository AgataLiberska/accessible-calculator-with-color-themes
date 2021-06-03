function getDigitCount(input) {
    if (!isNaN(input)) {
        return input.toString().length;
    } else {
        return input.join('').length;
    }
}

export default getDigitCount;