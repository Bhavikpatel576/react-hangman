import React from 'react';
import { Button } from 'semantic-ui-react'

export const Welcome = (props) => {
    return (
        <div>
            <p>
                Welcome to the game of Hangman. Would you like to play?
            </p>
            <Button onClick={props.startGame}>Yes</Button>
        </div>
    )
}