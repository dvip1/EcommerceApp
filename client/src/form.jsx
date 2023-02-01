import { NavLink } from "react-router-dom"
//a form.jsx that sends email and password to server running on port 3000 on home route using axios
import React, { useState } from "react"
import axios from "axios"
const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/", { email, password })
    }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
    }
export default Form