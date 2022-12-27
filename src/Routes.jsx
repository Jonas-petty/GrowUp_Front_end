import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import Flights from './pages/Flights';
import ChooseSeat from './pages/ChooseSeat';
import FlightDetails from './pages/FlightDetails';
import Pagamento from './pages/Pagamento';

function PagesRoutes({auth, db, isloged}) {
    return (
            <div className="root">
                <Router>
                    <header>
                        <Navbar auth={auth} isloged={isloged} />
                    </header>
                    <Routes>
                        <Route index path='/' element={<Home />} />
                        <Route path='/login' element={<Login auth={auth} />} />
                        <Route path="/signin" element={<Signin auth={auth} />} />
                        <Route path="/main:id" element={<Signin />} />
                        <Route path="/forgotpassword" element={<ForgotPassword />}/>
                        <Route path='/flights' element={<Flights />}/>
                        <Route path='/chooseseat' element={<ChooseSeat />}/>
                        <Route path='/flightdetails' element={<FlightDetails />}/>
                        <Route path='/pay' element={<Pagamento auth={auth} db={db} isloged={isloged}/>}/>
                    </Routes>
                </Router>
            </div>
    );
}

export default PagesRoutes;