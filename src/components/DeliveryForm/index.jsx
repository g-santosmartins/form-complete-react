import React, {  } from 'react';
import {TextField, Button} from '@material-ui/core'

export default function DeliveryForm({submitProp}) {
  function handleOnSubmit(e) {
    e.preventDefault()
    submitProp()
  }

  return(
    <form onSubmit={(e) => {handleOnSubmit(e)}}>
        <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        
        margin="normal"
      />
      <TextField
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />

    <TextField
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="city"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button
      margin="normal"
      variant="contained"
      color="primary"
      fullWidth
      type="submit"

      >Finalizar Cadastro
      </Button>
    </form>
  )
}