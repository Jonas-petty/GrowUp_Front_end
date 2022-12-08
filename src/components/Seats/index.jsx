import React from 'react';


function Seats(props) {
    return (
        <div className='seats'>
            {props.values.map(seat => {
                return (
                <div role='button' className='seat' onClick={props.getSeat} key={seat}>{seat}</div>
                )
            })}
        </div>
    );
}

export default Seats;