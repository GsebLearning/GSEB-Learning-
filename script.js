/* =====================================
   GSEB Smart Learning Portal
   script.js
===================================== */

// Welcome Message
window.onload = function () {
    setTimeout(() => {
        alert("📚 Welcome to GSEB Smart Learning Portal!");
    }, 500);
};

// Start Learning Button
const startButton = document.querySelector(".hero button");

if (startButton) {
    startButton.addEventListener("click", function () {
        alert("🚀 Let's Start Learning!");
    });
}

// Card Animation
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Dark Mode
let dark = false;

function toggleDarkMode() {
    if (!dark) {
        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";
        dark = true;
    } else {
        document.body.style.background =
            "linear-gradient(135deg,#4facfe,#00f2fe)";
        document.body.style.color = "#222";
        dark = false;
    }
}

// Scroll Animation
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "1";
    }
});

// Today's Date
const today = new Date();
console.log("Today's Date:", today.toDateString());

// Future Features
// Language Switch
// Quiz Engine
// Games
// Firebase Login
// AI Tutor
// Teacher Panel
