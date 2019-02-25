import React, {Component} from 'react';
import Store from '../store';
import '../style/gameLog.scss';

class GameLog extends Component {
  render() {
    const {store} = this.props;
    const gameLog = [...store.get('gameLog')];

    /*
      gameLog store shape:
      [
        {
          content: string,
          time: string
        }
      ]
     */

    return (
      <div className="game-log-container">
        <div className="game-log">
          <ul>
            {gameLog.map(({content, time}, idx) => {
              return <li key={idx}>{`[${time}]: ${content}`}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Store.withStore(GameLog);
