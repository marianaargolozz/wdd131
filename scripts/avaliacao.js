let numeroAvaliacoes =
    Number(localStorage.getItem("numeroAvaliacoes")) || 0;

numeroAvaliacoes += 1;

localStorage.setItem(
    "numeroAvaliacoes",
    numeroAvaliacoes
);

const contador = document.querySelector("#contador");
contador.textContent = numeroAvaliacoes;

const anoAtual = document.querySelector("#anoAtual");
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent =
    `Última modificação: ${document.lastModified}`;