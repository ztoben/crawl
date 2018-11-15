import React, {Component} from 'react';
import {number} from 'prop-types';
import '../style/tile.scss';

class Tile extends Component {
  render() {
    return (
      <div className="tile">

      </div>
    );
  }
}

Tile.propTypes = {
  value: number
};

export default Tile;
