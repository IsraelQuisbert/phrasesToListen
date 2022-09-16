import React from 'react';

const Button = ({clicks, styles}) => {
    return (
        <div>
            <button onClick={clicks} style={styles}>
            Other 💬
            </button>
        </div>
    );
};

export default Button;