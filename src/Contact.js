import React, {useState} from "react"
import "./Contact.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Contact = ({ setContactUser}) => {

//     const history = useNavigate()
// // changed from useHistory
//     const [ user, setUser] = useState({
// 		name:"",
//         email:"",
//         comments:""
//     })
// 	const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }
// 	const contact = () => {
//         axios.post("http://localhost:9002/contact", user)
//         .then(res => {
//             alert(res.data.message)
//             setContactUser(res.data.user)

//         })
//     }

const contact = () => {
    alert("Your review will be considered by us! Happy reading!!!");
}

    return (
        <div className="contact">
            <h1>Contact Us</h1>
			
			<input type="text" name="name"  placeholder="Enter your name"></input>
            <input type="text" name="email" placeholder="Enter your email"></input>
			<form action="#">
        <textarea rows="10" cols="50" name="comments" placeholder="Enter the subject">
        </textarea>
    </form>
			<div className="button" onClick={contact}>Submit</div>
        </div>
		
    )
}

export default Contact
