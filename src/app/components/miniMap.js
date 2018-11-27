import React, {Component} from 'react';
import {Stage, Layer} from 'react-konva';
import {array} from 'prop-types';

const miniMapStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
};

class MiniMap extends Component {
  render() {
    return (
      <div style={miniMapStyle}>
        <Stage width={200} height={200}>
          <Layer>{this.props.miniMapArray}</Layer>
        </Stage>
      </div>
    );
  }
}

MiniMap.propTypes = {
  miniMapArray: array,
};

export default MiniMap;
