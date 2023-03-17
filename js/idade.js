export default function ehMaiorDe13 (campo){
    const dataNascimento = new Date(campo.value);
   if(!validaIdade(dataNascimento)){
    campo.setCustomValidity('Idade não é válida');
   }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais13 = new Date ((data.getUTCFullYear() + 13), data.getUTCMonth(), (data.getUTCDate()+1));    
    return dataAtual >= dataMais13; 
}