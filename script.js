const nav = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Navbar sticky avec effet au scroll
window.addEventListener("scroll", () => {
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});

// Menu mobile
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Animations au scroll avec IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");
const fadeUpElements = document.querySelectorAll(".fade-up");
const zoomElements = document.querySelectorAll(".zoom-in");
const slideLeftElements = document.querySelectorAll(".slide-left");
const slideRightElements = document.querySelectorAll(".slide-right");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

const fadeUpObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        fadeUpObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

const zoomObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        zoomObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

const slideLeftObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        slideLeftObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

const slideRightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        slideRightObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

// Observer tous les �l�ments
revealElements.forEach((el) => revealObserver.observe(el));
fadeUpElements.forEach((el) => fadeUpObserver.observe(el));
zoomElements.forEach((el) => zoomObserver.observe(el));
slideLeftElements.forEach((el) => slideLeftObserver.observe(el));
slideRightElements.forEach((el) => slideRightObserver.observe(el));

// Animation de texte typing pour le r�le
const roleEl = document.querySelector(".hero-role");
const fullText = "Support IT | Donnees | Web | Automation";

if (roleEl) {
  roleEl.textContent = "";
  let index = 0;
  const speed = 75;

  const type = () => {
    if (index <= fullText.length) {
      roleEl.textContent = fullText.slice(0, index);
      roleEl.classList.add("text-typing");
      index += 1;
      setTimeout(type, speed);
    } else {
      roleEl.classList.remove("text-typing");
      setTimeout(() => {
        index = 0;
        roleEl.textContent = "";
        type();
      }, 4000);
    }
  };

  type();
}

// Micro-interactions : ajout de classes pour animations au clic
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 150);
  });
});

// Animation flottante l�g�re sur les cartes au hover (optionnel)
document
  .querySelectorAll(".feature-card, .project-card, .service-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.animation = "float 2s ease-in-out infinite";
    });
    card.addEventListener("mouseleave", () => {
      card.style.animation = "";
    });
  });

// D�finition de l'animation float
const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
`;
document.head.appendChild(style);
