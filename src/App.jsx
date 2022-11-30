import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Signin from './pages/Signin';

import "./App.css"

function App() {
  return (
    <Router>
      <div className='root'>
      <header>
        <Navbar />
      </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signin" element={<Signin />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
