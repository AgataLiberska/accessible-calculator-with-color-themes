import { setTheme, setInitialTheme } from './functions/themeSwitcher.js';
import createButtons from './functions/createButtons.js';
import handleClick from './functions/handleClick.js';
import handleKeys from './functions/handleKeys.js';

createButtons();
setInitialTheme();

const inputs = document.querySelectorAll('input[name="theme"]');
const btnEls = document.querySelectorAll('button');

const NUX = document.getElementById('grid-nux');
console.log(firstGridBtn);

inputs.forEach(input => {
    input.addEventListener('input', e => {
        setTheme(e.target.value);
    })
})

firstGridBtn.addEventListener('focus', e => {

    NUX.classList.remove('hidden');
})

btnEls.forEach(button => {
    button.addEventListener('click', handleClick);
})

document.addEventListener('keydown', handleKeys);