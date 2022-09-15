import React from 'react';
import classes from "./Layout.module.css"

function TotalScore({value}) {
    return (
        <div >
        <h1>Total Score</h1>
        <div>{value}</div>
        </div>
    );
}

export default TotalScore;