function pressButton(btn) {
    btn.focus();
    btn.classList.add('active');
    btn.click();
    setTimeout(()=> {
        btn.classList.remove('active');
    }, 200);
}

export default pressButton;