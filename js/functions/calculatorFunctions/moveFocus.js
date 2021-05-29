function moveFocus(fromHere, toThere) {
    const buttons = Array.from(document.querySelectorAll('button'));
    const btnsPerRow = 4;

    switch (toThere) {
        case 'up': 
            //if we're in the first row, nothing happens
            if (fromHere < btnsPerRow) {
                return;
            }
            // if we're on the last row, choose which button because they span 2
            else if (fromHere === buttons.length-1) {
                buttons[fromHere-3].focus();
            }
            //else we're moving indexes by 4
            else {
                buttons[fromHere-btnsPerRow].focus();
            }
            break;
        case 'down':
            // if we're in the last row, nothing happens
            if (fromHere === buttons.length-1|| fromHere === buttons.length-2) {
                return;
            }
            else {
                buttons[fromHere + btnsPerRow].focus();
            }
            break;
        case 'left':
            //if it's the first button, do nothing
            if (fromHere === 0) {
                return;
            } else {
                buttons[fromHere - 1].focus();
            }
            break;
        case 'right':
            //if it's the last button, do nothing
            if (fromHere === buttons.length-1) {
                return;
            } else {
                buttons[fromHere + 1].focus();
            }
            break;
    }
}

export default moveFocus;