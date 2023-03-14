export default function ehMaiorDe16 (campo){
    const dataNascimento = new Date(campo.value);
   if(!validaIdade(dataNascimento)){
    campo.setCustomValidity('Você deve ter pelo menos 11 anos para participar do evento com pais ou responsáveis. Entrada aberta para todos com 16 anos ou mais.');
   }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais16 = new Date((data.getUTCFullYear() + 16), (data.getUTCMonth() + 1), data.getUTCDate());
    
    return dataAtual >= dataMais16;
}