import {withReduxDevtools, createConnectedStore} from 'undux';
import {format} from 'date-fns';

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
};

export default createConnectedStore(initialState, withReduxDevtools);
