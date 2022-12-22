import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

import GoogleSigninButton from '../../components/GoogleSiginButton';

import "./style.css"
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login({auth}) {
    document.title = "RiseUp | Login"

    const { register , handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    function LoginUser(userData) {
        signInWithEmailAndPassword(auth, userData.email, userData.senha)
            .then((userCredential) => {
                const user = userCredential.user

                alert(`Usuário: ${user.displayName} encontrado!`)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }

    return (
        <main className='login-main'>
            <GoogleSigninButton 
                content={'Cadastrar com Google'}
            />

            <form className='regular-form' onSubmit={handleSubmit(LoginUser)}>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className='form-control form-control-lg' placeholder={'exemplo@email.com'} required
                {...register('email', {required: "Por favor digite o seu Email"})} />

                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" name="senha" id="senha" className="form-control form-control-lg" placeholder={'Digite sua senha'} required
                {...register('senha', {required: "Por favor digite a sua Senha"})}/>

                <button type="submit" className='btn btn-primary'>Entrar</button>
                <Link to="/forgotpassword" className='opt-links'>Esqueci minha senha</Link>
                <br />
                <Link to="/signin" className='opt-links'>Ainda não tenho uma conta</Link>
            </form>
        </main>
    );
}

export default Login;