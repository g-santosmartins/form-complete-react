import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import { useContext } from 'react';

import RegisterValidations from '../../context/RegisterValidations'

export default function PersonalForm({submitProp }) {

  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [cpf, setCpf] = useState('')
  const [sales, setSales] = useState(true)
  const [news, setNews] = useState(false)
  const [errors, setErrors] = useState({
    cpf: {
      valido: true,
      texto: ""
    },
    name: {
      valido: true,
      texto: ""
    }
  })

  // context use:
  const validations = useContext(RegisterValidations)

  // model functions

  function handleValidateBeforeOnSubmit() {
    for(let field in errors) {
      if(!errors[field].valido) {
        return false
      }
    }
    return true
  }

  function validateInput(e) {
    const {name, value} = e.target
    const newState = {...errors}
    newState[name] = validations[name](value)
    setErrors(newState )
  }

  // interface functions

  function handleFormDataGrip(e) {
    e.preventDefault()
    if(handleValidateBeforeOnSubmit()) {
      submitProp({name, nickname, cpf, sales, news})
      return
    }
    alert('Insira um CPF válido')
  }

  function handleOnChangeText(e, newState) {
    const temporaryText = e.target.value
    newState(temporaryText)
  }

  function handleOnChangeSwitch(e, newState) {
    newState(e.target.checked)
  }

  return (
    <form
      onSubmit={(e) => { handleFormDataGrip(e) }}
    >
      <TextField
        required
        value={name}

        onBlur={(e) => {validateInput(e)}}
        error={!errors.name.valido}
        helperText={errors.name.texto}
        onChange={(e) => {
          handleOnChangeText(e, setName)
        }}
        fullWidth
        label="Nome"
        name="name"
        variant="outlined"
        margin="normal"
      />

      <TextField
        required

        fullWidth
        value={nickname}
        onChange={(e) => { handleOnChangeText(e, setNickname) }}
        label="Sobrenome"
        name="lastname"
        variant="outlined"
        margin="normal" />

      <TextField
        required
        value={cpf}
        onBlur={(e) => {validateInput(e)}}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        onChange={(e) => { handleOnChangeText(e, setCpf) }}
        fullWidth
        label="CPF"
        name="cpf"
        variant="outlined"
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={

          <Switch
            onChange={(e) => { handleOnChangeSwitch(e, setSales) }}

            name="promocoes"
            color="primary"
            defaultChecked={sales}
          />
        }
      />


      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(e) => { handleOnChangeSwitch(e, setNews) }}
            name="novidades"
            color="primary"
            defaultChecked={news}
          />
        }
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >Cadastrar</Button>

    </form>
  )
}
