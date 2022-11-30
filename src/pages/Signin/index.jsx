import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import "./style.css"

function Signin() {
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
    const onSubmit = data => console.log(data)


    return (
        <main className='login-main'>
            <form className='regular-form' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" name="name" id="name" className='form-control form-control-lg' placeholder={'Digite seu nome completo'} required
                {...register('name', {required: "Por favor digite o seu nome completo"})} />

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
                            <option value={null}> -- Selecione -- </option>
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