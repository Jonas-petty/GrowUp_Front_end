import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import Flights from './pages/Flights';

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
          <Route path="/main:id" element={<Signin />} /> 
          <Route path="/forgotpassword" element={<ForgotPassword />}/>
          <Route path='/flights' element={<Flights />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
