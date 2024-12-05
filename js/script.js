document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links
  const sections = document.querySelectorAll('.content-section'); // Select all sections

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      // Remove active class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));
      // Add active class to the clicked link
      link.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));
      // Show the section corresponding to the clicked link
      const targetSection = document.querySelector(link.getAttribute('href')); // Find section by href
      targetSection.classList.remove('hidden');
    });
  });
});

function openTab(event, projectName) {
  // Hide all tab content
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('active');
  });

  // Remove active class from all tab buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Show the clicked tab's content and make the tab button active
  document.getElementById(projectName).classList.add('active');
  event.currentTarget.classList.add('active');
}
