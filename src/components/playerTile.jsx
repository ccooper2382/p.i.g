import React from 'react';
import RollButton from "./rollButton";

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
            <RollButton turn={props.turn}
                        onRoll={props.onRoll}/>
        </div>
    );
}

export default PlayerTile;