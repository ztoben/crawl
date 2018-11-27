import React, {Component} from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import {array} from 'prop-types';
import {BOUNDARY, FLOOR, VOID} from '../../utilities/tiles/constants';

const miniMapStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
};

function getTileColor(tile, x, y, selectedPosition) {
  if (selectedPosition[0] === x && selectedPosition[1] === y) return 'red';
  if (tile.type === BOUNDARY) return 'white';
  /* TODO: remove these comments when minimap rendering speed is improved */
  if (tile.type === FLOOR /* && tile.discoveredPercent > 0*/) return 'gray';
  if (tile.type === VOID /* && tile.discoveredPercent > 0*/) return 'black';

  return 'lightgray';
}

class MiniMap extends Component {
  render() {
    const {map, selectedPosition} = this.props;

    return (
      <div style={miniMapStyle}>
        <Stage width={200} height={200}>
          <Layer>
            {map.map((row, x) => {
              return row.map((tile, y) => {
                return (
                  <Rect
                    x={y * 2}
                    y={x * 2}
                    width={2}
                    height={2}
                    fill={getTileColor(tile, x, y, selectedPosition)}
                    key={`[${x}${y}]`}
                  />
                );
              });
            })}
          </Layer>
        </Stage>
      </div>
    );
  }
}

MiniMap.propTypes = {
  map: array,
  selectedPosition: array,
};

export default MiniMap;
