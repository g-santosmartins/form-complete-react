import React, { useState} from 'react';
import PersonalForm from '../PersonalForm/index'
import DeliveryForm from '../DeliveryForm/index'

import UserForm from '../UserForm/index'
import { Typography } from '@material-ui/core'


export default function LoginForm({ submitProp, validateCpfProp }) {
const [currentStage, SetCurrentStage] = useState(0)

const forms = [
<PersonalForm submitProp={handleChangeStage} validateCpfProp={validateCpfProp} />,
<UserForm submitProp={handleChangeStage}  />,
<DeliveryForm submitProp={submitProp} />]

function handleChangeStage() {
  SetCurrentStage(currentStage + 1)
}


  return (
    <>
      {forms[currentStage]}
    </>
  )
}


