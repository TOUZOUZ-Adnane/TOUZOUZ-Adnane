function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollLeft() {
  const container = document.querySelector('.projects-container');
  container.scrollBy({
    left: -300, // Adjust this value as needed for scroll amount
    behavior: 'smooth' // Smooth scrolling
  });
}

function scrollRight() {
  const container = document.querySelector('.projects-container');
  container.scrollBy({
    left: 300, // Adjust this value as needed for scroll amount
    behavior: 'smooth' // Smooth scrolling
  });
}

// Add event listeners to the buttons
document.querySelector('.left').addEventListener('click', scrollLeft);
document.querySelector('.right').addEventListener('click', scrollRight);


