import { setTheme, setInitialTheme } from './functions/themeSwitcher.js';
import createButtons from './functions/createButtons.js';

createButtons();
setInitialTheme();

import handleClick from './functions/handleClick.js';
import handleKeys from './functions/handleKeys.js';
const inputs = document.querySelectorAll('input[name="theme"]');
const btnEls = document.querySelectorAll('.js-calc-btn');
const firstGridBtn = document.querySelector('.js-calc-btn');
const NUX = document.getElementById('grid-nux');
const closeNUX = document.getElementById('close-nux-btn');

let mouseDown = false;

const showInstructions = () => {
    if (!mouseDown) {
        firstGridBtn.removeEventListener('focus', showInstructions);
        NUX.classList.remove('hidden');
        NUX.focus();
    }
}

const hideInstructions = () => {
    NUX.classList.add('hidden');
    firstGridBtn.focus();
}

inputs.forEach(input => {
    input.addEventListener('input', e => {
        setTheme(e.target.value);
    })
})

firstGridBtn.addEventListener('mousedown', () => {
    mouseDown = true;
})

firstGridBtn.addEventListener('mouseup', () => {
    mouseDown = false;
})

firstGridBtn.addEventListener('focus', showInstructions);

closeNUX.addEventListener('click', hideInstructions);

btnEls.forEach(button => {
    button.addEventListener('click', handleClick);
})

document.addEventListener('keydown', handleKeys);