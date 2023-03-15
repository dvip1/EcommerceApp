// A simple about me page
import React from 'react';
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function About() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/hello/')
        .then(response => setMessage(response.data.message))
        .catch(error => console.error(error));
    }, []);
    return (
        <div className="about">
        <h1>About Me</h1>
        <h1>{message}</h1>
        <NavLink to="/"><button>Home</button></NavLink>
        </div>
    );
    }
export default About;