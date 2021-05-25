import { setTheme, setInitialTheme } from './functions/themeSwitcher.js';
import createButtons from './functions/createButtons.js';

const inputs = document.querySelectorAll('input[name="theme"]');
const buttons = document.querySelectorAll('button');

createButtons();
setInitialTheme();

inputs.forEach(input => {
    input.addEventListener('input', e => {
        setTheme(e.target.value);
    })
})

buttons.forEach(button => {
    button.addEventListener('click', handleCalculation);
})