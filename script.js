// Loader
window.onload = function() {
  document.getElementById("loader").style.display = "none";
};

// Scroll Reveal
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// WhatsApp
function whatsapp() {
  window.open("https://wa.me/918449816393", "_blank");
}



document.querySelectorAll("a, button, .card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    ring.style.transform = "scale(1.8)";
    ring.style.borderColor = "#ff00cc";
  });

  el.addEventListener("mouseleave", () => {
    ring.style.transform = "scale(1)";
    ring.style.borderColor = "#00f2fe";
  });
});

const tea = document.querySelector(".cursor-tea");

let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

// Track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth animation
function animate() {
  posX += (mouseX - posX) * 0.2;
  posY += (mouseY - posY) * 0.2;

  tea.style.left = posX + "px";
  tea.style.top = posY + "px";

  requestAnimationFrame(animate);
}
animate();