import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./style.css"

function Navbar({auth, isloged}) {
    const navigate = useNavigate()

    function SignOut(auth) {
        auth.signOut()
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h1>RiseUp</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item">
                            <Link to="/" className='nav-link active' aria-current="page">Comprar Passagem</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Checkin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Status de Voo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  disabled" href="#">Atendimento</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Informações</a>
                        </li>
                        <li className="nav-item">
                            {
                            isloged ?
                                <button className='btn btn-primary' onClick={() => SignOut(auth)}>Sair</button>
                                :
                                <Link className="btn btn-primary" role='button' to="login">Login</Link>
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;