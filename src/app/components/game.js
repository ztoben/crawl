import React, {Component, Fragment} from 'react';
import PNGlib from 'node-pnglib';
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
import {initializeMiniMap} from '../../utilities/miniMap';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: [],
      dungeons: [],
      selectedPosition: [],
      moves: 0,
      miniMapPng: new PNGlib(200, 200),
    };
  }

  async componentDidMount() {
    const {miniMapPng} = this.state;
    const {map, dungeons} = await initializeMap();
    const selectedPosition = findStartingPosition(map);

    initializeMiniMap(miniMapPng, map);

    this.setState({
      map: updateMaps(map, miniMapPng, selectedPosition),
      dungeons,
      selectedPosition,
    });

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = event => {
    const {selectedPosition, map, moves, miniMapPng} = this.state;
    const newPosition = getNewPosition(map, selectedPosition, event);

    if (!isArrayEqual(selectedPosition, newPosition)) {
      this.setState({
        selectedPosition: newPosition,
        map: updateMaps(map, miniMapPng, newPosition, selectedPosition),
        moves: moves + 1,
      });
    }
  };

  render() {
    const {selectedPosition, map, dungeons, moves, miniMapPng} = this.state;

    return (
      <Fragment>
        <Info
          map={map}
          dungeons={dungeons}
          selectedPosition={selectedPosition}
          miniMapPng={miniMapPng}
          moves={moves}
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
