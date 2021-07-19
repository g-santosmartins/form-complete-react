import React from 'react'

const RegisterValidations = React.createContext(

  { cpf: noValidation, password: noValidation, name: noValidation }

)

function noValidation(dados) {
  console.log(dados);
  return { valido: true, texto: "" }
}

export default RegisterValidations