import React from 'react';

import "./style.css"

function AccessibilityArea(props) {
    return (
        <aside className={`accessibility ${props.isHighContrast ? 'dark' : ''}`} >
            <div className="icons">
            <i onClick={props.AumentarFonte} className="bi bi-fonts" tabIndex='0' aria-label='Botão para aumentar tamanho da fonte.'></i>
            <i onClick={props.AtivarContraste} className="bi bi-square-half" tabIndex='1' aria-label='Botão para ativar modo de alto contraste.'></i>
            </div>

        </aside>
    );
}

export default AccessibilityArea;