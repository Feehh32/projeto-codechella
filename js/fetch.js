export default async function capturandoCadastro(nome, cpf, email, ingresso, dataNascimento) {
    const conexao = await fetch('http://localhost:3000/cadastros', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'cpf': cpf,
            'email': email,
            'ingresso': ingresso,
            'dataNascimento': dataNascimento
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}