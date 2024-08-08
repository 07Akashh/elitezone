import React from 'react';

const ColorSwatchButton = ({ color, onSelect }) => {
    const buttonStyle = {
        backgroundColor: color,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        margin: '5px',
        cursor: 'pointer',
    };

    return <button style={buttonStyle} onClick={() => onSelect(color)} />;
};

export default ColorSwatchButton;
