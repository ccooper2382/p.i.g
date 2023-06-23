import React from 'react';
import classes from "./victory.module.css"

function Victory({victor, show, onClick}) {

    if (!show) return <div></div>;

    return (
        <div >
            <h1>{`${victor} wins!`}</h1>
            <button onClick={onClick}>New Game</button>
        </div>
    );
}

export default Victory;