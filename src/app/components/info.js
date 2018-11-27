import React, {Component, Fragment} from 'react';
import {array} from 'prop-types';
import {FLOOR} from '../../utilities/tiles/constants';
import '../style/info.scss';
import MiniMap from './miniMap';

class Info extends Component {
  renderDungeonInfo = () => {
    const {dungeons, selectedPosition, map} = this.props;
    const tiles = map.flat();
    const totalFloor = tiles.filter(tile => tile.type === FLOOR);
    const discoveredFloor = tiles.filter(tile => tile.type === FLOOR && tile.discoveredPercent > 0);
    const percentDiscovered = Number(
      ((discoveredFloor.length / totalFloor.length) * 100).toFixed(2)
    );

    return dungeons && dungeons.length ? (
      <Fragment>
        <ul>
          <li>{`${dungeons.length} dungeons generated`}</li>
          <li>{`${percentDiscovered} percent explored`}</li>
          <li>{`Selected: [${selectedPosition}]`}</li>
        </ul>
        <MiniMap map={map} selectedPosition={selectedPosition} />
      </Fragment>
    ) : null;
  };

  render() {
    return (
      <div className="info-container">
        <h2>i n f o</h2>
        <div className="info">{this.renderDungeonInfo()}</div>
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
