import React from 'react'
import axios from 'axios'
import { Button } from 'antd'

export default function NovoUsuario(props) {

    const url_novo = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/usuario"

    const criar = () => {
        let params = {username: "teste", senha: "123", "meta": 1000 }
        axios.post(url_novo, params).then((resp) => {
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return <div>
        <Button style={{marginTop: "30px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"50px", fontSize: "150%"}} onClick={ criar } type="primary" ghost>Criar Usuario</Button>
    </div>

}