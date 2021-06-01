function findFocusedIndex() {
    const buttons = Array.from(document.querySelectorAll('.js-calc-btn'));
    
    const currentFocus = document.activeElement;
    let currentIndex;

    buttons.filter((btn, index) => {         
        if (btn === currentFocus) {
            currentIndex = index;
        }
    })

    return currentIndex;
}

export default findFocusedIndex;