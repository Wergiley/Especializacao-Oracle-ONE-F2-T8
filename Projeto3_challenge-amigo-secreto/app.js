let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o campo de entrada
    let nome = input.value.trim(); // Remove espaços extras

    // Validação: Verifica se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a exibição da lista de amigos
}

// Função para atualizar a lista exibida na página
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Captura a lista HTML
    lista.innerHTML = ""; // Limpa a lista antes de atualizar
    
    // Percorre o array de amigos e cria elementos <li> para cada nome
    amigos.forEach((amigo) => {
        let li = document.createElement("li"); // Cria um elemento de lista
        li.textContent = amigo; // Define o nome como conteúdo do elemento
        lista.appendChild(li); // Adiciona o elemento à lista HTML
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Validação: Verifica se há amigos na lista antes de sortear
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente ao índice
    
    // Exibe o amigo sorteado na página
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
