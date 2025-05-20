document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");
    if (
      url &&
      !url.startsWith("#") &&
      !url.startsWith("mailto:") &&
      !url.startsWith("tel:") &&
      !link.hasAttribute("target")
    ) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const screen = document.getElementById("transitionScreen");
        screen.classList.add("show");

        // Limpiar cookies anteriores
        screen.innerHTML = "";

        // Crear galletitas
        for (let i = 0; i < 50; i++) {
          const cookie = document.createElement("div");
          cookie.classList.add("cookie");
          const size = Math.random() * 20 + 10;
          cookie.style.width = `${size}px`;
          cookie.style.height = `${size}px`;
          cookie.style.left = `${Math.random() * 100}vw`;
          cookie.style.top = `${Math.random() * 100 + 100}vh`; // Aparecen fuera de pantalla
          screen.appendChild(cookie);
        }

        // Redirigir tras animación
        setTimeout(() => {
          window.location.href = url;
        }, 1000);
      });
    }
  });
});
