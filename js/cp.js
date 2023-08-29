// Cria um array vazio para armazenar as tarefas.
let listaTarefa = []

// Seleciona os elementos de botão "Adicionar Tarefa" e "Listar por Importância".
const botaoAddTarefa = document.querySelector("#btnAddTarefa")
const botaoListarPorImportancia = document.querySelector("#btnListarPorImportancia")

// Adiciona um ouvinte de evento para o botão "Adicionar Tarefa".
botaoAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault();

    // Coleta valores dos campos de entrada.
    const descricao = document.querySelector("#idDescricao").value;
    const autor = document.querySelector("#idAutor").value;
    const departamento = document.querySelector("#idDepartamento").value;
    const valor = document.querySelector("#idValor").value;
    const duracao = document.querySelector("#idDuracao").value;

    // Coleta a importância selecionada.
    const importanciaElementos = document.getElementsByName('importancia');
    let importancia;
    for (const elemento of importanciaElementos) {
        if (elemento.checked) {
            importancia = elemento.value;
            break;
        }
    }

    // Cria um objeto de tarefa com os valores coletados.
    const tarefa = {
        descricao,
        autor,
        departamento,
        importancia,
        valor,
        duracao
    };

    // Adiciona a tarefa ao array de listaTarefa e atualiza a lista na interface.
    listaTarefa.push(tarefa);
    atualizarLista();
});

// Adiciona um ouvinte de evento para o botão "Listar por Importância".
botaoListarPorImportancia.addEventListener("click", (evento) => {
    evento.preventDefault()
    // Ordena as tarefas por importância e atualiza a lista na interface.
    const tarefasOrdenadas = listaTarefa.slice().sort((a, b) => {
        const valoresImportancia = { 'Importante': 3, 'Razoável': 2, 'Baixo': 1 };
        return valoresImportancia[b.importancia] - valoresImportancia[a.importancia];
    });
    atualizarLista(tarefasOrdenadas);
});

// Função para atualizar a lista de tarefas na interface.
function atualizarLista(tarefas = listaTarefa) {
    // Seleciona o elemento de lista de tarefas.
    const listaTarefasUL = document.querySelector("#listaTarefa");
    listaTarefasUL.innerHTML = '';

    // Itera sobre as tarefas e cria elementos de lista para cada tarefa.
    tarefas.forEach(tarefa => {
        let li = document.createElement("li");
        // Cria o texto exibido para cada tarefa.
        li.textContent = `${tarefa.descricao} - ${tarefa.autor} - ${tarefa.departamento} - ${tarefa.importancia}`;
        if (tarefa.valor) li.textContent += ` - ${tarefa.valor}`;
        if (tarefa.duracao) li.textContent += ` - ${tarefa.duracao}`;

        // Cria um botão de exclusão para cada tarefa.
        let botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = " x ";
        li.appendChild(botaoExcluir);

        // Adiciona a tarefa e o botão de exclusão à lista de tarefas.
        listaTarefasUL.appendChild(li);

        // Adiciona um ouvinte de evento para o botão de exclusão.
        botaoExcluir.addEventListener("click", (evt) => {
            evt.preventDefault();

            // Encontra o índice da tarefa a ser excluída e a remove.
            let indiceTarefa = listaTarefa.indexOf(tarefa);
            if (indiceTarefa !== -1) {
                listaTarefa.splice(indiceTarefa, 1);
            }

            // Remove a tarefa da interface.
            evt.target.parentNode.remove();
        });
    });

    // Limpa os valores dos campos de entrada após a atualização da lista.
    document.querySelector("#idDescricao").value = "";
    document.querySelector("#idAutor").value = "";
    document.querySelector("#idDepartamento").value = "";
    document.querySelector('input[name="importancia"]:checked').checked = false;
    document.querySelector("#idValor").value = "";
    document.querySelector("#idDuracao").value = "";
}
