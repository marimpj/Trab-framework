import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Card } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import{ Layout, Select, Option } from'antd'
import Head from './Header'

const{ Header } = Layout;

export default function Lancamentos(props) {

    const url_novo = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto"

    const historyLancamento = useHistory()

    const { Option } = Select;
        function handleChange(value) {
    }

    const enviar = (dados) => {
        if (isNaN(dados.valor)) {
            alert("O valor deve ser um número.");
        } else {
            let gasto = new Object();
            gasto.username = localStorage.getItem("username")
            gasto.categoria = dados.categoria
            gasto.valor = parseInt(dados.valor)
            gasto.data = new Date().getTime()
            axios.post(url_novo, gasto).then((resp) => {
                if (resp.data.ok == true) {
                    historyLancamento.push('/extrato')
                } else {
                    alert('Erro: Alguma informação inserida encontra-se incorreta!')
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    const erro = (err) => {
        console.log(err)
    }

    return(
        <div>
            <Head/>
            <div style={{textAlign:"center"}}>
                <Link to="/extrato">
                    <Button style={{marginTop: "10px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"auto", fontSize: "110%"}} type="primary" ghost>Voltar</Button>
                </Link>
            </div>
            <div style={{display:"flex", justifyContent:'center', marginTop: "10px"}}>
                <Card>
                    <Header style={{color: "black", background: "white", fontSize:"20px", textAlign:"center", marginTop:"-15px", marginBottom:"25px"}} >Faça o seu Lançamento</Header>
                    <Form name='lancamentos' onFinish={enviar} onFinishFailed={erro}>
                        <Form.Item style={{color: "white"}} label="Valor" name="valor"
                        rules={[ { required: true, message: 'Informe o cadastro' } ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Categoria" name="categoria"
                        rules={[ { required: true, message: 'Informe a categoria' } ]}>
                            <Select style={{ width: 120 }} onChange={handleChange}>
                                <Option value="alimentacao">Alimentação</Option>
                                <Option value="lazer">Lazer</Option>
                                <Option value="transporte">Transporte</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <div style={{display:"flex", justifyContent:'center'}}>
                                <Button  type="primary" ghost htmlType="submit">Enviar</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
    }