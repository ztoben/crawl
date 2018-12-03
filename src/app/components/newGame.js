import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Store from '../store';
import Dice from './dice';
import Notification from './notification';
import {
  getRandomClass,
  getRandomName,
  getInitialStats,
  getRandomArmor,
  getRandomWeapon,
  allClasses,
} from '../../utilities';
import '../style/newGame.scss';

class NewGame extends Component {
  constructor(props) {
    super(props);

    this.nameInputRef = React.createRef();

    this.state = {
      nameNotificationShown: false,
    };
  }

  componentDidMount() {
    this.randomizeName();
    this.randomizeClass();
  }

  randomizeName = () => {
    const {store} = this.props;

    store.set('name')(getRandomName());
  };

  randomizeClass = () => {
    const {store} = this.props;

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
      this.setState({
        nameNotificationShown: true,
      });
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

  handleNameNotificationDismiss = () => {
    this.setState({
      nameNotificationShown: false,
    });

    this.nameInputRef.current.focus();
  };

  render() {
    const {store} = this.props;

    return (
      <div className="app-container">
        <h1>c r a w l</h1>
        <div className="new-game-container">
          <h2>n a m e</h2>
          <div className="name-container">
            <input
              ref={this.nameInputRef}
              value={store.get('name')}
              onChange={this.handleNameChange}
              onFocus={this.handleNameFocus}
            />
            <Dice onClick={this.randomizeName} />
          </div>
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
          <Link onClick={this.handleStartGame} to="/game/">
            <h3>start</h3>
          </Link>
          <Notification
            shown={this.state.nameNotificationShown}
            type="alert"
            notification="you must set a name"
            dismissHandler={this.handleNameNotificationDismiss}
          />
        </div>
      </div>
    );
  }
}

export default Store.withStore(NewGame);
