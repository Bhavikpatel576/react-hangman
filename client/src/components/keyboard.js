import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './index.css'

class Keyboard extends Component {
    constructor(props){
        super(props)
        this.characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    }

    createCharacters = () => {
        return this.characters.split("").map((char)=> {
            return (
                <li key={char}>
                    <button 
                    id={char}
                    disabled={this.props.guesses.includes(char) ? true : false}
                    onClick={() => this.props.onClick(char)}
                    >
                        {char}
                    </button>
                </li>
            )
        })
    }

    render(){
        return (
            <div className="keyboard">
                {this.createCharacters()}
            </div>
        );
    }
}

Keyboard.propTypes = {
    guesses: PropTypes.array.isRequired
};

export default Keyboard