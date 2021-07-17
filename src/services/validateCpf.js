const handleValidadeCpf = (cpf) => {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos" }
  }
  return {valido: true}
}


export default handleValidadeCpf