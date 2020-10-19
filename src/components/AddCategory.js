import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {

        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 2) {

            setCategories((cats => [inputValue, ...cats]));
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}

            />
            <h2>AddCategory</h2>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
