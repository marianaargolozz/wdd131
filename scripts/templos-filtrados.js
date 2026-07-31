"use strict";

const templeCards = document.querySelector("#temple-cards");
const galleryTitle = document.querySelector("#gallery-title");
const resultsMessage = document.querySelector("#results-message");

const filterButtons = document.querySelectorAll(
  ".filter-button"
);

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

const currentYear = document.querySelector("#current-year");
const lastModified = document.querySelector("#last-modified");

function obterAnoDaConsagracao(templo) {
  return Number.parseInt(
    templo.consagracao.substring(0, 4),
    10
  );
}

function criarCartoesDeTemplos(listaDeTemplos) {
  const cartoes = listaDeTemplos.map((templo) => `
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
        <h3>${templo.nomeDoTemplo}</h3>

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
  `).join("");

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
    inicio: "Todos os templos",
    antigos: "Templos antigos",
    novos: "Templos novos",
    grandes: "Templos grandes",
    pequenos: "Templos pequenos"
  };

  return titulos[filtro];
}

function atualizarBotaoSelecionado(botaoSelecionado) {
  filterButtons.forEach((botao) => {
    botao.classList.remove("active");
    botao.setAttribute("aria-pressed", "false");
  });

  botaoSelecionado.classList.add("active");
  botaoSelecionado.setAttribute("aria-pressed", "true");
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

  const menuEstaAberto =
    navigation.classList.contains("open");

  menuButton.setAttribute(
    "aria-expanded",
    `${menuEstaAberto}`
  );

  menuButton.setAttribute(
    "aria-label",
    menuEstaAberto
      ? "Fechar menu de navegação"
      : "Abrir menu de navegação"
  );

  menuButton.textContent =
    menuEstaAberto ? "✕" : "☰";
}

function exibirFiltro(filtro) {
  const templosFiltrados = filtrarTemplos(filtro);

  galleryTitle.textContent =
    obterTituloDoFiltro(filtro);

  criarCartoesDeTemplos(templosFiltrados);
}

filterButtons.forEach((botao) => {
  botao.addEventListener("click", () => {
    const filtroSelecionado =
      botao.dataset.filter;

    atualizarBotaoSelecionado(botao);
    exibirFiltro(filtroSelecionado);
    fecharMenu();
  });
});

menuButton.addEventListener("click", alternarMenu);

currentYear.textContent =
  `${new Date().getFullYear()}`;

lastModified.textContent =
  `Última modificação: ${document.lastModified}`;

criarCartoesDeTemplos(templos);