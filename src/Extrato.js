import React from 'react'
import axios from 'axios'
import { Card, Table, Button, Progress } from 'antd'
import Head from './Header'
import { Link } from 'react-router-dom'

export default function Gastos(props) {

    let url_novo = `https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto?username=${localStorage.getItem("username")}`

    const itemsList = []

    const listarGastos = () => {
        axios.get(url_novo).then((resp) => {

            resp.data.gastos.forEach((item, idx) => {
                let single = {
                    key: `${idx}`,
                    data: `${Date(item.data)}`,
                    categoria: `${item.categoria}`,
                    valor: `R$ ${item.valor}`
                }
                itemsList.push(single)
            })

        })
        .then(() => {
            console.log(itemsList)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const apagar = () => {
        axios.delete(url_novo + "?id=b3dc39952eb0ef0386763344c5c4bdc7&rev=1-0612ec1b12e30121942cd6f4587ac4ed").then((resp) => {
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    listarGastos()

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

    console.log(dataSource0)
    console.log(itemsList)

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
                    <Table dataSource={itemsList} columns={columns0} pagination={false} />
                    <Table dataSource={dataSource1} columns={columns1} pagination={false} />
                </Card>
            </div>
            <div style={{display:"flex", justifyContent:'center', color: "white", marginTop: "20px", fontWeight:"bold", fontSize:"115%"}}>Valor alcançado da meta:</div>
            <div style={{display:"flex", justifyContent:'center', color: "white"}}>
                <div style={{padding: "30px" }}>
                    <Progress type="circle" percent={30} />
                </div>
            </div>
        </div>
    );
}