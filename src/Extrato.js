import React from 'react'
import axios from 'axios'
import { Card, Table, Button } from 'antd'
import Head from './Header'
import { Link } from 'react-router-dom'

const dataSource0 = [
    {
      key: '1' ,
      data: '12/12/2021',
      categoria: 'Categoria: Alimentação',
      valor: 'R$ 35,00'
    },
    {
      key: '2',
      data: '12/12/2021',
      categoria: 'Categoria: Lazer',
      valor: 'R$ 35,00'
    },
];
  
const columns0 = [
    {
        title: 'Data',
        dataIndex: 'data',
        key: 'data',
    },
    {
        title: 'Categoria',
        dataIndex: 'categoria',
        key: 'categoria',
    },
    {
        title: 'Valor',
        dataIndex: 'valor',
        key: 'valor',
    },
    {
        title: '',
        dataIndex: 'excluir',
        key: 'excluir',
        render: () => (
            <button onClick={()=> console.log("Funcionando")}>
              Excluir
            </button>
        ),
    },
];

const dataSource1 = [
    {
      key: '1',
      gasto: 'Total gasto em transporte:',
      valor: 'R$ 35,00'
    },
    {
      key: '2',
      gasto: 'Total gasto em lazer:',
      valor: 'R$ 70,00'
    },
    {
      key: '3',
      gasto: 'Total gasto em alimentação:',
      valor: 'R$ 175,00'
    },
    {
      key: '4',
      gasto: 'Total geral:',
      valor: 'R$ 280,00'
    },
];
  
const columns1 = [
    {
        title: '',
        dataIndex: 'gasto',
        key: 'gasto',
    },
    {
        title: '',
        dataIndex: 'valor',
        key: 'valor',
    },
];

export default class Gastos extends React.Component {

    // const listarGastos = () => {

    //     let URL = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto?username=edson"
    //     axios.get(URL).then((resp) => {
            
    //         console.log(resp.data)
    //         resp.data.gastos.forEach((item, idx) => console.log(item.categoria, Date(item.data)))

    //     }).catch((err) => {
    //         console.log(err)
    //     })

    // }

    // const apagar = () => {

    //     axios.delete(url_novo + "?id=b3dc39952eb0ef0386763344c5c4bdc7&rev=1-0612ec1b12e30121942cd6f4587ac4ed").then((resp) => {
    //         console.log(resp.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    render() {
        return (
            <div>
                <Head/>
                <div style={{textAlign:"center"}}>
                    <Link to="/lancamentos">
                        <Button style={{marginTop: "10px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"auto", fontSize: "110%"}} type="primary" ghost>Fazer um lançamento</Button>
                    </Link>
                </div>
                <div style={{display:"flex", justifyContent:'center', marginTop: "30px"}}>
                    <Card>
                    <h1 style={{color: "black", background: "white", fontSize:"20px", textAlign:"center", marginTop:"-15px", marginBottom:"25px"}} >Extrato</h1>
                        <Table dataSource={dataSource0} columns={columns0} pagination={false} />
                        <Table dataSource={dataSource1} columns={columns1} pagination={false} />
                    </Card>
                </div>
                <div style={{textAlign:"center", color: "white"}}>
                    <p></p>
                    <p>Meta definida: X</p>
                    <p>Faltam X para atingir a meta</p>
                </div>
            </div>
        );
    }
}