import React from 'react';
import '../index.css';

const Clear = (props) => {
    return (
        <button 
        className={'tecla-clear'}
        onClick={ () => props.clic(props.children)}>
            {props.children}
        </button>
    );
}


export default Clear