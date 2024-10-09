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
