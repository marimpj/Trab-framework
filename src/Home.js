
import React from 'react'
import Head from './Header';
import Login from './Login';
import NovoUsuario from './NovoUsuario';



export default function Home(props){
    return (  
      <div className="Home" style={{textAlign:"center"}}>  
        <Head/>
        <Login/>
        <NovoUsuario/>
      </div>
    );
  }