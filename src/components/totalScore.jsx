import React from 'react';

function TotalScore({value}) {
    return (
        <div className="w-1/6">
        <h1>Total Score</h1>
        <div>{value}</div>
        </div>
    );
}

export default TotalScore;