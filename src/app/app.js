import React, {Component, Fragment} from 'react';
import {initializeMap, getNewPosition, findStartingPosition} from '../utilities';
import Info from './components/info';
import Stats from './components/stats';
import './style/app.scss';
import Map from './components/map';
import {updateDiscoveredTiles} from '../utilities/map/updateDiscoveredTiles';

export default class App extends Component {
  constructor(props) {
    super(props);

    const {map, dungeons} = initializeMap();
    const selectedPosition = findStartingPosition(map);

    this.state = {
      map: updateDiscoveredTiles(map, selectedPosition),
      dungeons,
      selectedPosition,
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = event => {
    const {selectedPosition, map} = this.state;
    const newPosition = getNewPosition(map, selectedPosition, event);

    this.setState({
      selectedPosition: newPosition,
      map: updateDiscoveredTiles(map, newPosition),
    });
  };

  render() {
    const {selectedPosition, map, dungeons} = this.state;

    return (
      <Fragment>
        <Info dungeons={dungeons} selectedPosition={selectedPosition} />
        <div className="app-container" onKeyDown={this.handleKeyDown}>
          <h1>c r a w l</h1>
          <Map map={map} selectedPosition={selectedPosition} />
        </div>
        <Stats />
      </Fragment>
    );
  }
}
