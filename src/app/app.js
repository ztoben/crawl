import React, {Component, Fragment} from 'react';
import {initializeMap, getViewingArea, getNewPosition, isArrayEqual} from '../utilities';
import Tile from './components/tile';
import Info from './components/info';
import Stats from './components/stats';
import './style/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: initializeMap(),
      selectedPosition: [7, 7]
    };
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown = (event) => {
    const {selectedPosition, map} = this.state;

    this.setState({
      selectedPosition: getNewPosition(map, selectedPosition, event)
    });
  };

  renderTiles = () => {
    const {map, selectedPosition} = this.state;

    return getViewingArea(selectedPosition, map).map(row => {
      return row.map(({type, index, content}) => {
        return <Tile
          type={type}
          selected={isArrayEqual(selectedPosition, index)}
          key={index.toString()}
          content={content}
        />;
      });
    });
  };

  render() {
    return (
      <Fragment>
        <Info/>
        <div className="app-container" onKeyDown={this.handleKeyDown}>
          <h1>c r a w l</h1>
          <div className="map-container">
            {this.renderTiles()}
          </div>
        </div>
        <Stats/>
      </Fragment>
  )
  }
}
