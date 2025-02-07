import React, { useState, useEffect } from 'react';

const DatePicker = ({ options, onSelect, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue || '');

    useEffect(() => {
        if (onSelect && selectedValue) {
            onSelect(selectedValue);
        }
    }, [selectedValue, onSelect]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedValue(value);

        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <select value={selectedValue} onChange={handleChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default DatePicker;