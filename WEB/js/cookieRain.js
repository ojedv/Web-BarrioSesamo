function startCookieRain() {
  setInterval(() => {
    const cookie = document.createElement("img");
    cookie.src = "img/cursor/cookie.png"; 
    cookie.classList.add("cookie-rain");

    const size = Math.random() * 20 + 30; // Tamaño entre 30 y 50px
    const duration = Math.random() * 3 + 4; // Duración de caída entre 4 y 7s
    const left = Math.random() * window.innerWidth;

    cookie.style.left = `${left}px`;
    cookie.style.width = `${size}px`;
    cookie.style.animationDuration = `${duration}s`;

    document.body.appendChild(cookie);

    setTimeout(() => cookie.remove(), duration * 1000);
  }, 600); // Una galleta cada 600ms
}

document.addEventListener("DOMContentLoaded", startCookieRain);
