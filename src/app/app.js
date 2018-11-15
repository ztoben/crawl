import React, {Component} from 'react';
import {initializeMap} from '../utilities';
import './style/app.scss';
import Tile from './components/tile';
import getViewingArea from '../utilities/map/getViewingArea';
import isArrayEqual from '../utilities/isArrayEqual';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: initializeMap(),
      position: [0, 0]
    };
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown = (event) => {
    const {position} = this.state;

    switch (event.key) {
      case 'ArrowDown':
        position[0]++;
        break;
      case 'ArrowUp':
        position[0]--;
        break;
      case 'ArrowLeft':
        position[1]--;
        break;
      case 'ArrowRight':
        position[1]++;
        break;
    }

    this.setState({position});
  };

  renderTiles = () => {
    const {map, position} = this.state;

    return getViewingArea(position, map).map(row => {
      return row.map(({type, index}) => {
        return <Tile
          type={type}
          selected={isArrayEqual(position, index)}
          key={index.toString()}
        />;
      });
    });
  };

  render() {
    return (
      <div className="app-container" onKeyDown={this.handleKeyDown}>
        <h1>c r a w l</h1>
        <div className="map-container">
          {this.renderTiles()}
        </div>
      </div>
  )
  }
}
