// Smooth scrolling when clicking on navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic greeting message based on the time of the day
function displayGreeting() {
  const greetingElement = document.getElementById("hero");
  const currentHour = new Date().getHours();
  let greetingMessage = "";

  if (currentHour < 12) {
    greetingMessage = "Good Morning! Welcome to Creative Minds";
  } else if (currentHour < 18) {
    greetingMessage = "Good Afternoon! Welcome to Creative Minds";
  } else {
    greetingMessage = "Good Evening! Welcome to Creative Minds";
  }

  greetingElement.querySelector("h2").textContent = greetingMessage;
}

displayGreeting();
// Show or hide the "Back to Top" button based on scroll position
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll smoothly to the top when the button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// Toggle dark mode on and off
// Toggle dark mode on and off
const toggleSwitch = document.querySelector("#darkModeToggle input");
const bodyElement = document.body;

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    bodyElement.classList.add("dark-mode");
  } else {
    bodyElement.classList.remove("dark-mode");
  }
});
// Lightbox functionality for images
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach((img) => {
  img.addEventListener("click", function () {
    lightbox.style.display = "flex";
    const imgElement = document.createElement("img");
    imgElement.src = this.src;
    lightbox.innerHTML = ""; // Clear existing content
    lightbox.appendChild(imgElement);
  });
});
// Close lightbox on click
lightbox.addEventListener("click", function () {
  lightbox.style.display = "none";
});
// Simple form validation for contact form
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    form.reset(); // Reset the form fields
  }
});
// Display current year in footer
const footerYear = document.getElementById("footerYear");
footerYear.textContent = new Date().getFullYear();

window.addEventListener("resize", () => {
  // Example: Adjust the hero section based on the window size
  const heroSection = document.getElementById("hero");
  if (window.innerWidth < 768) {
    heroSection.style.height = "300px"; // Adjust height for smaller screens
  } else {
    heroSection.style.height = "500px"; // Default height
  }
});
const slides = document.querySelectorAll(".carousel .slide");
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  slides[index].style.display = "block";
}
document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Show the first slide initially
showSlide(currentSlide);
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    const dataContainer = document.getElementById("dataContainer");
    data.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = item.name;
      dataContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const navToggle = document.getElementById("navToggle");
const navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
