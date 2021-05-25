import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Card } from 'antd'
import { Link } from 'react-router-dom'
import{Layout} from'antd'
import Head from './Header'

const{ Header} = Layout;

export default function Lancamentos(props) {

    const url_novo = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/gasto"

    const criar = () => {

        let timestamp = new Date().getTime()
        let params = {username: "edson", categoria: "Transporte", valor: 50, data: timestamp}
        axios.post(url_novo, params).then((resp) => {
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const enviar = (dados) => {
        console.log(dados)
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
                <Input />
                </Form.Item>
                <Form.Item label="Categoria" name="category"
                rules={[ { required: true, message: 'Informe a categoria' } ]}>
                <Input />
                </Form.Item>
                <Form.Item label="Data" name="data"
                rules={[ { required: true, message: 'Informe a data' } ]}>
                <Input />
                </Form.Item>
                <Form.Item>
                <div style={{display:"flex", justifyContent:'center'}}>
                    <Link to="/extrato">
                        <Button  type="primary" ghost htmlType="submit" onClick={ criar }> Enviar </Button>
                    </Link>
                </div>
                </Form.Item>
                </Form>
            </Card>
            </div>
        </div>
    )
    }