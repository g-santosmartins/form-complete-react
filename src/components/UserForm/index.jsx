import React, { } from 'react';

import { TextField, Button } from '@material-ui/core';

export default function UserForm() {
  return (
    <form>
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
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

      >
        Finalizar Cadastro
      </Button>
    </form>
  )
}