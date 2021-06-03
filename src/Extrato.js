import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Table, Button, Progress } from 'antd'
import Head from './Header'
import { Link } from 'react-router-dom'

export default function Gastos(props) {

    let url_novo = `https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto?username=${localStorage.getItem("username")}`
    let url_default = 'https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto'

    const [itemsList, setitemsList] = useState([])

    useEffect(() => {
         listarGastos()
    }, [])

    const listarGastos = () => {
        let temp = []
        axios.get(url_novo).then((resp) => {

            resp.data.gastos.forEach((item, idx) => {
                let single = {
                    id: `${item._id}`,
                    rev: `${item._rev}`,
                    key: `${idx}`,
                    data: `${new Date(item.data)}`,
                    categoria: `${item.categoria}`,
                    valor: `R$ ${item.valor}`
                }
                temp.push(single)
            })
            setitemsList(temp)
        })
        .then(() => {
            console.log(itemsList)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const apagar = (id, rev) => {
        axios.delete(url_default + `?id=${id}&rev=${rev}`).then((resp) => {
            console.log(resp.data)
        })
        .then(() => {
            listarGastos()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const listarTotalAlimentacao = () => {
        axios.get(url_novo).then((resp) => {
            resp.data.gastos.forEach((item, idx) => {
                let soma = 0
                let teste = []

                for (let i; i <itemsList.length; i++){
                    if(item.categoria === "alimentacao"){
                        teste[i] = parseInt(item[i].valor);      
                        soma += parseInt(teste[i]);
                    }   
                }
            return soma
            })
        })
    }
    

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
            render: (text, record) => (
                <button onClick={(event) => {
                    let id = record.id
                    let rev = record.dev
                    apagar(id, rev)
                }}>
                  Excluir
                </button>
            ),
        },
    ];
    
    const dataSource1 = [
        {
          key: '1',
          gasto: 'Total gasto em transporte:',
          valor: 23
        },
        {
          key: '2',
          gasto: 'Total gasto em lazer:',
          valor: 234
        },
        {
          key: '3',
          gasto: 'Total gasto em alimentação:',
          valor: listarTotalAlimentacao()
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