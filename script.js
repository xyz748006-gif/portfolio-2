// Portfolio JavaScript
// The original portfolio uses CSS for its interactions; this file is ready for future enhancements.
document.addEventListener('DOMContentLoaded', () => {
  // Keep in-page navigation smooth and accessible.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  });
});
