import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const nav = useNavigate()
// changed from useHistory
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setUser(res.data.user)
            nav(`/home/${res.data.user.name}`)
        })
        .catch(function(err){
            console.log(err)
        })
    }

    return (
        <div className="login">
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your password" ></input>
            <div className="button" onClick={login}>Login</div>
            <a style={{color:"blue"}} onClick={() => nav("/register")}>Have no account yet? Sign up</a>
        </div>
    )
}

export default Login
