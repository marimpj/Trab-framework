import React from 'react'
import axios from 'axios'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

export default function Login(props) {

    return <div>
        <Link to="/login">
            <Button style={{marginTop: "70px", color: "white", border: "2px solid #FAFAFA", width:"auto", height:"50px", fontSize: "150%"}} type="primary" ghost>Login</Button>
        </Link>
    </div>

}