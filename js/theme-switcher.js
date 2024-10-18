document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Verificar el estado del switch al cargar la página
    if (localStorage.getItem('theme') === 'light') {
        themeStylesheet.setAttribute('href', '/css/light-mode.css');
        themeSwitch.checked = true;
    } else {
        themeStylesheet.setAttribute('href', '/css/dark-mode.css');
        themeSwitch.checked = false;
    }

    themeSwitch.addEventListener('change', function() {
        if (themeSwitch.checked) {
            themeStylesheet.setAttribute('href', '/css/light-mode.css');
            localStorage.setItem('theme', 'light');
        } else {
            themeStylesheet.setAttribute('href', '/css/dark-mode.css');
            localStorage.setItem('theme', 'dark');
        }
    });
});