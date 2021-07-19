import React, { useState, useContext } from 'react';

import { TextField, Button } from '@material-ui/core';

import RegisterValidations from '../../context/RegisterValidations';

export default function UserForm({ submitProp }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    password: {
      valido: true,
      texto: ""
    }
  })

  // context
  const validations = useContext(RegisterValidations)

  // model function 

  function handleValidateBeforeOnSubmit() {
    for (let field in errors) {
      if (!errors[field].valido) {
        return false
      }
    }
    return true
  }

  function validateInput(e) {
    const { name, value } = e.target
    const newState = { ...errors }
    newState[name] = validations[name](value)
    setErrors(newState)
  }

  // layout functions
  function handleOnSubmit(e) {
    e.preventDefault()
    if (handleValidateBeforeOnSubmit()) {
      submitProp({ email, password })
      return
    }
    alert('Insira uma senha válida!')
  }

  function handleOnChange(newState, e) {
    newState(e.target.value)
  }

  return (
    <form onSubmit={(e) => { handleOnSubmit(e) }}>
      <TextField
        onChange={(e) => handleOnChange(setEmail, e)}
        required
        value={email}
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => handleOnChange(setPassword, e)}
        onBlur={validateInput}
        error={!errors.password.valido}
        helperText={errors.password.texto}
        required
        value={password}
        id="password"
        name="password"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Próximo
      </Button>
    </form>
  )
}