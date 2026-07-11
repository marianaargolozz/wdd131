// ===========================================================
// Álbum do Templo — templos.js
// ===========================================================

// Ano de direitos autorais e data da última modificação no footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Menu hambúrguer responsivo
const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
  );
});

// Fecha o menu automaticamente ao passar para uma visualização maior
window.addEventListener("resize", () => {
  if (window.innerWidth >= 700 && primaryNav.classList.contains("open")) {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
  }
});