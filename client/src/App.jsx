import axios from 'axios';
import { useEffect, useState } from 'react';
import Form  from "./form";
import About from "./about";
import { Routes, Route } from "react-router-dom"
import { useRoutes } from 'react-router-dom';
const App = () => {
  const routes = useRoutes([
      { path: '/', element: <Form /> },
      { path: '/about', element: <About /> },
      
  ]); 

  return routes;
};


export default App;
