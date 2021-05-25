import buttons from '../buttons.js';

function createButtons() {
    const keypad = document.getElementById('keypad');

    buttons.forEach(item => {
        let newBtn = document.createElement('button');
        newBtn.innerHTML = item.symbol;
        newBtn.classList = item.class;
        newBtn.setAttribute('id', item.name);
        keypad.appendChild(newBtn);
    })
}

export default createButtons;