import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import Seats from '../../components/Seats';

import './style.css'

function ChooseSeat() {
    document.title = "RiseUp | Escolher Assento"

    const [ departureTitle, setDepartureTitle ] = useState('')
    const [ arrivalTitle, setArrivalTitle ] = useState('')

    const { state } = useLocation()
    
    const navigate = useNavigate()

    // useEffect(() => {
    //     fetch(`https://airlabs.co/api/v9/airports?iata_code=${state.departure}&api_key=5349eddd-e9fa-47fd-a1cd-e0bb46eb362c`)
    //         .then(response => response.json())
    //         .then(data => setDepartureTitle(data.response[0].name))
    // }, [])

    // useEffect(() => {
    //     fetch(`https://airlabs.co/api/v9/airports?iata_code=${state.arrival}&api_key=5349eddd-e9fa-47fd-a1cd-e0bb46eb362c`)
    //         .then(response => response.json())
    //         .then(data => setArrivalTitle(data.response[0].name))
    // }, [])

    // console.log(seatElements)

    function createSeats (rows, startIndex) {
        let i = 0
        let j = startIndex
        let k = 'A'
        const section = []

        while (i < 6 && j <= rows) {
            if (k > 'F') {
                k = 'A'
                j++
            }
            if (j < rows + 1) {
                section.push(j + k)
                k = String.fromCharCode(k.charCodeAt(0) + 1)
            }
        }
        return section
    }

    function getSeat(event) {
        const seat = event.target.innerHTML

        const flight_info = {...state, seat: seat}

        navigate('/flightdetails', {state: flight_info})


    }

    const premiumSeats = createSeats(2, '1')
    const regularSeats = createSeats(10, '3')
    
    return (
        <main className='main'>
            <section className="seats_info">
                <aside className="flight_info">
                    <p>Voo - {state.flight_code}</p>
                    <p>Origem - <abbr title={departureTitle}>{state.departure}</abbr></p>
                    <p>Destino - <abbr title={arrivalTitle}>{state.arrival}</abbr></p>
                </aside>
                <div className="airplane airplane_body">
                    <Seats values={premiumSeats} getSeat={(ev) => getSeat(ev)}/>
                    <hr />
                    <Seats values={regularSeats} getSeat={(ev) => getSeat(ev)}/>
                </div>
            </section>
        </main>
    );
}

export default ChooseSeat;