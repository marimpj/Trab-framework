import React from 'react'
import axios from 'axios'
import { Button } from 'antd'

export default function Login(props) {

    const url_login = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/login"

    const login = () => {
        let params = {username: "edson", senha: "123"}
        axios.post(url_login, params).then((resp) => {
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return <div>
        <Button style={{marginTop: "70px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"50px", fontSize: "150%"}} onClick={ login } type="primary" ghost>Login</Button>
    </div>

}