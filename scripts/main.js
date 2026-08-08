const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");


function mostrarMenu() {
    const menuAberto = menu.classList.toggle("menu-aberto");

    menuButton.setAttribute(
        "aria-expanded",
        `${menuAberto}`
    );

    if (menuAberto) {
        menuButton.setAttribute(
            "aria-label",
            `Fechar menu`
        );
    } else {
        menuButton.setAttribute(
            "aria-label",
            `Abrir menu`
        );
    }
}


function atualizarRodape() {
    const anoAtual = new Date().getFullYear();

    const anos = document.querySelectorAll(".ano");
    const modificacoes = document.querySelectorAll(".modificacao");

    anos.forEach((elemento) => {
        elemento.textContent = `${anoAtual}`;
    });

    modificacoes.forEach((elemento) => {
        elemento.textContent =
            `Última modificação: ${document.lastModified}`;
    });
}


if (menuButton && menu) {
    menuButton.addEventListener(
        "click",
        mostrarMenu
    );
}


atualizarRodape();