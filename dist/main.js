// Dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const html = document.documentElement;

// Check if the user has a preference for dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the initial mode based on user preference
if (prefersDarkMode) {
  body.classList.add('dark');
  html.classList.add('dark');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  html.classList.toggle('dark');
});

