import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import "./style.css"

function Signin({auth}) {
    document.title = "RiseUp | SignIn"

    const [nacionalidades, setNacionalidades] = useState([])

    useEffect(() => {
        fetch('https://amazon-api.sellead.com/country')
            .then(response => response.json())
            .then(data => setNacionalidades(data))
    }, [nacionalidades])

    let nacionalidadesArray = nacionalidades.map(nac => {
        return (
            <option key={nac.code} value={nac.name}>{nac.name}</option>
        )
    })

    const { register , handleSubmit, formState: { errors } } = useForm()

    function addUser(userData) {
        createUserWithEmailAndPassword(auth, userData.email, userData.senha)
            .then((userCredential) => {
                const user = userCredential.user

                updateProfile(auth.currentUser, {
                    displayName: userData.nome,
                    cpf: userData.cpf,
                    nacionalidade: userData.nacionalidade
                })
                .then(() => alert(`Usuário: ${userData.nome} cadastrado!`))
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    alert(errorMessage)
                })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                alert(errorMessage)
            })
    }


    return (
        <main className='login-main'>
            <form className='regular-form' onSubmit={handleSubmit(user => addUser(user))}>

                <label htmlFor="nome" className="form-label">Nome</label>
                <input type="text" name="nome" id="nome" className='form-control form-control-lg' placeholder={'Digite seu nome completo'} required
                {...register('nome', {required: "Por favor digite o seu nome completo"})} />

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="cpf" className="form-label">CPF</label>
                        <input type="text" name="cpf" id="cpf" className='form-control form-control-lg' placeholder='000.000.000-00' aria-invalid={errors.cpf ? "true" : "false"}
                        {...register('cpf', {required: 'Digite o padrão 000.000.000-00', pattern: /^([0-9]{3,3})\.([0-9]{3,3})\.([0-9]{3,3})\-([0-9]{2,2})$/})} />
                        <p role="alert">{errors.cpf?.message}</p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nacionalidade" className="form-label">Nacionalidade</label>
                        <select name="nacionalidade" id="nacionalidade" className='form-select form-select-lg' required
                        {...register('nacionalidade', {required: "Escolha a sua nacionalidade"})}>
                            <option value=''> -- Selecione -- </option>
                            {nacionalidadesArray}
                        </select>            
                    </div>
                </div>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" name="email" id="email" className='form-control form-control-lg' placeholder='exemplo@email.com' required
                {...register('email', {required: 'Digite seu Email'})}/>

                <label htmlFor="senha" className="form-label">Senha</label>
                <input type="password" name="senha" id="senha" className="form-control form-control-lg" placeholder={'Digite sua senha'} required
                {...register('senha', {required: "Por favor digite a sua Senha"})}/>

                <button type="submit" className='btn btn-primary'>Cadastrar</button>
            </form>
        </main>
    );
}

export default Signin;