import { useState } from 'react'

export default function useErrors(validations) {

  const initialState = validateErrorObject(validations)
  const [errors, setErrors] = useState(initialState)


// "can it" submit property
  function handleValidateBeforeOnSubmit() {
    for (let field in errors) {
      if (!errors[field].valido) {
        return false
      }
    }
    return true
  }

  

  function validateInput(e) {
    const { name, value } = e.target
    const newState = { ...errors }
    newState[name] = validations[name](value)
    setErrors(newState)
  }

  return [errors, validateInput, handleValidateBeforeOnSubmit]

}

// inner function to create a default error object
function validateErrorObject(validations) {
  const initialState = {}
  for (let field in validations) {
    initialState[field] = { valido: true, texto: "" }
  }

  return initialState
}