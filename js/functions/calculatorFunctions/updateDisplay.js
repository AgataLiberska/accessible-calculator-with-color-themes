function updateDisplay(input) {
    const display = document.getElementById('display');

    if ( window.innerWidth < 500 ) {
        if (input.length > 14) {
            display.style.fontSize = '1.25rem';
        } else if (input.length > 10) {
            display.style.fontSize = '1.5rem';
        } else if (input.length <= 10 ) {
            display.style.fontSize = '2rem';
        }
    } else {
        if (input.length > 17 ) {
            display.style.fontSize = '2rem';
        } else if (input.length > 12) {
            display.style.fontSize = '2.5rem';
        } else if (input.length <= 12) {
            display.style.fontSize = '3rem';
        }
    }

    display.innerText = input;
}

export default updateDisplay;