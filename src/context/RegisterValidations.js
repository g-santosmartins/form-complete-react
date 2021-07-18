import React from 'react'

const RegisterValidations = React.createContext(

  {
    cpf: handleValidateCpf,
    password: handleValidatePassword,
    name: handleValidatePassword
  }
)

export default RegisterValidations