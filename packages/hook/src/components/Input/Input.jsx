import React, { useState, useEffect } from 'react';

const Input = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
        console.log('Input value is', value || 'empty');
    }, [value])

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Type something..."
        />
    )
}

export default Input;