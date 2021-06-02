import pressButton from './calculatorFunctions/pressButton.js';
import findFocusedIndex from './calculatorFunctions/findFocusedIndex.js';
import moveFocus from './calculatorFunctions/moveFocus.js';

function handleKeys(e) {
    const buttons = document.querySelectorAll('.js-calc-btn');
    const closeNUX = document.getElementById('close-nux-btn');
    
    if (e.key === 'Enter') {
        if (document.activeElement === closeNUX) {
            return;
        } else {
            e.preventDefault();
            pressButton(document.getElementById('='));
        }
    } 
    
    else if (e.keyCode >= 37 && e.keyCode <= 40) {
        // find which key (id) is currently focused
        let currentIndex = findFocusedIndex();
        // move focus

        if (currentIndex != undefined) {
            switch (e.key) {
                case 'ArrowDown':
                    moveFocus(currentIndex, 'down');
                    break;
                case 'ArrowUp':
                    moveFocus(currentIndex, 'up');
                    break;
                case 'ArrowLeft':
                    moveFocus(currentIndex, 'left');
                    break;
                case 'ArrowRight':
                    moveFocus(currentIndex, 'right');
                    break;
            }
        }
    } 
    
    else if (e.key === 'Home') {
        buttons[0].focus();
    } 
    
    else if (e.key === 'End') {
        buttons[buttons.length-1].focus();
    }

    else {
        buttons.forEach(button => {
            if (button.id === e.key) {
                pressButton(button);
            }
        });
    }
}

export default handleKeys;