import React from 'react';

function RollButton({turn, onRoll}) {
    if (!turn) return <button  disabled>Roll</button>

    return <button  onClick={onRoll}>Roll</button>


}

export default RollButton;