document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const icon = document.getElementById("darkModeIcon");
  const body = document.body;
  const cartCountSpan = document.getElementById("cartCount");

  function applyDarkMode(enabled) {
    body.classList.toggle("dark-mode", enabled);
    icon.textContent = enabled ? "☀️" : "🌙";

    document.querySelectorAll(".offcanvas").forEach(offcanvas => {
      offcanvas.classList.toggle("bg-dark", enabled);
      offcanvas.classList.toggle("text-white", enabled);
      offcanvas.classList.toggle("bg-light", !enabled);
      offcanvas.classList.toggle("text-dark", !enabled);
    });

    document.querySelectorAll(".modal-content").forEach(modal => {
      modal.classList.toggle("bg-dark", enabled);
      modal.classList.toggle("text-white", enabled);
      modal.classList.toggle("bg-light", !enabled);
      modal.classList.toggle("text-dark", !enabled);
    });

    localStorage.setItem("dark-mode", enabled ? "enabled" : "disabled");
  }

  // Aplicar modo oscuro almacenado
  const darkModeEnabled = localStorage.getItem("dark-mode") === "enabled";
  applyDarkMode(darkModeEnabled);

  toggleButton.addEventListener("click", () => {
    applyDarkMode(!body.classList.contains("dark-mode"));
  });


  // === GESTIÓN DEL CARRITO ===
  // Leer valor del contador desde localStorage
  let cartCount = parseInt(localStorage.getItem("cart-count")) || 0;
  if (cartCountSpan) cartCountSpan.textContent = cartCount;

  // Añadir a la cesta
  document.querySelectorAll("button.btn-warning").forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      localStorage.setItem("cart-count", cartCount);
      if (cartCountSpan) cartCountSpan.textContent = cartCount;
    });
  });

});
