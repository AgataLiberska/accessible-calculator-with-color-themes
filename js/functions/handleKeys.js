import pressButton from './calculatorFunctions/pressButton.js';

function handleKeys(e) {
    const buttons = document.querySelectorAll('button');

    if (e.key === 'Enter') {
        e.preventDefault();
        pressButton(document.getElementById('='));
        return;
    }

    buttons.forEach(button => {
        if (button.id === e.key) {
            pressButton(button);
        }
    });
}

export default handleKeys;