
const productos = {
  elmo: { nombre: "Galleta Elmo", precio: 2.5, imagen: "./../img/cookies/Elmo-cookie.jpg" },
  monstruo: { nombre: "Galleta Monstruo", precio: 2.8, imagen: "img/galleta-monstruo.png" },
  oscar: { nombre: "Galleta Oscar", precio: 2.6, imagen: "img/galleta-oscar.png" },
  bigbird: { nombre: "Galleta Big Bird", precio: 2.4, imagen: "img/galleta-bigbird.png" }
};

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || {};
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
  const carrito = obtenerCarrito();
  carrito[id] = (carrito[id] || 0) + 1;
  guardarCarrito(carrito);
  actualizarContador();
}

function actualizarContador() {
  const carrito = obtenerCarrito();
  const total = Object.values(carrito).reduce((acc, cant) => acc + cant, 0);
  const span = document.getElementById("cartCount");
  if (span) span.textContent = total;
}

function mostrarCarrito() {
  const carrito = obtenerCarrito();
  const contenedor = document.getElementById("carrito-container");
  const totalSpan = document.getElementById("carrito-total");
  let total = 0;

  if (!contenedor) return;
  contenedor.innerHTML = "";

  Object.keys(carrito).forEach(id => {
    const item = productos[id];
    const cantidad = carrito[id];
    const subtotal = item.precio * cantidad;
    total += subtotal;

    const col = document.createElement("div");
    col.className = "col-12";
    col.innerHTML = `
      <div class="card p-3 d-flex flex-row align-items-center">
        <img src="${item.imagen}" alt="${item.nombre}" width="80" class="me-3">
        <div class="flex-grow-1">
          <h5>${item.nombre}</h5>
          <p class="mb-1">Cantidad: ${cantidad}</p>
          <p class="mb-0">Subtotal: ${subtotal.toFixed(2)} €</p>
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });

  if (totalSpan) totalSpan.textContent = `${total.toFixed(2)} €`;
}

// Iniciar al cargar la página del carrito
if (window.location.pathname.includes("carritoCompra")) {
  document.addEventListener("DOMContentLoaded", mostrarCarrito);
}

// Exponer función para usarla desde el menú
window.agregarAlCarrito = agregarAlCarrito;
window.actualizarContador = actualizarContador;
