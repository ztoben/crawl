import React, {Component} from 'react';
import {Stage, Layer} from 'react-konva';
import {array} from 'prop-types';

const miniMapStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: 15,
};

class MiniMap extends Component {
  render() {
    return (
      <div style={miniMapStyle}>
        <h5 style={{margin: 0, textAlign: 'right'}}>minimap</h5>
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
