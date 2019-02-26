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
import Help from './help';

class NewGame extends Component {
  constructor(props) {
    super(props);

    this.nameInputRef = React.createRef();

    this.state = {
      nameNotificationShown: false,
      helpShown: false,
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
      store.set('gameLog')([]);
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

  handleHelpShow = () => {
    this.setState({helpShown: true});
  };

  handleHelpDismiss = () => {
    this.setState({helpShown: false});
  };

  render() {
    const {store} = this.props;

    return (
      <div className="app-container">
        <span className="help-icon" onClick={this.handleHelpShow}>
          <p>?</p>
        </span>
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
            notification={<span>"you must set a name"</span>}
            dismissHandler={this.handleNameNotificationDismiss}
          />
          <Notification
            shown={this.state.helpShown}
            type="info"
            notification={<Help />}
            dismissHandler={this.handleHelpDismiss}
          />
        </div>
      </div>
    );
  }
}

export default Store.withStore(NewGame);
