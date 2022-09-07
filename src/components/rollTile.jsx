import React from 'react';
import CurrentRoll from "./currentRoll";
import TotalScore from "./totalScore";
import classes from "../layout.module.css";

function RollTile(currentRoll, currentTotal) {
    return (
        <div className={classes.flexItem}>
            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
        </div>
    );
}

export default RollTile;