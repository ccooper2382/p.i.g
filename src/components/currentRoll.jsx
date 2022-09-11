import React from 'react';

function CurrentRoll({value}) {


    return (
        <div className="w-1/6">
            <h1>Current Roll</h1>
            <div>{value}</div>

        </div>
    );
}

export default CurrentRoll;