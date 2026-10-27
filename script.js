
const scene = document.getElementById("scene");
const envelope = document.getElementById("envelope");
const clickMe = document.getElementById("clickMe");

// Toggle the envelope so the letter can be put away again.
envelope.addEventListener("click", () => {
  const isOpen = scene.classList.toggle("open");
  envelope.setAttribute("aria-expanded", String(isOpen));
  envelope.setAttribute(
    "aria-label",
    isOpen ? "Close your birthday letter" : "Open your birthday letter"
  );
});

// Add a little celebration when opening the separate video page.
clickMe.addEventListener("click", () => {
  createHearts();
});

// Create floating hearts
function createHearts() {
  const symbols = ["💗", "💕", "💖", "♡", "✨"];

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${16 + Math.random() * 24}px`;
    heart.style.animationDelay = `${Math.random() * 1.5}s`;

    document.body.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
}
