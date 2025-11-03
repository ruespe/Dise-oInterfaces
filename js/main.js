import "boxicons/css/boxicons.min.css";

// Modo oscuro y claro
let botonModo = document.querySelector(".cambiarModo");
let modoGuardado = localStorage.getItem("modo");

if (modoGuardado) {
  document.body.classList.add(modoGuardado);
} else {
  document.body.classList.add("light-mode");
}

botonModo.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("modo", "dark-mode");
  } else {
    document.body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("modo", "light-mode");
  }
});

// Menú toggle
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const body = document.body;

if (menuToggle && mainNav) {
  // Abrir/cerrar menú al hacer clic en el botón
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mainNav.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Cambiar icono entre hamburguesa y X
    const icon = menuToggle.querySelector("i");
    if (mainNav.classList.contains("active")) {
      icon.classList.remove("bx-menu");
      icon.classList.add("bx-x");
    } else {
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    }
  });

  // Cerrar menú al hacer clic en el overlay (fuera del menú)
  body.addEventListener("click", (e) => {
    if (
      mainNav.classList.contains("active") &&
      !mainNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mainNav.classList.remove("active");
      body.classList.remove("menu-open");
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    }
  });

  // Cerrar menú al hacer clic en un enlace
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      body.classList.remove("menu-open");
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    });
  });
}
