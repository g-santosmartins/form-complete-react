import React, { useState } from 'react';
import PersonalForm from '../PersonalForm/index'


export default function FormLogin({ submitProp, validateCpfProp }) {
  return (
    <PersonalForm submitProp={submitProp} validateCpfProp={validateCpfProp} />
  )
}
