import React, {Component, Fragment} from 'react';
import {array} from 'prop-types';
import {FLOOR} from '../../utilities/tiles/constants';
import '../style/info.scss';
import MiniMap from './miniMap';

class Info extends Component {
  renderDungeonInfo = () => {
    const {dungeons, selectedPosition, map} = this.props;
    const [discoveredFloor, totalFloor] = map.flat().reduce(
      (acc, {type, discoveredPercent}) => {
        if (type === FLOOR) {
          acc[1]++;
          if (discoveredPercent > 0) acc[0]++;
        }
        return acc;
      },
      [0, 0]
    );
    const percentDiscovered = Number(((discoveredFloor / totalFloor) * 100).toFixed(2));

    return dungeons && dungeons.length ? (
      <Fragment>
        <ul>
          <li>{`${dungeons.length} dungeons generated`}</li>
          <li>{`${percentDiscovered} percent explored`}</li>
          <li>{`Selected: [${selectedPosition[1]}, ${selectedPosition[0]}]`}</li>
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
