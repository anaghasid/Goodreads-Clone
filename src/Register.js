import React, { useState } from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const nav = useNavigate()

    const [ user, setUser] = useState({
        // // hooks to add state inside function. 
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        // terms used to compare. Shorter than using user.name ...
        if( name && email && password && (password === reEnterPassword))
        {
            // if all fields are filled and passwords match, post the information to backend
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                nav("/logreg")
                // navigate to logreg after registering
            })
        } else {
            alert("The two passwords do not match, try again!")
        }
        
    }

    return (
        <div className="login">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
        </div>
    )
}

export default Register