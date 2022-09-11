import React from 'react';
import CurrentRoll from "./currentRoll";
import TotalScore from "./totalScore";


function RollTile(currentRoll, currentTotal) {
    return (
        <div className="w-1/3">
            <CurrentRoll value={currentRoll}/>
            <TotalScore value={currentTotal}/>
        </div>
    );
}

export default RollTile;