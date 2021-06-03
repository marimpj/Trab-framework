import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Table, Button, Progress } from 'antd'
import Head from './Header'
import { Link, useHistory } from 'react-router-dom'

export default function Gastos(props) {

    let url_novo = `https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto?username=${localStorage.getItem("username")}`
    let url_default = 'https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto'
    let url_meta = `https://7c2bad50.us-south.apigw.appdomain.cloud/api/meta?username=${localStorage.getItem("username")}`

    const historyLogin = useHistory()

    const [itemsList, setitemsList] = useState([])

    const [somaAlimentacao, setsomaAlimentacao] = useState(0)

    const [somaTransporte, setsomaTransporte] = useState(0)

    const [somaLazer, setsomaLazer] = useState(0)

    const [somaGeral, setsomaGeral] = useState(0)

    const [valoralcancado, setvaloralcancado] = useState(0)

    useEffect(() => {
         listarGastos()
    }, [])

    useEffect(() => {
       somarTotal()
   })

   useEffect(() => {
        valorAlcancado()
    })

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

    const somarTotal = () => {
        let somaA = 0 
        let testeA = []
        let somaT = 0 
        let testeT = []
        let somaL = 0 
        let testeL = []
        let somaG = 0

        axios.get(url_novo).then((resp) => {
            resp.data.gastos.forEach((item) => {

                if (item.categoria === "alimentacao") {
                    testeA.push(parseInt(item.valor));
                }
                else if (item.categoria === "transporte") {
                    testeT.push(parseInt(item.valor));
                }
                else if (item.categoria === "lazer") {
                    testeL.push(parseInt(item.valor));
                }
            })
        })
        .then(() => {
            for (let i = 0; i < testeA.length; i++) {
                somaA += testeA[i]
            }
            setsomaAlimentacao(somaA)

            for (let i = 0; i < testeT.length; i++) {
                somaT += testeT[i]
            }
            setsomaTransporte(somaT)

            for (let i = 0; i < testeL.length; i++) {
                somaL += testeL[i]
            }
            setsomaLazer(somaL)  
            
            somaG = somaAlimentacao + somaLazer + somaTransporte
            setsomaGeral (somaG)
        })
    }
    
    const valorAlcancado = () => {
        axios.get(url_meta).then((resp) => {
            console.log(resp.data.meta)
            let meta = parseInt(resp.data.meta)
            let somas = parseInt(somaGeral)
            let valor = parseInt(meta - somas)
            let x = (100*valor)/meta
            console.log(x)
            setvaloralcancado(x)
        })
    }
      
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
                    let rev = record.rev
                    apagar(id, rev)
                }}>
                  Excluir
                </button>
            ),
        },
    ];

    function logout() {
        localStorage.removeItem("username")
        historyLogin.push("/")
    }
    
    const dataSource1 = [
        {
          key: '1',
          gasto: 'Total gasto em transporte:',
          valor: somaTransporte
        },
        {
          key: '2',
          gasto: 'Total gasto em lazer:',
          valor: somaLazer
        },
        {
          key: '3',
          gasto: 'Total gasto em alimentação:',
          valor: somaAlimentacao
        },
        {
          key: '4',
          gasto: 'Total geral:',
          valor: somaGeral
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
                <Button style={{marginTop: "3px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"auto", fontSize: "110%"}} onClick={logout} type="primary" ghost>Sair da conta</Button>
            </div>
            <div style={{textAlign:"center"}}>
                <Link to="/lancamentos">
                    <Button style={{marginTop: "30px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"auto", fontSize: "110%"}} type="primary" ghost>Fazer um lançamento</Button>
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
                <div style={{ padding: "30px" }}>
                    <Progress type="circle" percent={100-valoralcancado} />
                </div>
            </div>
        </div>
    );
}