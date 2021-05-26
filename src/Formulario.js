import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Card, AutoComplete, Space, Slider } from 'antd'
import Head from './Header'
import { Link, useHistory} from 'react-router-dom'
import{ Layout } from'antd'

const{ Header } = Layout;

export default function Cadastro(props) {

    const url_novo = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/usuario"

    const historyLogin = useHistory()

    const enviar = (dados) => {
        axios.post(url_novo, dados).then((resp) => {
            console.log(resp.data)
            if (resp.data.ok == true) {
                historyLogin.push('/extrato')
            } else {
                alert(`${resp.data.erro}: Alguma informação inserida encontra-se incorreta!`)
            }
        })
        .catch((err) => {
            console.log(err)
        })
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
                    <Form name='cadastro' onFinish={enviar} onFinishFailed={erro}>
                        <Form.Item style={{color: "white"}} label="Usuário" name="username"
                            rules={[ { required: true, message: 'Informe seu nome de usuário' } ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Senha" name="senha" type="password" 
                            rules={[ { required: true, message: 'Informe sua senha' } ]}>
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item label="Meta" name="meta"
                            rules={[ { required: true, message: 'Informe sua meta' } ]}>
                            <Slider defaultValue={30} min={0} max={10000} />
                        </Form.Item>
                        <Form.Item>
                            <div style={{display:"flex", justifyContent:'center'}}>
                                <Button type="primary" ghost htmlType="submit">Criar</Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    )
} 