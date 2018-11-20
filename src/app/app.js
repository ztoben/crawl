import React, {Component, Fragment} from 'react';
import {initializeMap, getNewPosition, findStartingPosition} from '../utilities';
import Info from './components/info';
import Stats from './components/stats';
import './style/app.scss';
import Map from './components/map';

export default class App extends Component {
  constructor(props) {
    super(props);

    const map = initializeMap();

    this.state = {
      map,
      selectedPosition: findStartingPosition(map),
    };
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  handleKeyDown = event => {
    const {selectedPosition, map} = this.state;

    this.setState({
      selectedPosition: getNewPosition(map, selectedPosition, event),
    });
  };

  render() {
    const {selectedPosition, map} = this.state;

    return (
      <Fragment>
        <Info />
        <div className="app-container" onKeyDown={this.handleKeyDown}>
          <h1>c r a w l</h1>
          <Map map={map} selectedPosition={selectedPosition} />
        </div>
        <Stats />
      </Fragment>
    );
  }
}
