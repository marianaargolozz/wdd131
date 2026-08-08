const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");


function mostrarMenu() {

    menu.classList.toggle("menu-aberto");

}


function atualizarRodape() {

    const anoAtual =
        new Date().getFullYear();


    document
        .querySelectorAll(".ano")
        .forEach((elemento) => {

            elemento.textContent =
                `${anoAtual}`;

        });


    document
        .querySelectorAll(".modificacao")
        .forEach((elemento) => {

            elemento.textContent =
                `Última modificação: ${document.lastModified}`;

        });

}


if (menuButton) {

    menuButton.addEventListener(
        "click",
        mostrarMenu
    );

}


atualizarRodape();