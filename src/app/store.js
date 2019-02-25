import {withReduxDevtools, createConnectedStore} from 'undux';

const initialState = {
  name: '',
  class: '',
  hp: 0,
  mp: 0,
  atk: 0,
  def: 0,
  satk: 0,
  sdef: 0,
  items: [],
  gameLog: [],
  monsters: [],
  monsterPositions: [],
  chests: [],
  chestPositions: [],
};

export default createConnectedStore(initialState, withReduxDevtools);
