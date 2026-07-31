"use strict";

const templeCards = document.querySelector("#temple-cards");
const galleryTitle = document.querySelector("#gallery-title");
const resultsMessage = document.querySelector("#results-message");
const filterLinks = document.querySelectorAll(".filter-link");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");
const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

function obterAnoDaConsagracao(templo) {
  return Number.parseInt(templo.consagracao.substring(0, 4), 10);
}

function criarCartoesDeTemplos(listaDeTemplos) {
  const cartoes = listaDeTemplos
    .map(
      (templo) => `
        <article class="temple-card">
          <img
            src="${templo.urlDaImagem}"
            alt="Templo de ${templo.nomeDoTemplo}"
            loading="lazy"
            decoding="async"
            width="400"
            height="250"
          >

          <div class="temple-information">
            <h2>${templo.nomeDoTemplo}</h2>

            <p>
              <strong>Localização:</strong>
              ${templo.localizacao}
            </p>

            <p>
              <strong>Consagração:</strong>
              ${templo.consagracao}
            </p>

            <p>
              <strong>Área:</strong>
              ${templo.area.toLocaleString("pt-BR")} pés quadrados
            </p>
          </div>
        </article>
      `
    )
    .join("");

  templeCards.innerHTML = cartoes;

  resultsMessage.textContent =
    `${listaDeTemplos.length} templos exibidos.`;
}

function filtrarTemplos(filtro) {
  if (filtro === "antigos") {
    return templos.filter(
      (templo) => obterAnoDaConsagracao(templo) < 1900
    );
  }

  if (filtro === "novos") {
    return templos.filter(
      (templo) => obterAnoDaConsagracao(templo) > 2000
    );
  }

  if (filtro === "grandes") {
    return templos.filter(
      (templo) => templo.area > 90000
    );
  }

  if (filtro === "pequenos") {
    return templos.filter(
      (templo) => templo.area < 10000
    );
  }

  return templos;
}

function obterTituloDoFiltro(filtro) {
  const titulos = {
    inicio: "Álbum de Templos",
    antigos: "Templos Antigos",
    novos: "Templos Novos",
    grandes: "Templos Grandes",
    pequenos: "Templos Pequenos"
  };

  return titulos[filtro];
}

function atualizarLinkAtivo(linkSelecionado) {
  filterLinks.forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });

  linkSelecionado.classList.add("active");
  linkSelecionado.setAttribute("aria-current", "page");
}

function fecharMenu() {
  navigation.classList.remove("open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute(
    "aria-label",
    "Abrir menu de navegação"
  );

  menuButton.textContent = "☰";
}

function alternarMenu() {
  navigation.classList.toggle("open");

  const menuAberto = navigation.classList.contains("open");

  menuButton.setAttribute(
    "aria-expanded",
    `${menuAberto}`
  );

  menuButton.setAttribute(
    "aria-label",
    menuAberto
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação"
  );

  menuButton.textContent = menuAberto ? "✕" : "☰";
}

function exibirFiltro(filtro) {
  const templosFiltrados = filtrarTemplos(filtro);

  galleryTitle.textContent = obterTituloDoFiltro(filtro);
  criarCartoesDeTemplos(templosFiltrados);
}

filterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const filtroSelecionado = link.dataset.filter;

    atualizarLinkAtivo(link);
    exibirFiltro(filtroSelecionado);
    fecharMenu();
  });
});

menuButton.addEventListener("click", alternarMenu);

currentYear.textContent = `${new Date().getFullYear()}`;

lastModified.textContent =
  `Última modificação: ${document.lastModified}`;

criarCartoesDeTemplos(templos);