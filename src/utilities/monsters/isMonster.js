import {MONSTER} from './constants';

export function isMonster(tile) {
  return MONSTER === tile.type;
}
