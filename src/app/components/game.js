import React, {Component, Fragment} from 'react';
import {
  initializeMap,
  getNewPosition,
  findStartingPosition,
  isArrayEqual,
  updateMaps,
} from '../../utilities';
import Info from './info';
import Stats from './stats';
import Map from './map';
import '../style/game.scss';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: [],
      dungeons: [],
      selectedPosition: [],
      miniMapArray: [],
    };
  }

  async componentDidMount() {
    const {map, dungeons} = await initializeMap();
    const selectedPosition = findStartingPosition(map);
    const {newMap, newMiniMapArray} = updateMaps(map, [], selectedPosition);

    this.setState({
      map: newMap,
      miniMapArray: newMiniMapArray,
      dungeons,
      selectedPosition,
    });

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = event => {
    const {selectedPosition, map, miniMapArray} = this.state;
    const newPosition = getNewPosition(map, selectedPosition, event);

    if (!isArrayEqual(selectedPosition, newPosition)) {
      const {newMap, newMiniMapArray} = updateMaps(
        map,
        miniMapArray,
        newPosition,
        selectedPosition
      );

      this.setState({
        selectedPosition: newPosition,
        map: newMap,
        miniMapArray: newMiniMapArray,
      });
    }
  };

  render() {
    const {selectedPosition, map, dungeons, miniMapArray} = this.state;

    return (
      <Fragment>
        <Info
          map={map}
          dungeons={dungeons}
          selectedPosition={selectedPosition}
          miniMapArray={miniMapArray}
        />
        <div className="app-container" onKeyDown={this.handleKeyDown}>
          <h1>c r a w l</h1>
          <Map map={map} selectedPosition={selectedPosition} />
        </div>
        <Stats />
      </Fragment>
    );
  }
}
