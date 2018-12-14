import React, {Component} from 'react';
import Game from './containers/game';
import Header from './components/header';
import Welcome from './containers/welcome';
import Score from './containers/score';
import './assets/stylesheets/index.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            scores: [],
            difficulty: 1,
            viewWelcomeScreen: true,
            viewScoreBoardScreen: true,
            viewGameScreen: true,
            currentScreen: null
        }
    }

    onChange = (value) =>{
        console.log(value)
        this.setState({difficulty: value})
    }

    saveScore = (state) => {
        this.setState((prevState)=>{
            return ({scores: prevState.scores.concat(state.numberOfGuesses)})
        })
    }

    playGame = () => {
        this.setState({currentScreen: 'Play'})
    }

    switchView = (e) => {
        this.setState({currentScreen: e.target.id})
    }

    renderScreen = () =>{
        switch (this.state.currentScreen) {
            case 'About':
                return <Welcome startGame={this.playGame} onChange={this.onChange}/>
            case 'Play':
                return <Game handleSavedScores={this.saveScore} difficulty={this.state.difficulty}/>
            case 'ScoreBoard':
                return <Score scores={this.state.scores}/>
            default:
                return <Welcome startGame={this.playGame} onChange={this.onChange}/>
        }
    }

    render(){
        return (
            <div>
                <Header
                    onClick={this.switchView}
                />
                <div className="game">
                    <div className="game-wrapper">
                        {this.renderScreen()}
                    </div>
                </div>
            </div>
        )
    }
}
  
export default (App)