import React, { useState ,useEffect } from 'react';
import PersonalForm from '../PersonalForm/index'
import DeliveryForm from '../DeliveryForm/index'

import UserForm from '../UserForm/index'
import Modal from '../Modal/index';
import { Stepper, Step, StepLabel, Container } from '@material-ui/core'


export default function BaseForm() {

  const [currentStage, setCurrentStage] = useState(0)
  const [collectedData, setCollectedData] = useState({})
  
  const forms = [
    <UserForm submitProp={handleCollectDataFromForms} />,
    <PersonalForm submitProp={handleCollectDataFromForms} />,
    <DeliveryForm submitProp={handleCollectDataFromForms} />,
    <Modal textModal={'Cadastro realizado com sucesso'} />
  ]

  useEffect(() => {
    if (currentStage === 3) {
      console.log(collectedData)
    }
  })


  function handleCollectDataFromForms(data) {
    setCollectedData({ ...collectedData, ...data })
    setCurrentStage(currentStage + 1)
  }


  return (
      <Container>
        <Stepper
          activeStep={currentStage}
        >
          <Step><StepLabel>Login</StepLabel></Step>
          <Step><StepLabel>Pessoal</StepLabel></Step>
          <Step><StepLabel>Entrega</StepLabel></Step>
          <Step><StepLabel>Concluído</StepLabel></Step>
        </Stepper>
        {forms[currentStage]}
      </Container>
  )
}


