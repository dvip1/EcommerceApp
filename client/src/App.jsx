//import React from "react"
import Form from "./form"
//import SignForm from "./signupform"
//import { BrowserRouter,Routes,Route } from "react-router-dom"
//

// function App() {
  

//   return (
//   <div className="App flex justify-center items-center min-h-screen bg-slate-400">
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Form/>}></Route>
//     <Route path="signupform" element={<SignForm/>}></Route>

//   </Routes>

//   </BrowserRouter>
  
//     </div>
//   )
// }

// export default App
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
