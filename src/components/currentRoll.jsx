import React from 'react';
import classes from "./centerTile.module.css"

function CurrentRoll({value}) {


    return (
        <div>
            <h1>Current Roll</h1>
            <div className={classes.score}>{value}</div>

        </div>
    );
}

export default CurrentRoll;