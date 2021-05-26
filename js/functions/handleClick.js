import buttons from '../buttons.js';
import calculator from './calculator.js';

function handleClick(e) {
    buttons.forEach(btn => {
        if (btn.name === e.target.id) {
            calculator(btn);
        }
    })
}

export default handleClick;