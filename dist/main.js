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

// Submit button functionality for sending enquiry
document.getElementById('submit-button').addEventListener('click', function () {
  // Gather form data
  let formData = new FormData(document.getElementById('contact-form'));

  // Make an AJAX request to your server-side script
  fetch('/submitForm', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      // Handle response from the server (e.g., show a success message)
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
    });
});
