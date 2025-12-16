/* =====================================================
   SERVICE MODAL LOGIC
===================================================== */
const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

function openService(title, description) {
  modalTitle.textContent = title;
  modalText.textContent = description;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

/* =====================================================
   MOBILE MENU TOGGLE
===================================================== */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */
const revealElements = document.querySelectorAll(
  ".service-card, .portfolio-item, section h2, section p"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* =====================================================
   BACK TO TOP BUTTON
===================================================== */
const backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =====================================================
   ACTIVE NAV LINK ON SCROLL
===================================================== */
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

/* =====================================================
   SAFETY CHECK (FOR MISSING ELEMENTS)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  if (!modal) console.warn("Modal element not found");
  if (!menuBtn) console.warn("Menu button not found");
});
