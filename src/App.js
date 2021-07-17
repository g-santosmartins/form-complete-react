import './App.css';
import { handleValidateCpf, handleValidatePassword } from './models/validations'

import BaseForm from './components/BaseForm/index';

import { Container } from '@material-ui/core'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <BaseForm
        validations={{ cpf: handleValidateCpf, password: handleValidatePassword, name: handleValidatePassword }}
      />
    </Container>
  );
}

export default App;
