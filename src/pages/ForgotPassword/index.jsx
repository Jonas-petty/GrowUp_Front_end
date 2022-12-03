import React from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

import './style.css'

function ForgotPassword() {
    document.title = 'RiseUp | Lembrar Senha'

    const { register , handleSubmit, formState: { errors } } = useForm()
    const showdata = data => alert(data.email) // display the data

    return (
        <main className="login-main">
            <form className="regular-form" onSubmit={handleSubmit(showdata)}>
                <h2 className='form-title'>Digite seu Email cadastrado</h2>

                <input type="email" name="email" id="email" className="form-control form-control-lg"
                placeholder='Digite seu Email aqui' aria-label='Digite seu Email cadastrado para recuperação de senha' required
                {...register('email', {required: 'Por favor digite seu Email'})}/>

                <div className='buttons'>
                    <Link to="/login" className='btn btn-secondary' role="button">Voltar</Link>
                    <button type="submit" className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        </main>
    );
}

export default ForgotPassword;