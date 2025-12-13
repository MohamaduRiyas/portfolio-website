// Theme toggle with persistence and system preference support
let themeToggle;
const body = document.body;


function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
        if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
    } else {
        body.classList.remove('dark-mode');
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        if (themeToggle) themeToggle.setAttribute('aria-pressed', 'false');
    }
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
        return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    themeToggle = document.querySelector('.theme-toggle');
    initTheme();

    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const nextTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(nextTheme);
        localStorage.setItem('theme', nextTheme);
    });

    // Update theme if user system preference changes (only if user hasn't saved a preference)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const saved = localStorage.getItem('theme');
            if (!saved) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
});
