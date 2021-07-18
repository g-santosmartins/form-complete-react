import './App.css';
import { Container } from '@material-ui/core'


import BaseForm from './components/BaseForm/index';

import RegisterValidation from './context/RegisterValidations'
import { handleValidateCpf, handleValidatePassword } from './models/validations'



function App() {
  return (
    <Container component="article" maxWidth="sm">
      <RegisterValidation.Provider
        value={}>
        <BaseForm /> 
      </RegisterValidation.Provider>
    </Container>
  );
}

export default App;
