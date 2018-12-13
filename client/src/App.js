import React, {Component} from 'react';
import Game from './containers/game';
import Header from './components/header';
import './assets/stylesheets/index.css';

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Game/>
            </div>
        )
    }
}
  
export default (App)