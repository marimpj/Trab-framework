import React from 'react'
import axios from 'axios'
import { Button, Form, Input, Card } from 'antd'

export default function Lancamentos(props) {

    const enviar = (dados) => {
        console.log(dados)
        }
    const erro = (err) => {
        console.log(err)
        }

    return <div style={{display:"flex", justifyContent:'center', marginTop: "30px"}}>
        <Card>
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
            <Button  type="primary" ghost htmlType="submit"> Enviar </Button>
            </Form.Item>
            </Form>
        </Card>
        </div>
    }