import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Formulario from './FormularioLogin';
import FormularioLogin from './Formulario';
import Lancamentos from './Lancamentos';
import Home from './Home';
import Extrato from './Extrato';
import Gastos from './Extrato';


export default function Routes () {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path="/cadastro" component = {FormularioLogin}></Route>
          <Route path="/login" component = {Formulario}></Route>
          <Route path="/lancamentos" component = {Lancamentos}></Route>
          <Route path="/extrato" exact component = {Extrato}></Route>
        </Switch>
      </BrowserRouter>
    )
    
  }