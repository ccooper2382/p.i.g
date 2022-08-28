import React from 'react';

function TotalScore(props) {
    return (
        <div>
        <h1>Total Score</h1>
        <div>{props.value}</div>
        </div>
    );
}

export default TotalScore;