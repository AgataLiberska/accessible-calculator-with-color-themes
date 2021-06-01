function moveFocus(fromIndex, toIndex) {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btnsPerRow = 4;
    const decimalBtnIndex = 12;
    const zeroBtnIndex = 13;
    const divideBtnIndex = 14;
    const multiplyBtnIndex = 15;

    switch (toIndex) {
        case 'up': 
            //if we're in the first row, nothing happens
            if (fromIndex < btnsPerRow) {
                return;
            }
            // if we're on the last btn which spans 2, go to /
            else if (fromIndex === buttons.length-1) {
                buttons[fromIndex-(btnsPerRow-1)].focus();
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
            // if . or 0, move to reset, / or x move to =
            else if (fromIndex === decimalBtnIndex || fromIndex === zeroBtnIndex) {
                buttons[buttons.length-2].focus();
            } else if (fromIndex === divideBtnIndex || fromIndex === multiplyBtnIndex) {
                buttons[buttons.length-1].focus();
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