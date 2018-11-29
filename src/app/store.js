import {withReduxDevtools, createConnectedStore} from 'undux';
import {getRandomName} from '../utilities';
import {WARRIOR} from '../utilities/player/classes';

const initialState = {
  name: getRandomName(),
  class: WARRIOR,
  hp: 100,
  mp: 50,
  atk: 15,
  def: 10,
  satk: 7,
  sdef: 3,
  items: [],
};

export default createConnectedStore(initialState, withReduxDevtools);
