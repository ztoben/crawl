import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/start.scss';

class Start extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>c r a w l</h1>
        <div className="start-container">
          <Link to="/game/">
            <h3>start a new game</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Start;
