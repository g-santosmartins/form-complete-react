import React, {useState } from 'react';

import { TextField, Button } from '@material-ui/core';

export default function UserForm({ submitProp, captureData }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //passing on the state 
  function handleOnSubmit(e) {
    e.preventDefault()
    console.log({email, password})

    captureData({email, password})
    submitProp()
  }

  function handleOnChange(newState, e) {
    newState(e.target.value)
  }

  return (
    <form onSubmit={(e) => { handleOnSubmit(e) }}>
      <TextField
      onChange={(e)=> handleOnChange(setEmail ,e)}
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
      onChange={(e)=> handleOnChange(setPassword, e )}
        required
        value={password}
        id="password"
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