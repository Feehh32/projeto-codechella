import ehUmCPF from "./cpf.js";
import ehMaiorDe16 from "./idade.js";
import capturandoCadastro from "./fetch.js";

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDe16(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const msgErro = campo.parentNode.querySelector('.campo__msg');
    const validadorInput = campo.checkValidity();

    if (!validadorInput) {
        msgErro.textContent = mensagem;

    } else {
        msgErro.textContent = '';
    }

}


const formCampo = document.querySelectorAll("[required]");
const formulario = document.querySelector('[data-formulario]');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Caracteres abaixo do permitido. Lembre-se é necessário nome e sobrenome."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email com endereço e url válidos.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ter pelo menos 11 anos para participar do evento com pais ou responsáveis. Entrada aberta para todos com 16 anos ou mais.'
    }
}

formCampo.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const listaRespostas = {
        'nome': event.target.elements["nome"].value,
        'cpf': event.target.elements["cpf"].value,
        'email': event.target.elements["email"].value,
        'ingresso': event.target.elements["ingresso"].value,
        'dataNascimento': event.target.elements["dataNascimento"].value
    }

    await capturandoCadastro(listaRespostas.nome, listaRespostas.cpf, listaRespostas.email, listaRespostas.ingresso, listaRespostas.dataNascimento);

    window.location.href = "./ingresso.html";

})
