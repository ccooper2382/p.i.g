import React from 'react';

function PlayerTile(props) {

    return (
        <div>
            <form>
                <label htmlFor="playerName">Player Name</label>
                <input type="text"
                       id="playerName"
                       name="playerName"
                       placeholder="Enter Name"
                       value={props.name}
                       onChange={props.onChange}/>
            </form>
            <div>
                <h1>Current Score</h1>
                <div>{props.score}</div>
            </div>
            <button onClick={props.onRoll}>Roll</button>
        </div>
    );
}

export default PlayerTile;