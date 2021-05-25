import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Card, AutoComplete } from 'antd'
import Head from './Header'
import { Link } from 'react-router-dom'
import{Layout} from'antd'

const{ Header} = Layout;

export default function Cadastro(props) {

    const url_novo = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/usuario"

    const criar = () => {
        let params = {username: "teste", senha: "123", meta: 1000}
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

    return (
        <div>
        <Head/>
        <div style={{textAlign:"center"}}>
            <Link to="/">
                <Button style={{marginTop: "15px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"auto", fontSize: "110%"}} type="primary" ghost>Voltar</Button>
            </Link>
        </div>
    <div style={{display:"flex", justifyContent:'center', marginTop: "10px"}}>
        <Card>
        <Header style={{color: "black", background: "white", fontSize:"20px", textAlign:"center", marginTop:"-15px", marginBottom:"25px"}} >Crie sua conta</Header>
            <Form name='login' onFinish={enviar} onFinishFailed={erro}>
            <Form.Item style={{color: "white"}} label="Usuário" name="username"
            rules={[ { required: true, message: 'Informe seu nome de usuário' } ]}>
            <Input />
            </Form.Item>
            <Form.Item label="Senha" name="password" type="password" 
            rules={[ { required: true, message: 'Informe sua senha' } ]}>
            <Input />
            </Form.Item>
            <Form.Item label="Meta" name="meta"
            rules={[ { required: true, message: 'Informe sua meta' } ]}>
            <Input />
            </Form.Item>
            <Form.Item>
            <div style={{display:"flex", justifyContent:'center'}}>
                <Link to="/extrato">
                    <Button  type="primary" ghost htmlType="submit" onClick={ criar }> Criar </Button>
                </Link>
            </div>
            </Form.Item>
            </Form>
        </Card>
        </div>
        </div>
    )
    }