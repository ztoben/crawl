import React, {Component} from 'react';
import {array} from 'prop-types';
import '../style/info.scss';

class Info extends Component {
  render() {
    const {dungeons, selectedPosition} = this.props;

    return (
      <div className="info-container">
        <h2>i n f o</h2>
        {dungeons ? (
          <div className="info">
            <ul>
              <li>{`${dungeons.length} dungeons generated`}</li>
              <li>{`Selected position ${selectedPosition}`}</li>
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

Info.propTypes = {
  dungeons: array,
  selectedPosition: array,
};

export default Info;
