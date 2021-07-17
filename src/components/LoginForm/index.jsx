import React, { useState} from 'react';
import PersonalForm from '../PersonalForm/index'
import DeliveryForm from '../DeliveryForm/index'

import UserForm from '../UserForm/index'


export default function LoginForm({validateCpfProp }) {
const [currentStage, SetCurrentStage] = useState(0)

const forms = [
<PersonalForm submitProp={handleChangeStage} captureData={handleOnSubmit} validateCpfProp={validateCpfProp}/>,
<UserForm submitProp={handleChangeStage}  captureData={handleOnSubmit} />,
<DeliveryForm captureData={handleOnSubmit} />]

function handleChangeStage() {
  SetCurrentStage(currentStage + 1)
}
function handleOnSubmit(dados) {
  console.log(dados)
}




  return (
    <>
      {forms[currentStage]}
    </>
  )
}


