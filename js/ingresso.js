function criaIngresso() {
    const ingressoDescricao = document.querySelector('.ingresso__descricao');
    const ingressoItens = JSON.parse(localStorage.getItem('cadastro'));
    const ultimoIngresso = ingressoItens.slice(-1)[0];

    ingressoDescricao.innerHTML = `
        <h4 class="descricao__nome">${ultimoIngresso.nome}</h4>
        <p class="descricao__informacao">Ingresso: ${ultimoIngresso.ingresso}</p>
        <p class="descricao__informacao">Setor: Pista</p>
        <p class="descricao__informacao">Data: 11/03</p>
        <p class="descricao__informacao">Local: São Paulo-SP</p>
    `
}

criaIngresso();
