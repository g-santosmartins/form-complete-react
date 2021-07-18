function handleValidateCpf(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos" }
  }
  return {valido: true}
}

function handleValidatePassword(param) {
  if(param.length < 4 || param.length > 72) {
    return {valido: false, texto: "Seu campo deve ter entre 4 e 72 dígitos" }
  }
  return {valido: true}
}



 

export {handleValidateCpf, handleValidatePassword}