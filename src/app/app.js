import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Store from './store';
import Routes from './routes';
import './style/app.scss';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Store.Container>
            <Routes />
          </Store.Container>
        </div>
      </Router>
    );
  }
}
