import React, {Component, Fragment} from 'react';
import Store from '../store';
import {
  initializeMap,
  initializeMiniMap,
  getNewPosition,
  findStartingPosition,
  isArrayEqual,
  updateMaps,
  getRandomPhrase,
  NEW_GAME,
} from '../../utilities';
import Info from './info';
import Stats from './stats';
import Map from './map';
import GameLog from './gameLog';
import '../style/game.scss';
import {format} from 'date-fns';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moves: 0,
    };
  }

  async componentDidMount() {
    const {store} = this.props;
    const {map, dungeons} = await initializeMap();
    const selectedPosition = findStartingPosition(map);
    const miniMapPng = initializeMiniMap(map);

    store.set('selectedPosition')(selectedPosition);
    store.set('miniMapPng')(miniMapPng);
    store.set('map')(updateMaps(map, miniMapPng, selectedPosition));
    store.set('dungeons')(dungeons);

    document.addEventListener('keydown', this.handleKeyDown.bind(this));

    this.logEvent('************************************************');
    this.logEvent('* Welcome to crawl. Defeat all enemies to win. *');
    this.logEvent('************************************************');
    this.logEvent(getRandomPhrase(NEW_GAME));
  }

  logEvent = event => {
    const {store} = this.props;
    const gameLog = [...store.get('gameLog')];

    gameLog.push({
      content: event,
      time: format(new Date(), 'hh:mm:ss'),
    });

    store.set('gameLog')(gameLog);
  };

  handleKeyDown = event => {
    const {store} = this.props;
    const {moves} = this.state;

    const map = store.get('map');
    const miniMapPng = store.get('miniMapPng');
    const selectedPosition = store.get('selectedPosition');
    const newPosition = getNewPosition(map, selectedPosition, event, this.logEvent, store);

    if (!isArrayEqual(selectedPosition, newPosition)) {
      store.set('selectedPosition')(newPosition);
      store.set('map')(updateMaps(map, miniMapPng, newPosition));

      this.setState({
        moves: moves + 1,
      });
    }
  };

  render() {
    const {moves} = this.state;
    const {store} = this.props;

    const map = store.get('map');
    const dungeons = store.get('dungeons');
    const miniMapPng = store.get('miniMapPng');
    const selectedPosition = store.get('selectedPosition');

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
          <Map map={map} selectedPosition={selectedPosition} />
        </div>
        <Stats />
        <GameLog />
      </Fragment>
    );
  }
}

export default Store.withStore(Game);
