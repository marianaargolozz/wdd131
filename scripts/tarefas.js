const chaveStorage = "tarefasRotinaFlow";


let tarefas =
    JSON.parse(
        localStorage.getItem(chaveStorage)
    ) || [];


let filtroAtual =
    "todas";


const formulario =
    document.querySelector("#form-tarefa");

const lista =
    document.querySelector("#lista-tarefas");

const contador =
    document.querySelector("#contador");

const mensagem =
    document.querySelector("#mensagem-formulario");

const botoesFiltro =
    document.querySelectorAll(".filtro");


function salvarTarefas() {

    localStorage.setItem(
        chaveStorage,
        JSON.stringify(tarefas)
    );

}


function adicionarTarefa(evento) {

    evento.preventDefault();


    const titulo =
        document.querySelector("#titulo").value;

    const categoria =
        document.querySelector("#categoria").value;

    const prioridade =
        document.querySelector("#prioridade").value;


    if (
        titulo === "" ||
        categoria === "" ||
        prioridade === ""
    ) {

        mensagem.textContent =
            "Preencha os campos obrigatórios.";

        return;

    }


    const tarefa = {

        id: Date.now(),

        titulo: titulo,

        categoria: categoria,

        prioridade: prioridade,

        concluida: false

    };


    tarefas.push(tarefa);


    salvarTarefas();

    mostrarTarefas();


    formulario.reset();


    mensagem.textContent =
        `Tarefa "${tarefa.titulo}" adicionada!`;

}


function concluirTarefa(id) {

    tarefas.forEach((tarefa) => {

        if (tarefa.id === id) {

            tarefa.concluida =
                !tarefa.concluida;

        }

    });


    salvarTarefas();

    mostrarTarefas();

}


function excluirTarefa(id) {

    tarefas =
        tarefas.filter(
            (tarefa) => tarefa.id !== id
        );


    salvarTarefas();

    mostrarTarefas();

}


function tarefasFiltradas() {

    if (filtroAtual === "pendentes") {

        return tarefas.filter(
            (tarefa) => !tarefa.concluida
        );

    }


    if (filtroAtual === "concluidas") {

        return tarefas.filter(
            (tarefa) => tarefa.concluida
        );

    }


    return tarefas;

}


function mostrarTarefas() {

    lista.innerHTML =
        "";


    const resultado =
        tarefasFiltradas();


    if (resultado.length === 0) {

        lista.innerHTML = `
            <div class="lista-vazia">
                <p>Nenhuma tarefa encontrada.</p>
            </div>
        `;

    }


    resultado.forEach((tarefa) => {

        const item =
            document.createElement("div");


        item.className =
            `tarefa ${tarefa.concluida ? "tarefa-concluida" : ""}`;


        item.innerHTML = `

            <button
                class="botao-check"
                data-id="${tarefa.id}"
                type="button"
            >
                ${tarefa.concluida ? "✓" : "○"}
            </button>

            <div class="tarefa-texto">

                <h3>
                    ${tarefa.titulo}
                </h3>

                <p>
                    ${tarefa.categoria}
                    •
                    ${tarefa.prioridade}
                </p>

            </div>

            <button
                class="botao-excluir"
                data-id="${tarefa.id}"
                type="button"
            >
                Excluir
            </button>

        `;


        lista.appendChild(item);

    });


    atualizarContador();

}


function atualizarContador() {

    const total =
        tarefas.length;


    const concluidas =
        tarefas.filter(
            (tarefa) => tarefa.concluida
        ).length;


    contador.textContent =
        `${concluidas} de ${total} concluídas`;

}


function mudarFiltro(evento) {

    filtroAtual =
        evento.target.dataset.filtro;


    botoesFiltro.forEach((botao) => {

        botao.classList.remove(
            "ativo-filtro"
        );

    });


    evento.target.classList.add(
        "ativo-filtro"
    );


    mostrarTarefas();

}


lista.addEventListener(
    "click",
    (evento) => {

        const id =
            Number(
                evento.target.dataset.id
            );


        if (
            evento.target.classList.contains(
                "botao-check"
            )
        ) {

            concluirTarefa(id);

        }


        if (
            evento.target.classList.contains(
                "botao-excluir"
            )
        ) {

            excluirTarefa(id);

        }

    }
);


formulario.addEventListener(
    "submit",
    adicionarTarefa
);


botoesFiltro.forEach((botao) => {

    botao.addEventListener(
        "click",
        mudarFiltro
    );

});


mostrarTarefas();