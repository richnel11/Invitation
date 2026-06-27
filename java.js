const badge = document.querySelector(".age-badge");
const colors = ["#3b4f45", "#789a82", "#c79b42", "#eee6d5"];

function createSparkle(index) {
    const sparkle = document.createElement("span");
    const angle = (index / 18) * Math.PI * 2;
    const distance = 90 + Math.random() * 120;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    sparkle.className = "party-sparkle";
    sparkle.style.setProperty("--left", `${centerX + Math.cos(angle) * 40}px`);
    sparkle.style.setProperty("--top", `${centerY + Math.sin(angle) * 40}px`);
    sparkle.style.setProperty("--move-x", `${Math.cos(angle) * distance}px`);
    sparkle.style.setProperty("--move-y", `${Math.sin(angle) * distance}px`);
    sparkle.style.setProperty("--size", `${8 + Math.random() * 9}px`);
    sparkle.style.setProperty("--duration", `${1.4 + Math.random() * 0.8}s`);
    sparkle.style.setProperty("--color", colors[index % colors.length]);

    document.body.appendChild(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove());
}

function launchBirthdayAnimation() {
    if (!badge) {
        return;
    }

    badge.classList.add("is-visible");

    for (let i = 0; i < 18; i += 1) {
        window.setTimeout(() => createSparkle(i), i * 45);
    }
}

window.addEventListener("load", launchBirthdayAnimation);
