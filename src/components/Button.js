import React from 'react';

const Button = ({clicks, styles}) => {
    return (
        <div>
            <button onClick={clicks} style={styles}>
            💬
            </button>
        </div>
    );
};

export default Button;