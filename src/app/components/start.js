import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../style/start.scss';

class Start extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>c r a w l</h1>
        <div className="start-container">
          <Link to="/game/">N E W _ G A M E</Link>
        </div>
      </div>
    );
  }
}

export default Start;
