import React from 'react';

function RollButton(props) {
    if (!props.turn) return <button disabled>Roll</button>

    return <button onClick={props.onRoll}>Roll</button>


}

export default RollButton;