function updateDisplay(input) {
    const display = document.getElementById('display');

    if (input.length > 15) {
        display.style.fontSize = '1.75rem';
    }

    display.innerText = input;
}

export default updateDisplay;