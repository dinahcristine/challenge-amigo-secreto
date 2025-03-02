let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Atualizar a lista de amigos na tela
    let listaAmigos = document.getElementById('listaAmigos');
    let amigo = document.createElement('li');
    amigo.textContent = nomeAmigo;
    listaAmigos.appendChild(amigo);

    // Limpar o campo de entrada
    inputAmigo.value = '';
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let nomeSorteado = amigos[indiceSorteado];

    // Exibir o resultado na tela
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
}
