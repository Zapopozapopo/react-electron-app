import React from 'react';
import './styles.css';

export const Input = (props) => {
    const { placeholder, value, onChange } = props;
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    return <div className={'input-wrapper'}>
        <input
            className={'input'}
            type={'number'}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    </div>;
};
