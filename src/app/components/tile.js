import React, {Component} from 'react';
import {string, bool, number, arrayOf} from 'prop-types';
import '../style/tile.scss';

class Tile extends Component {
  render() {
    const {selected} = this.props;

    return (
      <div className={`tile${selected ? ' selected' : ''}`}>

      </div>
    );
  }
}

Tile.propTypes = {
  type: string,
  selected: bool
};

export default Tile;
