// Ano atual e última modificação no rodapé
document.getElementById("currentyear").textContent =
  new Date().getFullYear();

document.getElementById("lastModified").textContent =
  document.lastModified;

// Menu hambúrguer responsivo
const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação"
  );
});

// Fecha o menu ao aumentar a tela
window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 700 &&
    primaryNav.classList.contains("open")
  ) {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      "Abrir menu de navegação"
    );
  }
});