import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Store from '../store';
import {getRandomClass, getRandomName, getInitialStats} from '../../utilities';
import {DRUID, CLERIC, ROGUE, THIEF, PALADIN} from '../../utilities/player/classes';
import '../style/newGame.scss';

class NewGame extends Component {
  componentDidMount() {
    this.randomizeCharacter();
  }

  randomizeCharacter = () => {
    const {store} = this.props;

    store.set('name')(getRandomName());
    store.set('class')(getRandomClass());
  };

  randomizeStats = () => {
    const {store} = this.props;

    Object.entries(getInitialStats(store.get('class'))).forEach(([key, value]) =>
      store.set(key)(value)
    );
  };

  handleNameChange = e => {
    const {store} = this.props;

    store.set('name')(e.target.value);
  };

  handleClassChange = e => {
    const {store} = this.props;

    store.set('class')(e.target.value);
  };

  render() {
    const {store} = this.props;

    return (
      <div className="app-container">
        <h1>c r a w l</h1>
        <div className="new-game-container">
          <h2>c h a r a c t e r</h2>
          <input value={store.get('name')} onChange={this.handleNameChange} />
          <select value={store.get('class')} onChange={this.handleClassChange}>
            <option value={PALADIN}>{PALADIN}</option>
            <option value={ROGUE}>{ROGUE}</option>
            <option value={THIEF}>{THIEF}</option>
            <option value={DRUID}>{DRUID}</option>
            <option value={CLERIC}>{CLERIC}</option>
          </select>
          <button onClick={this.randomizeCharacter}>randomize</button>
          <Link onClick={this.randomizeStats} to="/game/">
            <h3>start</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Store.withStore(NewGame);
