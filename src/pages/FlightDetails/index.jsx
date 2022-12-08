import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './style.css'

function FlightDetails() {
    document.title = "RiseUp | Detalhes do Voo"

    const { state } = useLocation()

    const navigate = useNavigate()

    function Redirect() {
        navigate('/pay', {state: state})
    }

    return (
        <main className='main_flght_details'>
            <h1 className='title'>Detalhes do Voo</h1>
            <section className="fligth_info">
                <p>Operado por: {state.airline}</p>
                <p>Voo: {state.flight_code}</p>
                <p>Assento: {state.seat}</p>
                <p>Origem: {state.departure} - {state.dep_date.toLocaleString()}</p>
                <p>Origem: {state.arrival} - {state.arr_date.toLocaleString()}</p>
                <p>Duração: {state.flight_duration}</p>

                <button onClick={() => Redirect()} className="btn btn-primary">Confirmar</button>
            </section>
        </main>
    );
}

export default FlightDetails;