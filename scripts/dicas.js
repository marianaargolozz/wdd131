const dicas = [
    {
        categoria: "Foco",
        titulo: "Escolha três prioridades",
        texto:
            "Escolha até três tarefas importantes para realizar durante o dia."
    },
    {
        categoria: "Organização",
        titulo: "Anote suas tarefas",
        texto:
            "Não tente lembrar de tudo. Escrever as tarefas ajuda a organizar melhor a mente."
    },
    {
        categoria: "Bem-estar",
        titulo: "Faça pequenas pausas",
        texto:
            "Parar por alguns minutos pode ajudar você a recuperar a concentração."
    },
    {
        categoria: "Foco",
        titulo: "Comece por uma tarefa pequena",
        texto:
            "Quando estiver difícil começar, escolha uma atividade simples para ganhar ritmo."
    },
    {
        categoria: "Organização",
        titulo: "Agrupe tarefas parecidas",
        texto:
            "Realizar tarefas semelhantes em sequência pode facilitar sua organização."
    },
    {
        categoria: "Bem-estar",
        titulo: "Deixe espaço na rotina",
        texto:
            "Reserve um pouco de tempo para pausas e situações inesperadas durante o dia."
    }
];


const listaDicas =
    document.querySelector("#lista-dicas");

const filtros =
    document.querySelectorAll(".filtro-dica");


let categoriaAtual = "Todas";


function filtrarDicas() {

    if (categoriaAtual === "Todas") {
        return dicas;
    }


    return dicas.filter(
        (dica) =>
            dica.categoria === categoriaAtual
    );
}


function mostrarDicas() {
    listaDicas.innerHTML = ``;

    const resultado =
        filtrarDicas();


    resultado.forEach((dica) => {

        const card =
            document.createElement("article");


        card.className = `card`;


        card.innerHTML = `
            <p class="categoria">
                ${dica.categoria}
            </p>

            <h3>
                ${dica.titulo}
            </h3>

            <p>
                ${dica.texto}
            </p>
        `;


        listaDicas.appendChild(card);

    });
}


function mudarCategoria(evento) {
    categoriaAtual =
        evento.currentTarget.dataset.categoria;


    filtros.forEach((botao) => {
        botao.classList.remove(
            "ativo-filtro"
        );
    });


    evento.currentTarget.classList.add(
        "ativo-filtro"
    );


    mostrarDicas();
}


filtros.forEach((botao) => {
    botao.addEventListener(
        "click",
        mudarCategoria
    );
});


mostrarDicas();