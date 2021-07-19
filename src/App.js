import './App.css';
import { handleValidateCpf, handleValidatePassword } from './models/validations'
import "fontsource-roboto";
import BaseForm from './components/BaseForm/index';

import RegisterValidations from './context/RegisterValidations'

import { Container } from '@material-ui/core'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <RegisterValidations.Provider
        value={{ cpf: handleValidateCpf, password: handleValidatePassword, name: handleValidatePassword }}
      >
        <BaseForm />

      </RegisterValidations.Provider>

    </Container>
  );
}

export default App;
