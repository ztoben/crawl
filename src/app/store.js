import {withReduxDevtools, createConnectedStore} from 'undux';

const initialState = {
  map: [],
  dungeons: [],
  miniMapPng: undefined,
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
  selectedPosition: [],
  gameState: 'ongoing', //ongoing, over, win
};

export default createConnectedStore(initialState, withReduxDevtools);
