import logo from './logo.svg';
import './App.css';
import Login from './Login';
import NovoUsuario from './NovoUsuario';
import{Layout} from'antd'
import Formulario from './Formulario';
import FormularioLogin from './FormularioLogin';
import Lancamentos from './Lancamentos';


const{ Header} = Layout;

function App() {
  return (
    <div className="App">
      <Header style={{color: "white", background: "#4E4E4E", fontSize:"30px"}}>Controle de Gastos Pessoais</Header>
      <Lancamentos/>
    </div>
  );
}

function Home(){
  return (
    <div className="App">
      <Header style={{color: "white", background: "#4E4E4E", fontSize:"30px"}}>Controle de Gastos Pessoais</Header>
      <Login/>
      <NovoUsuario/>
    </div>
  );
}

function PaginaCadastro(){
  return (
    <div className="cadastro">
      <FormularioLogin/>
    </div>
  );
}

function PaginaLogin(){
  return (
    <div className="login">
      <Formulario/>
    </div>
  );
}

function PaginaLancamentos(){
  return (
    <div className="lancamentos">
      <Lancamentos/>
    </div>
  );
}

export default App;
