import React, {Component, Fragment} from 'react';
import {initializeMap, getNewPosition, findStartingPosition, isArrayEqual} from '../utilities';
import {updateMap} from '../utilities/map/updateMap';
import Info from './components/info';
import Stats from './components/stats';
import Map from './components/map';
import './style/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: [],
      dungeons: [],
      selectedPosition: [],
    };
  }

  async componentDidMount() {
    const {map, dungeons} = await initializeMap();
    const selectedPosition = findStartingPosition(map);

    this.setState({
      map: updateMap(map, selectedPosition),
      dungeons,
      selectedPosition,
    });

    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = event => {
    const {selectedPosition, map} = this.state;
    const newPosition = getNewPosition(map, selectedPosition, event);

    if (!isArrayEqual(selectedPosition, newPosition)) {
      this.setState({
        selectedPosition: newPosition,
        map: updateMap(map, newPosition, selectedPosition),
      });
    }
  };

  render() {
    const {selectedPosition, map, dungeons} = this.state;

    return (
      <Fragment>
        <Info map={map} dungeons={dungeons} selectedPosition={selectedPosition} />
        <div className="app-container" onKeyDown={this.handleKeyDown}>
          <h1>c r a w l</h1>
          <Map map={map} selectedPosition={selectedPosition} />
        </div>
        <Stats />
      </Fragment>
    );
  }
}
