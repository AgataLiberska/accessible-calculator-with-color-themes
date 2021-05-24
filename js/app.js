const inputs = document.querySelectorAll('input');
const body = document.getElementById('body');


function setTheme(theme) {
    body.classList = theme;
}

function setInitialTheme() {
    const darkInput = document.getElementById('dark');
    const lightInput = document.getElementById('light');
    const neonInput = document.getElementById('neon');
    console.log(darkInput);

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if(userPrefersDark){
        darkInput.setAttribute('checked', '');
        setTheme('dark-theme');
    } else if (userPrefersLight) {
        lightInput.setAttribute('checked', '');
        setTheme('light-theme');
    } else {
        console.log('no-preference');
    }
}

setInitialTheme();

inputs.forEach(input => {
    input.addEventListener('input', e => {
        setTheme(e.target.value);
    })
})