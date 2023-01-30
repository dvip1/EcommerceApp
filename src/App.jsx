import React from "react"
import Form from "./form"
import SignForm from "./signupform"
import { BrowserRouter,Routes,Route } from "react-router-dom"


function App() {
  

  return (
  <div className="App flex justify-center items-center min-h-screen bg-slate-400">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Form/>}></Route>
    <Route path="signupform" element={<SignForm/>}></Route>

  </Routes>

  </BrowserRouter>
  
    </div>
  )
}

export default App
