import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Formulario from './Formulario';
import FormularioLogin from './FormularioLogin';
import Lancamentos from './Lancamentos';
import Home from './Home';
import Gastos from './Extrato';


export default function Routes () {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {Home}></Route>
          <Route path="/cadastro" component = {Formulario}></Route>
          <Route path="/login" component = {FormularioLogin}></Route>
          <Route path="/lancamentos" component = {Lancamentos}></Route>
          <Route path="/extrato" exact component = {Gastos}></Route>
        </Switch>
      </BrowserRouter>
    )
    
  }