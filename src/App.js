import './App.css';
import handleValidadeCpf from './services/validateCpf'

import BaseForm from './components/BaseForm/index';

import { Container } from '@material-ui/core'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <BaseForm validateCpfProp={handleValidadeCpf} />
    </Container>
  );
}

export default App;
