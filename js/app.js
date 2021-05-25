import { setTheme, setInitialTheme } from './functions/themeSwitcher.js';
import createButtons from './functions/createButtons.js';
import handleClick from './functions/handleClick.js';

createButtons();
setInitialTheme();

const inputs = document.querySelectorAll('input[name="theme"]');
const btnEls = document.querySelectorAll('button');



inputs.forEach(input => {
    input.addEventListener('input', e => {
        setTheme(e.target.value);
    })
})

btnEls.forEach(button => {
    button.addEventListener('click', handleClick);
})