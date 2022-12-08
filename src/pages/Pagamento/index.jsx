import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import "./style.css"

function Pagamento() {

    const [isPago, setIsPago] = useState(false)

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }} = useForm()

    function pagar() {
        setIsPago(prev => !prev)
    }

    const { state } = useLocation()

    return (
        <main className='login-main'>
            { !isPago ?
            <form className="regular-form" onSubmit={handleSubmit(pagar)}>
                <label htmlFor="opt_pagamento" className="form-label">Opção de Pagamento</label>
                <select name="opt_pagamento" id="opt_pagamento" className="form-select form-select-lg" required
                {...register('otp_pagamento', {required: true})}>
                    <option value="">-- Selecione --</option>
                    <option value="credito">Cartão de crédito</option>
                    <option value="debito">Cartão de débito</option>
                </select>

                <label htmlFor="numero_cartao" className="form-label">Número do Cartão</label>
                <input type="number" name="numero_cartao" id="numero_cartao" className="form-control form-control-lg" required
                {...register('numero_cartao', {required: false})}/>

                <label htmlFor="validade" className="form-label">Validade</label>
                <input type="date" name="validade" id="validade" className="form-control form-control-lg" required
                {...register('validade', {required: true})}/>

                <label htmlFor="nome_titular" className="form-label">Nome do Titular</label>
                <input type="text" name="nome_titular" id="nome_titular" className="form-control form-control-lg" required
                {...register('nome_titular', {required: true})}/>

                <label htmlFor="codigo_seguranca" className="form-label">Código de Segurança</label>
                <input type="number" name="codigo_seguranca" id="codigo_seguranca" className="form-control form-control-lg" required
                {...register('codigo_seguranca', {required: true})}/>

                <label htmlFor="parcelas" className="form-label">Opção de Pagamento</label>
                <select name="parcelas" id="parcelas" className="form-select form-select-lg" required
                {...register('parcelas', {required: true})}>
                    <option value="">-- Selecione --</option>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="5">5x</option>
                    <option value="12">12x</option>
                </select>

                <button type="submit" className='btn btn-primary'>Confirmar</button>
            </form> :
                <div className="regular-form">
                    <h1 className='title ispago'>Pagamento Concluído com Sucesso!</h1>
                    <Link className='btn btn-primary' to='/'>Voltar para o Início</Link>
                </div>
            }
        </main>
    );
}

export default Pagamento;