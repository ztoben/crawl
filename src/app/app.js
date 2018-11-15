import React, {Component} from 'react';
import {initializeMap} from '../utilities';
import './style/app.scss';
import Tile from './components/tile';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: initializeMap()
    };
  }

  renderTiles = () => {
    let tiles = [];

    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        tiles.push(
          <Tile value={this.state.map[x][y]} />
        );
      }
    }

    return tiles;
  };

  render() {
    return (
      <div className="app-container">
        <h1>c r a w l</h1>
        <div className="map-container">
          {this.renderTiles()}
        </div>
      </div>
  )
  }
}
