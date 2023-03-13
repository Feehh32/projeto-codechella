import ehUmCPF from "./cpf.js";

const formCampo = document.querySelectorAll("[required]");

formCampo.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
})

function verificaCampo (campo) {
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo);
    }
}