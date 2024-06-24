// theme switch

document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme');
    const page = document.documentElement;

    if (currentTheme === 'dark') {
        page.classList.add('dark-theme');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            page.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            page.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});