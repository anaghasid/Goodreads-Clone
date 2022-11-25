import React, {useState} from "react"
import "./Contact.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Contact = ({ setContactUser}) => {

    const history = useNavigate()
// changed from useHistory
    const [ user, setUser] = useState({
		name:"",
        email:"",
        comments:""
    })
	const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
	const contact = () => {
        axios.post("http://localhost:3000/contact", user)
        .then(res => {
            alert(res.data.message)
            setContactUser(res.data.user)

        })
    }



    return (
        <div className="contact">
            <h1>Contact Us</h1>
			
			<input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your Name"></input>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
			<form action="#">
        <textarea rows="10" cols="50" name="comments" placeholder="Enter the subject">
        </textarea>
    </form>
			<div className="button" onClick={contact}>Submit</div>
        </div>
		
    )
}

export default Contact
