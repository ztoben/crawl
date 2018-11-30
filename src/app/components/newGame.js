import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Store from '../store';
import {getRandomClass, getRandomName} from '../../utilities';
import {DRUID, CLERIC, ROGUE, THIEF, PALADIN} from '../../utilities/player/classes';
import '../style/newGame.scss';
import {getInitialStats} from '../../utilities/player/getInitialStatValues';

class NewGame extends Component {
  randomizeCharacter = () => {
    const {store} = this.props;

    store.set('name')(getRandomName());
    store.set('class')(getRandomClass());
  };

  handleNameChange = e => {
    const {store} = this.props;

    store.set('name')(e.target.value);
  };

  handleClassChange = e => {
    const {store} = this.props;

    store.set('class')(e.target.value);
    let stats = getInitialStats(store.get('class'));
    store.set('hp')(stats.hp);
    store.set('mp')(stats.mp);
    store.set('atk')(stats.atk);
    store.set('def')(stats.def);
    store.set('satk')(stats.satk);
    store.set('sdef')(stats.sdef);
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
          <Link to="/game/">
            <h3>start</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Store.withStore(NewGame);
