import React from 'react';
import './index.css'

const Header = (props) => {
    return (
        <div className="nav-container">
            <nav>
                <button id="About" onClick={props.onClick}>About</button>
                <button id="Play" onClick={props.onClick}>Play</button>
                <button id="ScoreBoard" onClick={props.onClick}>ScoreBoard</button>
                <a href="https://github.com/Bhavikpatel576/react-hangman">Github</a>
            </nav>
            <header>
                <h1>Hangman</h1>
            </header>
        </div>
    )
}

export default Header