import React from 'react';
import './styles.css';

const Input = ({valorPlaceholder, title}) => {


    return (
        <input 
            placeholder={`${valorPlaceholder} ${title}`}
            className='app-input'
        />
    )
}

export default Input