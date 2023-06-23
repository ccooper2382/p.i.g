import React from 'react';
import classes from "./centerTile.module.css"

function TotalScore({value}) {
    return (
        <div >
        <h1>Total Score</h1>
        <div className={classes.score}>{value}</div>
        </div>
    );
}

export default TotalScore;