import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import Flights from './pages/Flights';

function PagesRoutes() {
    return (
            <div className="root">
                <Router>
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
                </Router>
            </div>
    );
}

export default PagesRoutes;