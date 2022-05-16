import React from 'react';
import '../index.css';

const Tecla = (props) => {


    const detectarOperador = (valor) => {
        return isNaN(valor) && (valor !== '.');
    }

    return (
        <button 
        className={`tecla ${detectarOperador(props.children) ? 'operador' : ''}`}
        onClick={ () => props.clic(props.children)}>
            {props.children}
        </button>
    );
}

export default Tecla;