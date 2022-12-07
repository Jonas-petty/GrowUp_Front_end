import React from 'react';
import { useLocation } from 'react-router-dom';

import './style.css'

function ChooseSeat() {

    const { state } = useLocation()

    return (
        <main>
            <section className="seats_info">
                <aside className="flight_info">
                    <p>Voo - {state.flight_code}</p>
                    <p>Origem - {state.departure}</p>
                    <p>Destino - {state.arrival}</p>
                </aside>
                <div className="airplane airplane_body">
                    
                </div>
            </section>
        </main>
    );
}

export default ChooseSeat;