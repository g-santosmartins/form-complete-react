import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'

export default function DeliveryForm({ captureData }) {

  const [cep, setCep] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")

  function handleOnChangeText(e, newState) {
    let temporaryText = e.target.value
    newState(temporaryText)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
    captureData({cep, address, number, state, city})
  }

  return (
    <form onSubmit={(e) => { handleOnSubmit(e) }}>
      <TextField
        value={cep}
        onChange={(e) => { handleOnChangeText(e, setCep) }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={address}
        onChange={(e) => { handleOnChangeText(e, setAddress) }}
        id="address"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={number}
        onChange={(e) => { handleOnChangeText(e, setNumber) }}
        id="number"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(e) => { handleOnChangeText(e, setState) }}
        id="state"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        onChange={(e) => { handleOnChangeText(e, setCity) }}

        value={city}

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