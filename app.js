const inputs = document.querySelectorAll('input');
const body = document.getElementById('body');

inputs.forEach(input => {
    input.addEventListener('change', e => {
        body.classList = `${e.target.value}`;
    })
})