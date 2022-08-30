import React from 'react';

function SaveScoreButton({onSave}) {
    return (
        <button onClick={onSave}>Save Score and End Turn</button>
    );
}

export default SaveScoreButton;