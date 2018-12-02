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
    const {newMap} = updateMaps(map, miniMapPng, selectedPosition, [0, 0]);

    this.setState({
      map: newMap,
      dungeons,
      selectedPosition,
    });

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = event => {
    const {selectedPosition, map, moves, miniMapPng} = this.state;
    const newPosition = getNewPosition(map, selectedPosition, event);

    if (!isArrayEqual(selectedPosition, newPosition)) {
      const {newMap} = updateMaps(map, miniMapPng, newPosition, selectedPosition);

      this.setState({
        selectedPosition: newPosition,
        map: newMap,
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
