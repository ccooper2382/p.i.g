import React from 'react';

function PlayerTile(props) {
    console.log(props.name)
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
                <div>
                    <h1>Current Score</h1>
                    <div>{props.score}</div>
                </div>
                <button>Roll</button>
            </form>
        </div>
    );
}

export default PlayerTile;