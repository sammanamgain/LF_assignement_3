// Define the toggleTheme function
function toggleTheme() {
    document.body.classList.toggle('theme-dark')
    document.body.classList.toggle('theme-light')
}

// Add event listener to the button
document.getElementById('toggle').addEventListener('click', toggleTheme)
// Add event listener to the button
document.getElementById('togglemobile').addEventListener('click', toggleTheme)
