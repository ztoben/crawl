import {createConnectedStore} from 'undux';

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
  exp: 0,
  expRequired: 10,
  level: 1,
  items: [],
  gameLog: [],
  monsters: [],
  monsterPositions: [],
  chests: [],
  chestPositions: [],
  selectedPosition: [],
  gameState: 'ongoing',
};

export default createConnectedStore(initialState);
