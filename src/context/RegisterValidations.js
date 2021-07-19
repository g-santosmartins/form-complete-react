import React from 'react'

const RegisterValidations = React.createContext(
  { cpf: noValidation, password: noValidation, name: noValidation }
)

function noValidation(dados) {
  console.log(dados);
  return { valid: true, text: "" }
}

export default RegisterValidations