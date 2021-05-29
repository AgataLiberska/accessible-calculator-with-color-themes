import buttons from '../buttons.js';

function createButtons() {
    const keypad = document.getElementById('keypad');
    const btnsInRow = 4;
    let createdBtns = 0;

    buttons.forEach(item => {
        if (createdBtns % btnsInRow === 0) {
            let newRow = document.createElement('div');
            newRow.setAttribute('role', 'row');
            newRow.classList = 'calc__keypad__row';
            keypad.appendChild(newRow);
        }

        const lastRow = document.querySelector('.calc__keypad__row:last-child');

        let newBtn = document.createElement('button');
        newBtn.innerHTML = item.symbol;
        newBtn.classList = item.class;
        newBtn.setAttribute('id', item.name);

        if (createdBtns === 0) {
            newBtn.setAttribute('tabindex', '0');
        } else {
            newBtn.setAttribute('tabindex', '-1');
        }
        
        lastRow.appendChild(newBtn);

        createdBtns ++;
    })
}

export default createButtons;