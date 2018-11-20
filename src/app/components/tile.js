import React, {Component} from 'react';
import {string, bool, object} from 'prop-types';
import '../style/tile.scss';

class Tile extends Component {
  render() {
    const {selected, content, style} = this.props;
    const selectedStyle = {
      ...style,
      fontSize: 16,
      color: 'black',
    };

    return (
      <div className={`tile${selected ? ' selected' : ''}`}>
        <span style={selected ? selectedStyle : style}>{selected ? '◯' : content}</span>
      </div>
    );
  }
}

Tile.propTypes = {
  type: string,
  selected: bool,
  content: string,
  style: object,
};

export default Tile;
