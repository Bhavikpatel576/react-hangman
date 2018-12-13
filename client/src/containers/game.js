import React, {Component} from 'react';
import axios from 'axios'
import Keyboard from '../components/keyboard'
import Hangman from '../components/hangman'
import Winner from '../components/winner'
import GameConsole from '../components/gameConsole'
import './game.css'

const url = 'http://app.linkedin-reach.io/words'
const path = '/api/words'
const param = '?difficulty=1'

class Game extends Component {       
    constructor(props){
        super(props)
        this.state = {
            currentWord: "",
            loading: true,
            guessed: [],
            correctlyGuessed: [],
            numberOfGuesses: 6,
            gameOver: false
        }
        this.characters = "abcdefghijklmnopqrstuvwxyz12367890";
        this.baseState = this.state;
    }

    fetchWord = () => {
        axios.get('/api/words' + param)
        .then(response => {
          return response.data.split("\n")
        })
        .then(allWords => {
          const word = allWords[Math.floor(allWords.length * Math.random())]
          return word
        })
        .then((word) => {
            this.setState({
                currentWord: word,
                loading: false
            })
        })
    }

    componentDidMount(){
        this.fetchWord();
    }

    checkCharacter = (char) => {
        if (this.state.guessed.indexOf(char) === -1){
            this.setState((prevState) => {
                return {
                    guessed: prevState.guessed.concat(char)
                }
            })
        }
        if (this.state.currentWord.includes(char)){
             this.setState(prevState => ({correctlyGuessed: prevState.correctlyGuessed.concat(char)}
                ),() => this.checkGameStatus())
        } else {
            this.setState((prevState) => {
                return {
                    numberOfGuesses: prevState.numberOfGuesses - 1,
                }
            }, ()=>this.checkGameStatus())
        }
    }

    checkGameStatus = () => {
        if(this.state.numberOfGuesses === 0) {
            this.gameOver('lose');
        }
        var characterList = [...this.state.currentWord]
            .filter((value, index, self) => {
                return self.indexOf(value) === index;
            });
        if (characterList !== undefined){
            return (characterList.sort().toString() === this.state.correctlyGuessed.sort().toString() ? this.gameOver('win') : null);
        } else {
            return null;
        }
        
    }

    gameOver = (result) => {
        if (result === 'lose') {
          this.setState({
            lose: true,
            gameOver: true
          });
          this.showRest();
        } else {
          this.setState({
            lose: false,
            gameOver: true
          });
        }
    };

    showRest() {
        const missedLetterList = [...this.state.currentWord]
          .filter(char => !this.state.correctlyGuessed.includes(char));
        this.setState({
          missedLetters: missedLetterList.join(''),
        });
      }

    handleClick = (char, e) => {
        this.checkCharacter(char);
    }

    handleReset = () => {
        this.setState({...this.baseState}, () => this.fetchWord());
    }

    loading = () => (<div>Loading..</div>)

    render(){
        if (this.state.loading){
            return this.loading()
        } else if (this.state.gameOver){
            return (
                <div>
                    <div>The game is over</div>
                    <Winner
                        gameResult={this.state.lose}
                    />
                    <button onClick={this.handleReset}>Play Again?</button>
                </div>
            )
        } else { 
            return (
                <div className="game">
                    <h1>Hangman Game</h1>
                    <Hangman
                        gameTurn={this.state.numberOfGuesses}
                    />
                    <GameConsole 
                        currentWord={this.state.currentWord}
                        correctlyGuessed={this.state.correctlyGuessed}
                    />
                    <Keyboard
                        guesses={this.state.guessed}
                        onClick={this.handleClick}
                    />
                </div>
            )
        }
    }
}
  
export default Game