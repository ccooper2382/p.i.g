import React from 'react';

function RollButton({turn, onRoll}) {
    if (!turn) return <button className="border-b-gray-900" disabled>Roll</button>

    return <button className="border-b-gray-900" onClick={onRoll}>Roll</button>


}

export default RollButton;