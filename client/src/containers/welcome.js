import React from 'react';

const Welcome = (props) => {
    return (
        <div>
            <h1>
                Welcome to the game of Hangman. Would you like to play?
            </h1>
            <button onClick={()=>props.startGame('Play')}>Play Game</button>
        </div>
    )
}

export default Welcome