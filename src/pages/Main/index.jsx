import React from 'react';

import { useParams } from 'react-router-dom';  

function Main() {

    const { id } = useParams()

    return (
        <>
            {id}         
        </>
    );
}

export default Main;