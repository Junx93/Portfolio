const texts = [
    "Criador de Soluções Web",
    "Desenvolvedor Full Stack",
    "Criamos seu website",
    "Aplicações modernas e escaláveis",
    "Soluções digitais profissionais"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

const element = document.getElementById("terminal-text");

function typeEffect() {
    const currentText = texts[index];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    element.textContent = currentText.substring(0, charIndex);

    let speed = isDeleting ? 50 : 100;

    // terminou de digitar
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        speed = 1500;
    }

    // terminou de apagar
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);