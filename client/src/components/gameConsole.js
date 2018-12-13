import React from 'react';
import './gameconsole.css';

const GameConsole = (props) => {
    let display = [...props.currentWord].map((char, idx)=>{
        return (
            props.correctlyGuessed.includes(char) ? 
                <li key={char + idx}>{char}</li> : 
                <li key={char + idx}>_</li>
            )
    })
     return (
        <div className="gameConsole">
            {display}
        </div>

     )
}

export default GameConsole