/* =============================
   MOBILE MENU
============================= */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("menu-open");
});

/* Close menu when a link is clicked */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("menu-open");
  });
});


/* =============================
   SCROLL ANIMATION (SERVICES)
============================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".service-card").forEach(card => {
  observer.observe(card);
});

/* =============================
   PWA PERFORMANCE
============================= */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// BACK TO TOP BUTTON
const backToTop = document.createElement("button");
backToTop.className = "back-to-top";
backToTop.innerHTML = "↑";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "flex" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/2348134111639";
whatsappBtn.target = "_blank";
whatsappBtn.className = "whatsapp-btn";
whatsappBtn.innerHTML = "💬"; // or WhatsApp icon
document.body.appendChild(whatsappBtn);

