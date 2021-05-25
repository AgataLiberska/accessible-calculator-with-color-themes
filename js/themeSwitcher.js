function setTheme(theme) {
    const body = document.getElementById('body');
    body.classList = theme;
}

function setInitialTheme() {
    const darkInput = document.getElementById('dark');
    const lightInput = document.getElementById('light');
    const neonInput = document.getElementById('neon');
    console.log(darkInput);

    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (userPrefersLight) {
        lightInput.setAttribute('checked', '');
        setTheme('light-theme');
    } else {
        darkInput.setAttribute('checked', '');
        setTheme('dark-theme');
    }
}

export { setTheme, setInitialTheme };