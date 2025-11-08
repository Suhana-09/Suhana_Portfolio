// Chatbot Responses
const responses = {
  "hi": "Hello! 👋 I’m Suhana’s portfolio assistant. Ask me about my skills, projects, or resume.",
  "who are you": "I am Suhana, a CSE student (CGPA: 9.22) passionate about software development.",
  "skills": "I know Java, C, SQL, HTML, CSS, Git, and have strong DSA and OOP knowledge.",
  "projects": "I’ve built: 1) Alumni Management System, 2) Day Capsule Scheduler, 3) Voting System using Blockchain.",
  "resume": "Here’s my resume: <a href='resume.pdf' target='_blank'>View Resume</a>",
  "contact": "You can email me at suhanasuhana038@gmail.com or visit my LinkedIn profile."
};

function sendMessage() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let reply = responses[input] || "Hmm 🤔 Try asking about 'skills', 'projects', or 'resume'.";

  document.getElementById("chatlogs").innerHTML += `<div class="message user"><b>You:</b> ${input}</div>`;
  
  // Typing animation
  document.getElementById("chatlogs").innerHTML += `<div id="typing" class="message bot">Bot is typing...</div>`;
  let chatlogs = document.getElementById("chatlogs");
  chatlogs.scrollTop = chatlogs.scrollHeight;

  setTimeout(() => {
    document.getElementById("typing").remove();
    document.getElementById("chatlogs").innerHTML += `<div class="message bot"><b>Bot:</b> ${reply}</div>`;
    chatlogs.scrollTop = chatlogs.scrollHeight;
  }, 1000);

  document.getElementById("userInput").value = "";
}

// Toggle chatbot
function toggleChat() {
  let chatWindow = document.getElementById("chatbot-window");
  chatWindow.style.display = (chatWindow.style.display === "block") ? "none" : "block";
}

// Show main content after intro
window.onload = () => {
  setTimeout(() => {
    document.getElementById("main-content").classList.remove("hidden");
  }, 3000);
};

// Slide-in effect for sections
const rows = document.querySelectorAll(".row");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });
rows.forEach(row => observer.observe(row));

// Particle Background
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#2E8B57" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.4 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#4CAF50",
      "opacity": 0.3,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  },
  "retina_detect": true
});

// Navbar Active Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// Certificate carousel (fixed)
let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".cert-item");
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const offset = -currentSlide * 100;
  document.querySelector(".cert-slider").style.transform = `translateX(${offset}%)`;
}

// ===== Hamburger Navigation Toggle =====
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
// ===== Close menu when a link is clicked =====
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    overlay.classList.remove("active");
    navToggle.textContent = "☰";
  });
});


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  overlay.classList.toggle("active");
  navToggle.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("show");
  overlay.classList.remove("active");
  navToggle.textContent = "☰";
});
// ===== FORCE CHATBOT TO BOTTOM-LEFT (EVEN IF SCRIPTED) =====
const moveChatbotToLeft = () => {
  const chatbot = document.querySelector("iframe[title*='chat'], iframe[title*='Chat'], iframe[src*='chat'], div[style*='Ask me anything']");
  if (chatbot) {
    chatbot.style.left = "20px";
    chatbot.style.right = "auto";
    chatbot.style.bottom = "20px";
    chatbot.style.position = "fixed";
    chatbot.style.zIndex = "3000";
    chatbot.style.transform = "none";
  }
};

// initial check after load
window.addEventListener("load", () => {
  moveChatbotToLeft();

  // re-apply every second in case the widget re-injects styles
  setInterval(moveChatbotToLeft, 1000);
});

