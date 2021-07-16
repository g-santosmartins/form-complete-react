import './App.css';
import FormLogin from './components/LoginForm/index';

import { Container, Typography } from '@material-ui/core'
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
      <FormLogin submitProp={handleOnSubmit} validateCpfProp={handleValidadeCpf} />

    </Container>

  );
}

function handleOnSubmit(dados) {
  console.log(dados)
}

function handleValidadeCpf(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos" }
  }
  return {valido: true}
}

function handleValidadeCep(cep) {
  if(cep.length !== 8) {
    return {valido: false, texto: "Cep deve ter 8 dígitos"}
  }
  return {valido: true}
}

export default App;
