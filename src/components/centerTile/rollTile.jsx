import React from 'react';
import CurrentRoll from "./currentRoll";
import TotalScore from "./totalScore";
import classes from "../Layout.module.css";


function RollTile({currentRoll, currentTotal, store, message}) {
    return (
        <div className={classes.flex_item}>
            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
            <button onClick={store}>Save Game</button>
            <div>{message}</div>
        </div>
    );
}

export default RollTile;