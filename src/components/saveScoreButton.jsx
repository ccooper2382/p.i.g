import React from 'react';

function SaveScoreButton(props) {
    return (
        <button onClick={props.onSave}>Save Score and End Turn</button>
    );
}

export default SaveScoreButton;