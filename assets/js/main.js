// ============================================
// CYBERVAULT AI — Main JavaScript
// ============================================

// ---- NAVBAR ----
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar?.classList.add("scrolled");
  } else {
    navbar?.classList.remove("scrolled");
  }
});

// Mobile Menu
hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
  });
});

// ---- COUNTER ANIMATION ----
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach(el => {
    const target = parseInt(el.dataset.target);

    if (isNaN(target)) return;

    const duration = 2000;
    const step = target / (duration / 16);

    let current = 0;

    const timer = setInterval(() => {
      current += step;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      el.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

// ---- FADE IN OBSERVER ----
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

// ---- HERO COUNTERS ----
const heroSection = document.querySelector(".hero");

if (heroSection) {
  const heroObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounters();
      heroObserver.disconnect();
    }
  });

  heroObserver.observe(heroSection);

  setTimeout(animateCounters, 500);
}

// ---- MINI RISK ASSESSMENT ----
let riskScore = 0;
let riskCount = 0;

const riskQuestions = [
  "Do you use Multi-Factor Authentication (MFA)?",
  "Do you use unique passwords for every account?",
  "Do you regularly update your software/OS?",
  "Do you use a password manager?"
];



// ---- COPY TO CLIPBOARD ----
window.copyToClipboard = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const originalText = btn.innerHTML;

      btn.innerHTML = "✅ Copied";

      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  });
};

window.answerRisk = function(idx, val, btn) {
  alert("Clicked: " + val);
};

