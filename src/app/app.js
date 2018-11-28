import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Start from './components/start';
import Game from './components/game';
import './style/app.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Start} />
          <Route path="/game/" component={Game} />
        </div>
      </Router>
    );
  }
}
