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
            "Não tente lembrar de tudo. Colocar as tarefas no papel ou em uma lista ajuda a organizar a mente."
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
        titulo: "Não preencha todo o seu tempo",
        texto:
            "Deixe um pouco de espaço na rotina para pausas e situações inesperadas."
    }

];


const listaDicas =
    document.querySelector("#lista-dicas");

const filtros =
    document.querySelectorAll(".filtro-dica");


let categoriaAtual =
    "Todas";


function mostrarDicas() {

    listaDicas.innerHTML =
        "";


    let dicasMostrar =
        dicas;


    if (categoriaAtual !== "Todas") {

        dicasMostrar =
            dicas.filter(
                (dica) =>
                    dica.categoria === categoriaAtual
            );

    }


    dicasMostrar.forEach((dica) => {

        const card =
            document.createElement("article");


        card.className =
            "card";


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


        listaDicas.appendChild(
            card
        );

    });

}


function mudarCategoria(evento) {

    categoriaAtual =
        evento.target.dataset.categoria;


    filtros.forEach((botao) => {

        botao.classList.remove(
            "ativo-filtro"
        );

    });


    evento.target.classList.add(
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