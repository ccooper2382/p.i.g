import React from 'react';
import RollButton from "./rollButton";
import SaveScoreButton from "./saveScoreButton";

function PlayerTile({name, score, turn, onRoll, onSave, onChange}) {

    return (
        <div>
            <form>
                <label htmlFor="playerName">Player Name</label>
                <input type="text"
                       id="playerName"
                       name="playerName"
                       placeholder="Enter Name"
                       value={name}
                       onChange={onChange}/>
            </form>
            <div>
                <h1>Current Score</h1>
                <div>{score}</div>
            </div>
            <RollButton turn={turn}
                        onRoll={onRoll}/>
            <SaveScoreButton onSave = {onSave} />
        </div>
    );
}

export default PlayerTile;