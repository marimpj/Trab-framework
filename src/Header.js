
import React from 'react'
import{Layout} from'antd'

const{ Header} = Layout;

export default function Head(props){
    return (
      <div className="Header"> 
        <Header style={{color: "white", background: "#4E4E4E", fontSize:"30px", textAlign:"center"}}>Controle de Gastos Pessoais</Header>
      </div>
    );
  }