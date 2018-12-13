import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './index.css'
import man1 from '../assets/man1.png';
import man2 from '../assets/man2.png';
import man3 from '../assets/man3.png';
import man4 from '../assets/man4.png';
import man5 from '../assets/man5.png';
import man6 from '../assets/man6.png';

class Hangman extends Component {
    renderHangmanImage = () => {
        switch (this.props.gameTurn) {
            case 6:
                return <img src={man1}/>
            case 5:
                return <img src={man2}/>
            case 4:
                return <img src={man3}/>
            case 3:
                return <img src={man4}/>
            case 2:
                return <img src={man5}/>
            case 1:
                return <img src={man6}/>
            default:
                return 
        }
    }
    render(){
        return (
            <div className='hangman-img'>
                {this.renderHangmanImage()}
            </div>
        )
    }
}

Hangman.propTypes = {
    gameTurn: PropTypes.number.isRequired
};

export default Hangman