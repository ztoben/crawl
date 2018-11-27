import React, {Component} from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import {array} from 'prop-types';
import {BOUNDARY, FLOOR, VOID} from '../../utilities/tiles/constants';
import {isArrayEqual} from '../../utilities';

const miniMapStyle = {
  marginRight: 'auto',
  marginLeft: 'auto',
};

function getTileColor(tile, currPosition, selectedPosition) {
  const {discoveredPercent} = tile;

  if (isArrayEqual(selectedPosition, currPosition)) return 'red';
  if (tile.type === BOUNDARY) return 'white';
  if (discoveredPercent === 0) return 'lightgray';
  if (tile.type === FLOOR) return 'gray';
  if (tile.type === VOID) return 'black';

  return '';
}

class MiniMap extends Component {
  shouldComponentUpdate(nextProps) {
    const {map, selectedPosition} = this.props;
    const {map: nextMap, selectedPosition: nextSelectedPosition} = nextProps;
    return (
      JSON.stringify(map) !== JSON.stringify(nextMap) ||
      !isArrayEqual(selectedPosition, nextSelectedPosition)
    );
  }

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
                    fill={getTileColor(tile, [x, y], selectedPosition)}
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
