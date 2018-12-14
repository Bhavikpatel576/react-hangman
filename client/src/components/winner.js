import './index.css'

import React from 'react';

const Winner = (props) => {
    const lost = props.gameResult
    const caption = (lost ? `Sorry but you lost. The correct word is ${props.correctWord}` : "You won! You should play again")
    return (
        <div>
            <h2>Game Result:</h2>
            <h2>{caption}</h2>
            <button onClick={props.onClick}>Play Again?</button>
        </div>
    )
}

export default Winner