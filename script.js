// Handle simple page navigation
const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

const toPage2Btn = document.getElementById("to-page-2");
const toPage3Btn = document.getElementById("to-page-3");
const cakeImage = document.getElementById("cake-image");
const birthdayTextEl = document.getElementById("birthday-text");

// Go from quote page to cake page
toPage2Btn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
});

// On second button: play fly-up, then show final text page
toPage3Btn.addEventListener("click", () => {
  // add fly-up animation class
  cakeImage.classList.remove("fly-in");
  cakeImage.classList.add("fly-up");

  // Wait for animation to finish (match CSS duration: 0.8s)
  setTimeout(() => {
    page2.classList.remove("active");
    page3.classList.add("active");
    startTypewriter();
  }, 800);
});

// Typewriter effect: text appears left to right
const birthdayMessage = "HAPPY BIRTHDAY MIMI";

function startTypewriter() {
  birthdayTextEl.textContent = "";
  let index = 0;

  const typingInterval = setInterval(() => {
    birthdayTextEl.textContent += birthdayMessage.charAt(index);
    index += 1;

    if (index >= birthdayMessage.length) {
      clearInterval(typingInterval);
    }
  }, 120); // typing speed in ms
}

