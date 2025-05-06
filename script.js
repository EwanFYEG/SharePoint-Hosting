document.addEventListener("DOMContentLoaded", function () {
    const introText = document.querySelector(".bouncy-text");
    introText.innerHTML = introText.textContent
        .split("")
        .map((letter, index) => `<span style="animation-delay: ${index * 0.1}s">${letter}</span>`)
        .join("");
});

// Define the bouncing animation with CSS dynamically
const style = document.createElement("style");
style.innerHTML = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
    .bouncy-text span {
        display: inline-block;
        animation: bounce 0.6s infinite alternate ease-in-out;
    }
`;
document.head.appendChild(style);
