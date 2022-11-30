import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

import "./style.css"

function Login() {
    const { register , handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <main className='login-main'>
            <form className='regular-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className='form-control form-control-lg' placeholder={'exemplo@email.com'} required
                {...register('email', {required: "Por favor digite o seu Email"})} />

                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" name="senha" id="senha" className="form-control form-control-lg" placeholder={'Digite sua senha'} required
                {...register('senha', {required: "Por favor digite a sua Senha"})}/>

                <button type="submit" className='btn btn-primary'>Entrar</button>
                <Link to="forgotPassword" className='opt-links'>Esqueci minha senha</Link>
                <br />
                <Link to="/signin" className='opt-links'>Ainda não tenho uma conta</Link>
            </form>
        </main>
    );
}

export default Login;