// Select the theme toggle button and the body element
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Add event listener for the toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');

    // Update the theme icon (moon for dark, sun for light)
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
