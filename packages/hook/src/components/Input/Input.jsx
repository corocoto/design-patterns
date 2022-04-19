import React, { useState, useEffect } from 'react';
import { useKeyPress } from '../../hooks';

const Input = () => {
    const [value, setValue] = useState('');
    const pressQ = useKeyPress('q');

    useEffect(() => {
      if (pressQ) {
        console.log('Pressed Q');
      }
    }, [pressQ])

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
