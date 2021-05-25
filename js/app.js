import { setTheme, setInitialTheme } from './themeSwitcher.js';

const inputs = document.querySelectorAll('input');


setInitialTheme();

inputs.forEach(input => {
    input.addEventListener('input', e => {
        setTheme(e.target.value);
    })
})