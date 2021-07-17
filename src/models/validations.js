function handleValidateCpf(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos" }
  }
  return {valido: true}
}

function handleValidatePassword(password) {
  if(password.length < 4 || password.length > 72) {
    return {valido: false, texto: "Sua senha deve ter entre 4 e 72 dígitos" }
  }
  return {valido: true}
}

 

export {handleValidateCpf, handleValidatePassword}