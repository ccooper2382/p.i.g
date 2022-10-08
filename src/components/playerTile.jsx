import React from 'react';
import RollButton from "./rollButton";
import SaveScoreButton from "./saveScoreButton";
import classes from "./playerTile.module.css"



function PlayerTile({name, score, turn, onRoll, onSave}) {


    return (
        <div className={classes.flex_item}>
            <div className={classes.tile}>
            <h2>{name}</h2>
            <div>
                <h1>Current Score</h1>
                <div className={classes.score}>{score}</div>
            </div>
            <RollButton turn={turn}
                        onRoll={onRoll}/>
            <SaveScoreButton onSave={onSave}/>
            </div>
        </div>
    );
}

export default PlayerTile;