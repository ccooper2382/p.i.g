import React from 'react';
import RollButton from "./rollButton";
import SaveScoreButton from "./saveScoreButton";

function PlayerTile({name, score, turn, onRoll, onSave}) {


    return (
        <div>
            <h2>{name}</h2>
            <div>
                <h1>Current Score</h1>
                <div>{score}</div>
            </div>
            <RollButton turn={turn}
                        onRoll={onRoll}/>
            <SaveScoreButton onSave={onSave}/>
        </div>
    );
}

export default PlayerTile;