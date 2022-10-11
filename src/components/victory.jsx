import React from 'react';

function Victory({victor, show}) {

    if (!show) return null;

    return (
        <div>
            <h1>{`${victor} wins!`}</h1>
            <button>New Game</button>
        </div>
    );
}

export default Victory;