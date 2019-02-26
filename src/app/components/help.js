import React, {Component} from 'react';
import {CHEST_CONTENT} from '../../utilities/tiles/tileIndicators';

class Help extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Your objective is to escape the dungeon</li>
          <li>Move using the arrow keys (←, ↑, →, ↓)</li>
          <li>
            Open chests ({<span style={{color: '#32CD32'}}>{CHEST_CONTENT}</span>}), to collect
            powerups, warp through portals, or finish the game
          </li>
        </ul>
      </div>
    );
  }
}

export default Help;
