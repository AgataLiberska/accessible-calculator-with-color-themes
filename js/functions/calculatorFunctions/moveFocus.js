function moveFocus(fromIndex, toIndex) {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btnsPerRow = 4;

    switch (toIndex) {
        case 'up': 
            //if we're in the first row, nothing happens
            if (fromIndex < btnsPerRow) {
                return;
            }
            // if we're on the last row, choose which button because they span 2
            else if (fromIndex === buttons.length-1) {
                buttons[fromIndex-3].focus();
            }
            //else we're moving indexes by 4
            else {
                buttons[fromIndex-btnsPerRow].focus();
            }
            break;
        case 'down':
            // if we're in the last row, nothing happens
            if (fromIndex === buttons.length-1|| fromIndex === buttons.length-2) {
                return;
            }
            else {
                buttons[fromIndex + btnsPerRow].focus();
            }
            break;
        case 'left':
            //if it's the first button, do nothing
            if (fromIndex === 0) {
                return;
            } else {
                buttons[fromIndex - 1].focus();
            }
            break;
        case 'right':
            //if it's the last button, do nothing
            if (fromIndex === buttons.length-1) {
                return;
            } else {
                buttons[fromIndex + 1].focus();
            }
            break;
    }
}

export default moveFocus;