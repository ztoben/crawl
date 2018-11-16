import React, {Component} from 'react';
import {string, bool} from 'prop-types';
import '../style/tile.scss';

class Tile extends Component {
  render() {
    const {selected, content} = this.props;

    return (
      <div className={`tile${selected ? ' selected' : ''}`}>
        <p>{content}</p>
      </div>
    );
  }
}

Tile.propTypes = {
  type: string,
  selected: bool,
  content: string
};

export default Tile;
