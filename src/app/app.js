import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import StartScreen from './components/startScreen';
import NewGame from './components/newGame';
import Game from './components/game';
import Store from './store';
import './style/app.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Store.Container>
            <Route path="/" exact component={StartScreen} />
            <Route path="/new_game/" component={NewGame} />
            <Route path="/game/" component={Game} />
          </Store.Container>
        </div>
      </Router>
    );
  }
}
