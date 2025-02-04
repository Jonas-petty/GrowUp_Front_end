import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import './style.css'


function Flights() {
    document.title = "RiseUp | Lista Voos"

    const [ flights, setFlights ] = useState([])

    const navigate = useNavigate()
    const { state } = useLocation()
    const userDepDate = new Date(`${state.data_ida}T00:00`)

    useEffect(() => {
        fetch(`https://airlabs.co/api/v9/schedules?dep_iata=${state.origem}&api_key=5349eddd-e9fa-47fd-a1cd-e0bb46eb362c`)
            .then(response => response.json())
            .then((data) => {
                // console.log(data.response)
                setFlights(data.response)
            })
    }, [state])    

        function padToTwoDigits(num) {
            return num.toString().padStart(2, '0')
        }
    
        function toHoursAndMinutes(totalMintutes) {
            const hours = Math.floor(totalMintutes / 60)
            const minutes = totalMintutes % 60

            return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`
        }

        function Redirect(data) {
            // alert(data)
            navigate('/chooseseat', {state: data})

        }

        const flightElements = flights.map((flight, index) => {
            const dep_date = new Date(flight.dep_time_utc)
            const arr_date = new Date(flight.arr_time_utc)

            const flight_duration = toHoursAndMinutes(flight.duration)

            const data = {
                airline: flight.airline_iata,
                flight_code: flight.flight_iata,
                departure: flight.dep_iata,
                arrival: flight.arr_iata,
                dep_date: dep_date,
                arr_date: arr_date,
                flight_duration: flight_duration
            }

            if (userDepDate.toLocaleDateString() == dep_date.toLocaleDateString() && flight.arr_iata == state.destino) {
                return (
                    <tr key={index} onClick={() => Redirect(data)}>
                        <th scope="row">{flight.dep_iata} - {dep_date.toLocaleString()}</th>
                        <td>{flight.arr_iata} - {arr_date.toLocaleString()}</td>
                        <td>{flight_duration}</td>
                        <td>{flight.airline_iata} - {flight.flight_iata}</td>
                        <td>R$999.99</td>
                    </tr>
                )
            }

        })

    return (
        <main className='main'>
            { flightElements.length != 0 ?
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope='col'>Origem</th>
                            <th scope='col'>Destino</th>
                            <th scope='col'>Duração</th>
                            <th scope='col'>Companhia</th>
                            <th scope='col'>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flightElements}
                    </tbody>
                </table> : 
                <h1>Nenhum voo foi encontrado!</h1>
            }
        </main>
    );
}

export default Flights;