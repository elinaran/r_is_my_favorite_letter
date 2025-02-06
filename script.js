const reasons = [
    "Your smile makes my day brighter!",
    "You always know how to make me laugh.",
    "You support me no matter what.",
    "Your kindness inspires me every day.",
    "I love the way you care for others.",
    "You give the best hugs!",
    "Your passion and dedication amaze me.",
    "You are my safe place.",
    "I love how thoughtful you are.",
    "You make every moment special."
];

function generateReason() {
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").textContent = reasons[randomIndex];
}
