import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Store from '../store';
import {
  getRandomClass,
  getRandomName,
  getInitialStats,
  getRandomArmor,
  getRandomWeapon,
} from '../../utilities';
import {allClasses} from '../../utilities/player/classes';
import '../style/newGame.scss';

class NewGame extends Component {
  constructor(props) {
    super(props);

    this.nameInputRef = React.createRef();
  }

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

  randomizeItems = () => {
    const {store} = this.props;

    store.set('items')([getRandomWeapon(), getRandomArmor()]);
  };

  handleStartGame = e => {
    const {store} = this.props;

    if (store.get('name') === '') {
      alert('you must set a name');
      this.nameInputRef.current.focus();
      e.preventDefault();
    } else {
      this.randomizeStats();
      this.randomizeItems();
    }
  };

  handleNameChange = e => {
    const {store} = this.props;

    store.set('name')(e.target.value);
  };

  handleNameFocus = e => {
    e.target.select();
  };

  render() {
    const {store} = this.props;

    return (
      <div className="app-container">
        <h1>c r a w l</h1>
        <div className="new-game-container">
          <h2>n a m e</h2>
          <input
            ref={this.nameInputRef}
            value={store.get('name')}
            onChange={this.handleNameChange}
            onFocus={this.handleNameFocus}
          />
          <h2>c l a s s</h2>
          <div className="class-select-container">
            {allClasses.map(curClass => {
              return (
                <span
                  className={store.get('class') === curClass ? 'selected' : ''}
                  onClick={() => store.set('class')(curClass)}
                  key={curClass}
                >
                  {curClass}
                </span>
              );
            })}
          </div>
          <button onClick={this.randomizeCharacter}>randomize</button>
          <Link onClick={this.handleStartGame} to="/game/">
            <h3>start</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Store.withStore(NewGame);
