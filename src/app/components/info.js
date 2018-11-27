import React, {Component} from 'react';
import {array} from 'prop-types';
import {FLOOR} from '../../utilities/tiles/constants';
import '../style/info.scss';

class Info extends Component {
  render() {
    const {dungeons, selectedPosition, map} = this.props;
    const tiles = map.flat();
    const totalFloor = tiles.filter(tile => tile.type === FLOOR);
    const discoveredFloor = tiles.filter(tile => tile.type === FLOOR && tile.discoveredPercent > 0);
    const percentDiscovered = Number((discoveredFloor.length / totalFloor.length).toFixed(2));

    return (
      <div className="info-container">
        <h2>i n f o</h2>
        {dungeons ? (
          <div className="info">
            <ul>
              <li>{`${dungeons.length} dungeons generated`}</li>
              <li>{`${percentDiscovered} percent explored`}</li>
              <li>{`Selected: [${selectedPosition}]`}</li>
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
  map: array,
};

export default Info;
