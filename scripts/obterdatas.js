// Preenche dinamicamente o ano dos direitos autorais
// e a data da última modificação do documento.

document.addEventListener('DOMContentLoaded', () => {
  const anoAtual = document.querySelector('#anoatual');

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  const ultimaModificacao = document.querySelector('#ultimaModificacao');

  if (ultimaModificacao) {
    ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
  }
});