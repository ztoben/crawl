import {withReduxDevtools, createConnectedStore} from 'undux';
import {getRandomClass, getRandomName} from '../utilities';

const initialState = {
  name: getRandomName(),
  class: getRandomClass(),
  hp: 0,
  mp: 0,
  atk: 0,
  def: 0,
  satk: 0,
  sdef: 0,
  items: [],
};

export default createConnectedStore(initialState, withReduxDevtools);
