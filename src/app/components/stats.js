import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/stats.scss';

class Stats extends Component {
  render() {
    return (
      <div className="stats-container">
        <h2>s t a t s</h2>
        <div className="stats">
          <div />
          <Link to="/">R E S E T</Link>
        </div>
      </div>
    );
  }
}

Stats.propTypes = {};

export default Stats;
