import React, { useState} from 'react';
import PersonalForm from '../PersonalForm/index'
import DeliveryForm from '../DeliveryForm/index'

import UserForm from '../UserForm/index'
import { Typography } from '@material-ui/core'


export default function LoginForm({ submitProp, validateCpfProp }) {
const [currentStage, SetCurrentStage] = useState(0)


function handleChangeForm(stage, submitProp, validateCpfProp) {
  switch (stage) {
    case 0:
      return <PersonalForm submitProp={submitProp} validateCpfProp={validateCpfProp} />

    case 1:
      return <UserForm />

    case 2:
      return <DeliveryForm />

    default:
      return <Typography
        variant="h5"
        component="h1"
        align="center"
        color="error"
      >
        Erro: Nenhum formulário a renderizar
      </Typography>
  }
}

  return (
    <>
      {handleChangeForm(currentStage, submitProp, validateCpfProp)}
    </>
  )
}


