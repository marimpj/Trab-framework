import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Card } from 'antd'

export default function Cadastro(props) {

    const enviar = (dados) => {
        console.log(dados)
        }
    const erro = (err) => {
        console.log(err)
        }

    return <div style={{display:"flex", justifyContent:'center', marginTop: "30px"}}>
        <Card>
            <Form name='cadastro' onFinish={enviar} onFinishFailed={erro}>
            <Form.Item style={{color: "white"}} label="Usuário" name="username"
            rules={[ { required: true, message: 'Informe seu nome de usuário' } ]}>
            <Input />
            </Form.Item>
            <Form.Item label="Senha" name="password" type="password" 
            rules={[ { required: true, message: 'Informe sua senha' } ]}>
            <Input />
            </Form.Item>
            <Form.Item>
            <Button  type="primary" ghost htmlType="submit"> Enviar </Button>
            </Form.Item>
            </Form>
        </Card>
        </div>
    }