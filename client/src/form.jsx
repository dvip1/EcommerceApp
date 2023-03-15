import { NavLink } from "react-router-dom"
import React, { useState } from "react"
import axios from "axios"
const Form = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/create_user/", { email, password })
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