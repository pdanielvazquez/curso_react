import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            // console.log('Submit ejecutado');
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            {/* <h2>AddCategory</h2> */}
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}